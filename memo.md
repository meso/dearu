# JavaScript オブジェクト

- df.GSP.gameRankInfoPlist.gameRank.levels にそのレベルのマナとモチベの数値
- df.GSP.gameRankInfoPlist.gameRank.rankExperience に次のレベルに必要な経験値の数値
- df.GSP.boostInfoPlist.boostDefault にブースト時の数値の変化
- df.GSP.chargeSkillInfoPlist に総理のスキル詳細
- df.GSP.enemyInfoPlist に敵情報
- df.GSP.enemyParameterInfoPlist に敵データ詳細
- df.GSP.itemInfoPlist に好感度アイテム詳細
- df.GSP.playerCommonInfoPlist に総理データ詳細（レベルごとのとか）
  - 100000 / attackDelayTime = 攻撃速度
- df.GSP.potentialInfoPlist に好感度による変化情報（700まである...）
- df.GSP.productionInfoPlist におさわり判定範囲
- df.GSP.stageInfoPlist 戦挙ステージの詳細データ
- df.GSP.stageStaticBonusInfoPlist ステージの職ボーナスデータ

- df.UD.gameRankUserData.data ユーザのレベルや経験値、モチベ？
- df.UD.gameRankUserData.partiesUserData 組閣情報
- df.UD.gameRankUserData.playersUserData 現在保持している政霊のレベルや好感度等
- df.UD.gameRankUserData.resourceUserData お金や任命券情報等
- df.UD.gameRankUserData.settingUserData 設定情報

- df.UD.getGameRankUserData().getStamina() 現在のモチベ値
- df.UD.getGameRankUserData().getMaxStamina() 現在の最大モチベ値
- df.UD.getGameRankUserData().getStaminaRemainingSeconds() 次のモチベ回復までの秒数
- df.UD.getGameRankUserData().getMaxStaminaTime() モチベ0からMAXまでにかかる秒数
- df.UD.getGameRankUserData().getStaminaTime() モチベ0から現在までに経った秒数

- df.UD.getGameRankUserData().getMana() 現在のマナ
- df.UD.getGameRankUserData().experience 現在の経験値
- df.UD.getGameRankUserData().getMaxRankExperience() レベルアップする経験値
- 

# 画像リソース

## ホーム画面

### 政霊
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/cm-player-icon.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-panel-1.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-roster-icon.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-4001.png から
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-4018.png まで
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-7001.png から
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-7011.png まで
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-9001.png から
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-9012.png まで

### 好感度アイテム他
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-item-icon.png

### 武器名
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-name.png

### NPC
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-1001.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-player-illust-1002.png

### 戦挙マップ
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/hm-stage-thumbnail-01.png

## 戦挙画面

### 建物
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-other.png

### 敵
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-enemy-01.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-enemy-02.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-enemy-03.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-enemy-04.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-enemy-05.png

### 総理
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-player.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-if-player.png

### マップ
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-stage-03-1.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-stage-03-2.png
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/texture/df-map-stage-03-3.png

- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-01.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-02.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-03.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-04.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-05.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-a.txt
- http://d3vhzwqidpn2dk.cloudfront.net/seimani/res/map/stage-path-00-03-b.txt
