'use strict';

const ipc = require("electron").ipcRenderer;
window.onload = function() {
  document.getElementsByClassName("dmm-ntgnavi")[0].remove()
  const cocos = document.getElementById('game_frame').contentDocument.getElementById('cocos');
  const df = cocos.contentWindow.df;
  const user = new UserData(df);
}

function UserData(df) {
  this.ud = df.UD;
  this.startUpdate();
}
UserData.prototype.updateStamina = function() {
  // 現在のモチベ値
  this.stamina = this.ud.getGameRankUserData().getStamina();
  // 現在の最大モチベ値
  this.maxStamina = this.ud.getGameRankUserData().getMaxStamina();
  // モチベ0からMAXまでにかかる秒数
  this.maxStaminaTime = this.ud.getGameRankUserData().getMaxStaminaTime();
  // モチベ0から現在までに経った秒数
  this.staminaTime = this.ud.getGameRankUserData().getStaminaTime();
  // モチベ全回復予定時刻
  this.staminaMaxTime = new Date().getTime() + (this.maxStaminaTime - this.staminaTime) * 1000;
}
UserData.prototype.startUpdate = function() {
  let flag = false;
  let first = true;
  setInterval(function(user) {
    if (!user.ud.getGameRankUserData()) return;
    user.updateStamina();
//    ipc.sendToHost('staminow', user.stamina);
    if (user.stamina >= user.maxStamina) {
      if (flag) return;
      ipc.sendToHost('stamimax', "既に全回復です");
      if (!first) {
        new Notification("である", { body: "モチベが全回復しました" });
      }
      flag = true;
    } else {
      ipc.sendToHost('stamimax', new Date(user.staminaMaxTime).toLocaleString());
      flag = false;
    }
    first = false;
  }, 1000, this);
 }