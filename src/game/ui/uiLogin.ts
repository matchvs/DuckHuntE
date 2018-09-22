class uiLogin extends BaseView {
	public start:eui.Image;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.addEventListener(egret.Event.LEAVE_STAGE,this.leaveToStage,this);
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

	private init()
	{
		this.start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartClick,this);
	}
	
	private addToStage()
	{
		this.addMsResponseListen();
	}

	private leaveToStage()
	{
		this.removeMsResponseListen();
	}

	private addMsResponseListen()
	{
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP,this.registResponse,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LOGIN_RSP,this.loginResponse,this);
	}

	private removeMsResponseListen()
	{
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_REGISTERUSER_RSP,this.registResponse,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LOGIN_RSP,this.loginResponse,this);
	}

	private onStartClick()
	{
		mvs.MsEngine.getInstance.registerUser();
	}

	private registResponse(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let userInfo = ev.data;
        GameData.gameUser.id = userInfo.id;
        GameData.gameUser.name = userInfo.name;
        GameData.gameUser.avatar = userInfo.avatar;
        GameData.gameUser.token = userInfo.token;

		if(userInfo.status == 0){
            mvs.MsEngine.getInstance.login(userInfo.id, userInfo.token, GameData.gameID,GameData.appkey, GameData.secretKey);
        }
	}

	private loginResponse(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let login = ev.data;
		if(login.status == 200)
		{
			ContextManager.Instance.showUI(UIType.lobbyBoard);
		}
	}
}