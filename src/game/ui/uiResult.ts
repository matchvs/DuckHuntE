class uiResult extends BaseView{
	public back:eui.Group;
	public first:eui.Group;
	public firstId:eui.Label;
	public firstScore:eui.Label;
	public second:eui.Group;
	public secondId:eui.Label;
	public secondScore:eui.Label;
	public third:eui.Group;
	public thirdId:eui.Label;
	public thirdScore:eui.Label;

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

	public onEnter(context:any):void
	{
		var sound:egret.Sound = RES.getRes("fire_mp3");
  		sound.play(0,1);

		this.first.visible = false;
		this.second.visible =false;
		this.third.visible = false;

		let dic = context;
		if(dic.length >= 1)
		{
			let firstValue = dic[0];
			let firstid = firstValue.userId;
			let firtScore = firstValue.score;
			this.firstId.text = firstid;
			this.firstScore.text = firtScore;
			this.first.visible = true;
			if(dic.length >= 2)
			{
				let secondValue = dic[1];
				let secondid = secondValue.userId;
				let secondScore = secondValue.score;
				this.secondId.text = secondid;
				this.secondScore.text = secondScore;
				this.second.visible = true;
				if(dic.length >= 3)
				{
					let thirdValue = dic[2];
					let thirdid = thirdValue.userId;
					let thirdScore = thirdValue.score;
					this.thirdId.text = thirdid;
					this.thirdScore.text = thirdScore;
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
		mvs.MsEngine.getInstance.leaveRoom("")
		ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
	}
}