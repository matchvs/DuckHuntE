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
var PlayerIcon = (function (_super) {
    __extends(PlayerIcon, _super);
    function PlayerIcon() {
        var _this = _super.call(this) || this;
        _this.userInfo = null;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    PlayerIcon.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayerIcon.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    PlayerIcon.prototype.addToStage = function () {
        this.init();
    };
    PlayerIcon.prototype.init = function () {
        this.player1.visible = false;
        this.userInfo = null;
    };
    PlayerIcon.prototype.setData = function (userInfo) {
        this.player1.visible = true;
        this.userInfo = userInfo;
    };
    return PlayerIcon;
}(eui.Component));
__reflect(PlayerIcon.prototype, "PlayerIcon", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlayerIcon.js.map