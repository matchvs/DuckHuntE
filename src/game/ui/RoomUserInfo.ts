class RoomUserInfo extends eui.Component implements  eui.UIComponent {
	public default:eui.Group;
	public common:eui.Group;
	public username:eui.Label;
	public type1:eui.Group;
	public type2:eui.Group;
	public type3:eui.Group;
	public kick:eui.Image;
	private roomOwner:boolean;
	private myself:boolean;
	public userid = 0;

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
	}

	public init()
	{
		this.type1.visible =false;
		this.type2.visible =false;
		this.type3.visible =false;
		this.default.visible =true;
		this.username.text = "";
		this.common.visible = false;
		this.kick.visible = false;
		this.kick.addEventListener(egret.TouchEvent.TOUCH_TAP,this.kickPlayer,this);
		this.userid = 0;
	}

	public setData(userid,ownerId)
	{
		this.userid = userid;
		if(this.userid == ownerId)
		{
			this.type1.visible = true;
			this.type2.visible =false;
			this.type3.visible =false;
		}else if(this.userid == GameData.gameUser.id)
		{
			this.type1.visible =false;
			this.type2.visible = false;
			this.type3.visible =true;
		}else{
			this.type1.visible =false;
			this.type2.visible = true;
			this.type3.visible =false;
		}
		this.default.visible =false;
		this.common.visible = true;
		this.username.text = this.userid.toString();

		if(!GameData.isRoomOwner || this.userid == GameData.gameUser.id)
		{
			this.kick.visible =false;
		}else {
			this.kick.visible =true;
		}
	}
	
	private addToStage()
	{
		this.init();
	}

	private kickPlayer()
	{
		mvs.MsEngine.getInstance.kickPlayer(this.userid,"");
	}
}