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
var uiCreateRoom = (function (_super) {
    __extends(uiCreateRoom, _super);
    function uiCreateRoom() {
        var _this = _super.call(this) || this;
        _this.num = 1;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    uiCreateRoom.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    uiCreateRoom.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    uiCreateRoom.prototype.addToStage = function () {
        this.num = 1;
        this.playerNum.text = this.num.toString();
        this.sub.visible = false;
        this.plus.visible = true;
        this.plus.touchEnabled = true;
        this.sub.touchEnabled = false;
    };
    uiCreateRoom.prototype.init = function () {
        this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
        this.plus.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlusClick, this);
        this.sub.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSubClick, this);
        this.create.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createRoom, this);
        this.addMsResponseListen();
    };
    uiCreateRoom.prototype.addMsResponseListen = function () {
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_CREATEROOM_RSP, this.createRoomResponse, this);
    };
    uiCreateRoom.prototype.onBackClick = function () {
        ContextManager.Instance.dialogBack();
    };
    uiCreateRoom.prototype.onPlusClick = function () {
        if (this.num >= 3) {
            this.plus.touchEnabled = false;
            this.plus.visible = false;
            this.num = 3;
        }
        else {
            this.num++;
            this.sub.touchEnabled = true;
        }
        this.sub.visible = true;
        this.playerNum.text = this.num.toString();
    };
    uiCreateRoom.prototype.onSubClick = function () {
        if (this.num <= 1) {
            this.sub.touchEnabled = false;
            this.sub.visible = false;
            this.num = 1;
        }
        else {
            this.num--;
            this.plus.touchEnabled = true;
        }
        this.plus.visible = true;
        this.playerNum.text = this.num.toString();
    };
    uiCreateRoom.prototype.createRoom = function () {
        GameData.maxPlayerNum = this.num;
        var roomName = this.roomName.text;
        var create = new MsCreateRoomInfo(roomName, this.num, 0, 0, 1, "");
        mvs.MsEngine.getInstance.createRoom(create, JSON.stringify({ name: GameData.gameUser.name, avatar: GameData.gameUser.avatar }));
    };
    uiCreateRoom.prototype.createRoomResponse = function (ev) {
        var rsp = ev.data;
        GameData.roomID = rsp.roomID;
        ContextManager.Instance.showUI(UIType.roomView, [true, rsp]);
    };
    return uiCreateRoom;
}(BaseView));
__reflect(uiCreateRoom.prototype, "uiCreateRoom");
//# sourceMappingURL=uiCreateRoom.js.map