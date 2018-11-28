class PlayerIcon extends eui.Component implements  eui.UIComponent {
	public player1:eui.Image;
	public playerMask:eui.Image;
	public userInfo = null;

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
	
	private addToStage()
	{
		this.init();
	}

	private init()
	{
		this.player1.visible = false;
		this.player1.mask = this.playerMask;
		this.userInfo = null;
	}

	public setData(userInfo)
	{
		let avatar = userInfo.avatar;
		this.player1.source = avatar;
		this.player1.visible = true;
		this.userInfo = userInfo;
	}
}
window["PlayerIcon"] = PlayerIcon