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
var uiResult = (function (_super) {
    __extends(uiResult, _super);
    function uiResult() {
        return _super.call(this) || this;
    }
    uiResult.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiResult.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiResult.prototype.onEnter = function (context) {
        var sound = RES.getRes("fire_mp3");
        sound.play(0, 1);
        this.first.visible = false;
        this.second.visible = false;
        this.third.visible = false;
        var dic = context;
        if (dic.length >= 1) {
            var firstValue = dic[0];
            var firstid = firstValue.userId;
            var firtScore = firstValue.score;
            this.firstId.text = firstid;
            this.firstScore.text = firtScore;
            this.first.visible = true;
            if (dic.length >= 2) {
                var secondValue = dic[1];
                var secondid = secondValue.userId;
                var secondScore = secondValue.score;
                this.secondId.text = secondid;
                this.secondScore.text = secondScore;
                this.second.visible = true;
                if (dic.length >= 3) {
                    var thirdValue = dic[2];
                    var thirdid = thirdValue.userId;
                    var thirdScore = thirdValue.score;
                    this.thirdId.text = thirdid;
                    this.thirdScore.text = thirdScore;
                    this.third.visible = true;
                }
            }
            if (firstid == GameData.gameUser.id) {
                var sound = RES.getRes("vitory_mp3");
                sound.play(0, 1);
            }
            else {
                var sound = RES.getRes("lose_mp3");
                sound.play(0, 1);
            }
        }
    };
    uiResult.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
    };
    uiResult.prototype.onBackClick = function () {
        mvs.MsEngine.getInstance.leaveRoom("");
        ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
    };
    return uiResult;
}(BaseView));
__reflect(uiResult.prototype, "uiResult");
//# sourceMappingURL=uiResult.js.map