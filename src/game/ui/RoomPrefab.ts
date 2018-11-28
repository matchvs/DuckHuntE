class RoomPrefab extends eui.Component implements  eui.UIComponent {
	public roomId:eui.Label;
	public roomname:eui.Label;
	public roomItem:eui.Group;
	public msRoomAttribute;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init();
	}
	
	private addToStage()
	{
	}

	private init()
	{
		this.roomItem.addEventListener(egret.TouchEvent.TOUCH_TAP,this.joinRoom,this);
		this.roomId.text = this.msRoomAttribute.roomID;
		this.roomname.text = this.msRoomAttribute.roomName;
	}

	private joinRoom()
	{
		let info = {"id":GameData.gameUser.id,"nickName":GameData.gameUser.name,"avatar":GameData.gameUser.avatar};
		let infostr = JSON.stringify(info);
		mvs.MsEngine.getInstance.joinRoom(this.msRoomAttribute.roomID,infostr);
	}
}
window["RoomPrefab"] = RoomPrefab