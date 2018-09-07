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
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = _super.call(this) || this;
        _this.moveSpeed = 6;
        _this.health = 5;
        _this.isDied = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        _this.addEventListener(egret.TimerEvent.ENTER_FRAME, _this.update, _this);
        _this.isDied = false;
        return _this;
    }
    Bird.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Bird.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Bird.prototype.addToStage = function () {
        this.fly.play();
    };
    Bird.prototype.update = function () {
        this.x += this.moveSpeed;
    };
    Bird.prototype.modifyHealth = function (value) {
        if (this.isDied)
            return;
        this.health -= value;
        if (this.health <= 0) {
            if (this.modifyScore != null)
                this.modifyScore();
            this.playDie();
            this.isDied = true;
        }
    };
    Bird.prototype.playDie = function () {
        this.fly.stop();
        this.die.play();
    };
    return Bird;
}(eui.Component));
__reflect(Bird.prototype, "Bird");
//# sourceMappingURL=Bird.js.map