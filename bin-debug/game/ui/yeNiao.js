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
var yeNiao = (function (_super) {
    __extends(yeNiao, _super);
    function yeNiao() {
        var _this = _super.call(this) || this;
        _this.health = 2;
        _this.moveSpeed = 7;
        return _this;
    }
    return yeNiao;
}(Bird));
__reflect(yeNiao.prototype, "yeNiao", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=yeNiao.js.map