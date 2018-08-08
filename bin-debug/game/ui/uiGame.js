var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var uiGame = (function (_super) {
    __extends(uiGame, _super);
    function uiGame() {
        var _this = _super.call(this) || this;
        _this.time = 0;
        _this.commonBulletList = [];
        _this.plusBulletList = [];
        _this.birdList = [];
        _this.gameStart = false;
        _this.smallBulletNum = 0;
        _this.coinNUM = 0;
        _this.firedCD = 0.5;
        _this.myScore = 0;
        _this.leftScore = 0;
        _this.rightScore = 0;
        _this.positionDic = {};
        _this.timeOnEnterFrame = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.TimerEvent.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    ;
    uiGame.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiGame.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiGame.prototype.addToStage = function () {
        var self = this;
        this.duckGuids.play(0);
        setTimeout(function () {
            self.readyGo.play(0);
            var sound = RES.getRes("readygo_mp3");
            sound.play(0, 1);
        }, 5000);
        setTimeout(function () {
            self.gameStart = true;
            self.timeOnEnterFrame = egret.getTimer();
        }, 8000);
        this.coinNUM = 100;
        this.updateCoin();
        this.smallBulletNum = 10;
        this.updateSmallBullet();
        this.image6.alpha = 0;
        this.myscore.visible = false;
        this.playerGun.visible = false;
        this.leftscore.visible = false;
        this.leftPlayer.visible = false;
        this.rightscore.visible = false;
        this.rightPlayer.visible = false;
        if (GameData.playerUserIds.length == 1) {
            this.myscore.visible = true;
            this.playerGun.visible = true;
        }
        else if (GameData.playerUserIds.length == 2) {
            this.myscore.visible = true;
            this.playerGun.visible = true;
            this.leftPlayer.visible = true;
            this.leftscore.visible = true;
        }
        else if (GameData.playerUserIds.length == 3) {
            this.myscore.visible = true;
            this.playerGun.visible = true;
            this.leftPlayer.visible = true;
            this.leftscore.visible = true;
            this.rightPlayer.visible = true;
            this.rightscore.visible = true;
        }
        GameData.playerUserIds.sort(function (a, b) {
            return a - b;
        });
        this.positionDic = {};
        var index = GameData.playerUserIds.indexOf(GameData.gameUser.id);
        if (index == 0) {
            this.positionDic[GameData.gameUser.id] = "middle";
            if (GameData.maxPlayerNum == 2) {
                this.positionDic[GameData.playerUserIds[1]] = "left";
            }
            else if (GameData.maxPlayerNum == 3) {
                this.positionDic[GameData.playerUserIds[1]] = "left";
                this.positionDic[GameData.playerUserIds[2]] = "right";
            }
        }
        else if (index == 1) {
            this.positionDic[GameData.playerUserIds[0]] = "left";
            this.positionDic[GameData.gameUser.id] = "middle";
            if (GameData.maxPlayerNum == 3) {
                this.positionDic[GameData.playerUserIds[1]] = "right";
            }
        }
        else if (index == 2) {
            this.positionDic[GameData.playerUserIds[0]] = "left";
            this.positionDic[GameData.playerUserIds[1]] = "right";
            this.positionDic[GameData.gameUser.id] = "middle";
        }
        for (var i = 0; i < this.birdList.length; i++) {
            this.removeChild(this.birdList[i]);
        }
        this.birdList = [];
        var bg = RES.getRes("duckBg_mp3");
        this.bgChannel = bg.play();
    };
    uiGame.prototype.addMsResponseListen = function () {
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify, this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify, this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse, this);
    };
    uiGame.prototype.init = function () {
        this.bulletImg.mask = this.bulletMask;
        this.rotationController.addEventListener(egret.TouchEvent.CHANGE, this.onSlideChange, this);
        this.commonGun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.commonGunClick, this);
        this.plusGun.addEventListener(egret.TouchEvent.TOUCH_TAP, this.plusGunClick, this);
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.addMsResponseListen();
        var self = this;
        setInterval(function () {
            if (!self.gameStart)
                return;
            var birdType = Math.floor(Math.random() * 3);
            var birdComponent;
            switch (birdType) {
                case 0:
                    birdComponent = new yeNiao();
                    birdComponent.x = -120;
                    birdComponent.y = 50;
                    break;
                case 1:
                    birdComponent = new yazi();
                    birdComponent.x = -120;
                    birdComponent.y = 150;
                    break;
                case 2:
                    birdComponent = new BlueBird();
                    birdComponent.x = -120;
                    birdComponent.y = 200;
                    break;
            }
            birdComponent.modifyScore = function () { self.modifyMyScore(); };
            self.birdList.push(birdComponent);
            self.addChild(birdComponent);
        }, 5000);
        this.time = 60;
        this.updateTime();
    };
    uiGame.prototype.update = function () {
        if (!this.gameStart)
            return;
        var self = this;
        for (var i = 0; i < this.commonBulletList.length; i++) {
            var item = this.commonBulletList[i];
            for (var j = 0; j < this.birdList.length; j++) {
                var bird = this.birdList[j];
                if (hitTestPosition(item, bird)) {
                    if (this.contains(item)) {
                        this.removeChild(item);
                        this.commonBulletList.splice(i, 1);
                    }
                    if (this.contains(bird)) {
                        bird.modifyHealth(1);
                    }
                }
            }
            if (item.y < 0) {
                if (this.contains(item)) {
                    if (this.contains(item)) {
                        this.removeChild(item);
                        this.commonBulletList.splice(i, 1);
                    }
                }
            }
        }
        for (var i = 0; i < this.plusBulletList.length; i++) {
            var item = this.plusBulletList[i];
            for (var j = 0; j < this.birdList.length; j++) {
                var bird = this.birdList[j];
                if (hitTestPosition(item, bird)) {
                    if (this.contains(item)) {
                        this.removeChild(item);
                        this.plusBulletList.splice(i, 1);
                    }
                    if (this.contains(bird)) {
                        bird.modifyHealth(7);
                    }
                }
            }
            if (item.y < 0) {
                if (this.contains(item)) {
                    if (!this.contains(item))
                        continue;
                    this.removeChild(item);
                    this.plusBulletList.splice(i, 1);
                }
            }
        }
        for (var i = 0; i < this.birdList.length; i++) {
            var item = this.birdList[i];
            if (item == null || item == undefined)
                return;
            if (item.x > this.stage.width) {
                this.removeChild(item);
                this.birdList.splice(i, 1);
            }
        }
        if (this.firedCD > 0) {
            this.firedCD -= 0.05;
        }
        var now = egret.getTimer();
        var pass = (now - this.timeOnEnterFrame) / 1000;
        this.time = this.time - pass;
        if (this.time <= 0) {
            this.time = 0;
            this.gameStart = false;
            var dic_1 = [];
            for (var i = 0; i < GameData.playerUserIds.length; i++) {
                var id = GameData.playerUserIds[i];
                var pos = this.positionDic[id];
                var score = 0;
                if (pos == "left") {
                    score = this.leftScore;
                }
                else if (pos == "middle") {
                    score = this.myScore;
                }
                else if (pos == "right") {
                    score = this.rightScore;
                }
                var scoreInfo = { userId: id, score: score };
                dic_1.push(scoreInfo);
            }
            dic_1.sort(function (a, b) {
                return b.score - a.score;
            });
            var sound = RES.getRes("gameover_mp3");
            sound.play(0, 1);
            this.bgChannel.stop();
            this.gameover.play();
            setTimeout(function () {
                ContextManager.Instance.showUI(UIType.gameOver, dic_1);
            }, 1500);
        }
        this.updateTime();
        this.timeOnEnterFrame = egret.getTimer();
    };
    uiGame.prototype.onSlideChange = function () {
        var value = this.rotationController.value;
        var rotation = 6 * value - 30;
        this.playerGun.rotation = rotation;
        var self = this;
        var userids = [];
        userids = GameData.playerUserIds;
        var jsonValue = JSON.stringify({
            action: "updatePositon",
            rotation: self.playerGun.rotation,
            uid: GameData.gameUser.id
        });
        mvs.MsEngine.getInstance.sendEvent(jsonValue);
    };
    uiGame.prototype.commonGunClick = function () {
        if (!this.gameStart)
            return;
        if (this.smallBulletNum <= 0 || this.firedCD > 0)
            return;
        var self = this;
        var commonbullet = new CommonBullet();
        var targetGunPoint = this.playerGun.localToGlobal(this.playerCommonBulletPos.x, this.playerCommonBulletPos.y);
        commonbullet.x = targetGunPoint.x;
        commonbullet.y = targetGunPoint.y;
        this.addChild(commonbullet);
        var rotation = self.playerGun.rotation;
        commonbullet.rotation = rotation;
        var y = Math.sin((90 - rotation) * Math.PI / 180);
        var x = Math.cos((90 - rotation) * Math.PI / 180);
        commonbullet.xSpeed = 12 * x;
        commonbullet.ySpeed = 12 * y;
        this.commonBulletList.push(commonbullet);
        this.firedCD = 0.5;
        this.smallBulletNum--;
        this.updateSmallBullet();
        if (this.smallBulletNum <= 0) {
            this.playBulletAnimation();
        }
        var userids = [];
        userids = GameData.playerUserIds;
        var value = {
            action: "shoot",
            type: "commonBullet",
            uid: GameData.gameUser.id
        };
        mvs.MsEngine.getInstance.sendEvent(JSON.stringify(value));
        var sound = RES.getRes("fire_mp3");
        sound.play(0, 1);
    };
    uiGame.prototype.plusGunClick = function () {
        if (!this.gameStart)
            return;
        if (this.coinNUM <= 0 || this.firedCD > 0)
            return;
        var self = this;
        var plusBullet = new PlusBullet();
        var targtGunPoint = this.playerGun.localToGlobal(this.playerBulletPos.x, this.playerBulletPos.y);
        plusBullet.x = targtGunPoint.x;
        plusBullet.y = targtGunPoint.y;
        this.addChild(plusBullet);
        var rotation = self.playerGun.rotation;
        plusBullet.rotation = rotation;
        var y = Math.sin((90 - rotation) * Math.PI / 180);
        var x = Math.cos((90 - rotation) * Math.PI / 180);
        plusBullet.ySpeed = 12 * y;
        plusBullet.xSpeed = 12 * x;
        this.plusBulletList.push(plusBullet);
        this.firedCD = 0.5;
        this.coinNUM--;
        this.updateCoin();
        var userids = [];
        userids = GameData.playerUserIds;
        var value = JSON.stringify({
            action: "shoot",
            type: "plusBullet",
            uid: GameData.gameUser.id
        });
        mvs.MsEngine.getInstance.sendEvent(value);
        var sound = RES.getRes("firePlus_mp3");
        sound.play(0, 1);
    };
    uiGame.prototype.leaveRoomNotify = function (ev) {
        if (!this.parent)
            return;
    };
    uiGame.prototype.sendEventNotify = function (event) {
        if (!this.parent)
            return;
        var sdnotify = event.data;
        if (sdnotify && sdnotify.cpProto) {
            if (sdnotify.cpProto.indexOf("updateScore") >= 0) {
                if (sdnotify.srcUserId != GameData.gameUser.id) {
                    var info = JSON.parse(sdnotify.cpProto);
                    var score = info.score;
                    var pos = this.positionDic[sdnotify.srcUserId];
                    if (pos == "left") {
                        this.leftScore = score;
                        this.leftScoreLabel.text = score;
                    }
                    else if (pos == "right") {
                        this.rightScore = score;
                        this.rightScoreLabel.text = score;
                    }
                }
            }
            else if (sdnotify.cpProto.indexOf("updatePositon") >= 0) {
                if (sdnotify.srcUserId != GameData.gameUser.id) {
                    var info = JSON.parse(sdnotify.cpProto);
                    var pos = this.positionDic[sdnotify.srcUserId];
                    var rotation = info.rotation;
                    if (pos == "left") {
                        this.leftPlayer.rotation = rotation;
                    }
                    else if (pos == "right") {
                        this.rightPlayer.rotation = rotation;
                    }
                }
            }
            else if (sdnotify.cpProto.indexOf("shoot") >= 0) {
                if (sdnotify.srcUserId != GameData.gameUser.id) {
                    var info = JSON.parse(sdnotify.cpProto);
                    var pos = this.positionDic[sdnotify.srcUserId];
                    var type = info.type;
                    if (pos == "left") {
                        if (type == "plusBullet") {
                            var self_1 = this;
                            var plusBullet = new PlusBullet();
                            var targtGunPoint = this.leftPlayer.localToGlobal(this.leftPlayerBulletPos.x, this.leftPlayerBulletPos.y);
                            plusBullet.x = targtGunPoint.x;
                            plusBullet.y = targtGunPoint.y;
                            this.addChild(plusBullet);
                            var rotation = self_1.leftPlayer.rotation;
                            plusBullet.rotation = rotation;
                            var y = Math.sin((90 - rotation) * Math.PI / 180);
                            var x = Math.cos((90 - rotation) * Math.PI / 180);
                            plusBullet.ySpeed = 12 * y;
                            plusBullet.xSpeed = 12 * x;
                        }
                        else if (type == "commonBullet") {
                            var self_2 = this;
                            var commonbullet = new CommonBullet();
                            var targetGunPoint = this.leftPlayer.localToGlobal(this.leftplayerCommonBulletPos.x, this.leftplayerCommonBulletPos.y);
                            commonbullet.x = targetGunPoint.x;
                            commonbullet.y = targetGunPoint.y;
                            this.addChild(commonbullet);
                            var rotation = self_2.leftPlayer.rotation;
                            commonbullet.rotation = rotation;
                            var y = Math.sin((90 - rotation) * Math.PI / 180);
                            var x = Math.cos((90 - rotation) * Math.PI / 180);
                            commonbullet.xSpeed = 12 * x;
                            commonbullet.ySpeed = 12 * y;
                        }
                    }
                    else if (pos == "right") {
                        if (type == "plusBullet") {
                            var self_3 = this;
                            var plusBullet = new PlusBullet();
                            var targtGunPoint = this.rightPlayer.localToGlobal(this.rightPlayerBulletPos.x, this.rightPlayerBulletPos.y);
                            plusBullet.x = targtGunPoint.x;
                            plusBullet.y = targtGunPoint.y;
                            this.addChild(plusBullet);
                            var rotation = self_3.rightPlayer.rotation;
                            plusBullet.rotation = rotation;
                            var y = Math.sin((90 - rotation) * Math.PI / 180);
                            var x = Math.cos((90 - rotation) * Math.PI / 180);
                            plusBullet.ySpeed = 12 * y;
                            plusBullet.xSpeed = 12 * x;
                        }
                        else if (type == "commonBullet") {
                            var self_4 = this;
                            var commonbullet = new CommonBullet();
                            var targetGunPoint = this.rightPlayer.localToGlobal(this.rightplayerCommonBulletPos.x, this.rightplayerCommonBulletPos.y);
                            commonbullet.x = targetGunPoint.x;
                            commonbullet.y = targetGunPoint.y;
                            this.addChild(commonbullet);
                            var rotation = self_4.rightPlayer.rotation;
                            commonbullet.rotation = rotation;
                            var y = Math.sin((90 - rotation) * Math.PI / 180);
                            var x = Math.cos((90 - rotation) * Math.PI / 180);
                            commonbullet.xSpeed = 12 * x;
                            commonbullet.ySpeed = 12 * y;
                        }
                    }
                }
            }
        }
    };
    uiGame.prototype.updateCoin = function () {
        this.coinNum.text = this.coinNUM.toString();
    };
    uiGame.prototype.updateSmallBullet = function () {
        this.bulletNum.text = this.smallBulletNum.toString();
    };
    uiGame.prototype.modifyMyScore = function () {
        var userids = [];
        userids = GameData.playerUserIds;
        this.myScore++;
        this.myScoreLabel.text = this.myScore.toString();
        var self = this;
        var value = JSON.stringify({
            action: "updateScore",
            score: self.myScore,
            uid: GameData.gameUser.id
        });
        mvs.MsEngine.getInstance.sendEvent(value);
    };
    uiGame.prototype.playBulletAnimation = function () {
        var self = this;
        this.bullet.play(0);
        setTimeout(function () {
            self.smallBulletNum = 10;
            self.updateSmallBullet();
        }, 3000);
    };
    uiGame.prototype.updateTime = function () {
        this.timer.text = Math.floor(this.time).toString();
    };
    uiGame.prototype.onBackClick = function () {
        ContextManager.Instance.showDialog(UIType.exit);
    };
    uiGame.prototype.leaveRoomResponse = function () {
        this.gameStart = false;
        this.bgChannel.stop();
        ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    return uiGame;
}(BaseView));
__reflect(uiGame.prototype, "uiGame");
//# sourceMappingURL=uiGame.js.map