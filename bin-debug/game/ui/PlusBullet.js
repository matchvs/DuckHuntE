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
var PlusBullet = (function (_super) {
    __extends(PlusBullet, _super);
    function PlusBullet() {
        var _this = _super.call(this) || this;
        _this.xSpeed = 0;
        _this.ySpeed = 0;
        _this.addEventListener(egret.TimerEvent.ENTER_FRAME, _this.update, _this);
        return _this;
    }
    PlusBullet.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlusBullet.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    PlusBullet.prototype.update = function () {
        this.x += this.xSpeed;
        this.y -= this.ySpeed;
    };
    return PlusBullet;
}(eui.Component));
__reflect(PlusBullet.prototype, "PlusBullet", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlusBullet.js.map