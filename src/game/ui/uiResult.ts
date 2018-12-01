class uiResult extends BaseView{
	public back:eui.Group;
	public first:eui.Group;
	public firstId:eui.Label;
	public firstScore:eui.Label;
	public firstAvatar:eui.Image;
	public second:eui.Group;
	public secondId:eui.Label;
	public secondScore:eui.Label;
	public secondAvatar:eui.Image;
	public third:eui.Group;
	public thirdId:eui.Label;
	public thirdScore:eui.Label;
	public thirdAvatar:eui.Image;
	

	public constructor() {
		super();
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
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
	}

	private removeFromStage()
	{
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
	}

	public onEnter(context:any):void
	{
		var sound:egret.Sound = RES.getRes("fire_mp3");
  		sound.play(0,1);

		this.first.visible = false;
		this.second.visible =false;
		this.third.visible = false;

		let platform: any = window.platform;
		//主域向子域发送自定义消息
		// platform.openDataContext.postMessage({
		// 	isDisplay: true,
		// 	text: 'hello',
		// 	year: (new Date()).getFullYear(),
		// 	command: "setUserCloudStorage"
		// });

		let dic = context;
		if(dic.length >= 1)
		{
			let firstValue = dic[0];
			let firtScore = firstValue.score;
			let firstPorfile = firstValue.profile;
			let firstid = firstPorfile.nickName;
			let firstAvatar = firstPorfile.avatar;
			this.firstId.text = firstid;
			this.firstScore.text = firtScore;
			this.firstAvatar.source = firstAvatar;
			this.first.visible = true;
			if(dic.length >= 2)
			{
				let secondValue = dic[1];
				let secondScore = secondValue.score;
				let secondPorfile = secondValue.profile;
				let secondAvatar = secondPorfile.avatar;
				let secondid = secondPorfile.nickName;
				this.secondId.text = secondid;
				this.secondScore.text = secondScore;
				this.secondAvatar.source = secondAvatar;
				this.second.visible = true;
				if(dic.length >= 3)
				{
					let thirdValue = dic[2];
					let thirdScore = thirdValue.score;
					let thirdPorfile = thirdValue.profile;
					let thirdAvatar = thirdPorfile.avatar;
					let thirdid = thirdPorfile.nickName;
					this.thirdId.text = thirdid;
					this.thirdScore.text = thirdScore;
					this.thirdAvatar.source = thirdAvatar;
					this.third.visible = true; 
				}
			}

			if(firstid == GameData.gameUser.id)
			{
				var sound:egret.Sound = RES.getRes("vitory_mp3");
  				sound.play(0,1);
			}else{
				var sound:egret.Sound = RES.getRes("lose_mp3");
  				sound.play(0,1);
			}
		}
	}
	
	private init()
	{
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
	}

	private onBackClick()
	{
		GameData.isRoomOwner = false;
		mvs.MsEngine.getInstance.leaveRoom("")
		ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
	}

	private onErrorRsp(ev:egret.Event)
	{
		let data = ev.data;
		let errorCode = data.errCode;
		if(errorCode == 1001)
		{
			let tip = new uiTip("网络断开连接");
			this.addChild(tip);
			setTimeout(function() {
				mvs.MsEngine.getInstance.logOut();
				ContextManager.Instance.backSpecifiedUI(UIType.loginBoard);
			}, 5000);
		}
	}
}