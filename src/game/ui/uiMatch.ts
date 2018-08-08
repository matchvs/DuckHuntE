class uiMatch extends BaseView {
	public back:eui.Image;
	public playerIconLayout:eui.Group;
	private gameUserList = new Array;
	private playerIcons = [];

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
		this.addToStage();
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
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);
		this.addMsResponseListen();
	}

	public onEnter(context:any):void
	{
		 let info = {name:GameData.gameUser.name,avatar:GameData.gameUser.avatar};
		 let infostr = JSON.stringify(info);
		 mvs.MsEngine.getInstance.joinRandomRoom(GameData.maxPlayerNum,infostr);
		 while(this.playerIconLayout.numChildren > 0)
		 {
			 this.playerIconLayout.removeChildAt(0);
			 this.playerIcons.splice(0,1);
		 }
		 
		 GameData.maxPlayerNum = 3;
		 for(let i=0;i<GameData.maxPlayerNum;i++)
		 {
			 let playerIcon = new PlayerIcon();
			 this.playerIconLayout.addChild(playerIcon);
			 this.playerIcons.push(playerIcon);
		 }
	}

	  private addMsResponseListen(){
        //加入房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_RSP, this.joinRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINROOM_NTFY, this.joinRoomNotify,this);

        //关闭房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_NTFY, this.joinOverNotify,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_JOINOVER_RSP, this.joinOverResponse,this);

        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP, this.leaveRoomResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
    }


	private onBackClick()
	{
		mvs.MsEngine.getInstance.leaveRoom("");
	}

	private joinRoomResponse(event:egret.Event) {
		if(!this.parent)
			return;
		let data = event.data;
		let roomInfo = data.roomInfo;
		let roomuserInfoList = data.userList;
        if (data.status !== 200) {
            console.log("joinRoomResponse,status:" + data.status);
            return;
        }
		GameData.roomID = roomInfo.roomID;
		this.gameUserList = [];
		this.gameUserList.push(GameData.gameUser.id);

		for(let i=0;i<roomuserInfoList.length;i++)
		{
			if(GameData.gameUser.id != roomuserInfoList[i].userId)
			{
				this.gameUserList.push(roomuserInfoList[i].userId);
			}
		}

		if(this.gameUserList.length == 1)
		{
			GameData.isRoomOwner = true;
		}

		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}

		GameData.playerUserIds = this.gameUserList;
		if(this.gameUserList.length >= GameData.maxPlayerNum)
		{
			mvs.MsEngine.getInstance.joinOver("");
		}
	}

	private joinRoomNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		let data = ev.data;
		let roomUserInfo = data.userProfile;
		this.gameUserList.push(roomUserInfo.userId);
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
	}

	private joinOverNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		//进入游戏界面
		ContextManager.Instance.showUI(UIType.gameBoard);
	}

	private joinOverResponse(ev:egret.Event) {
		if(!this.parent)
			return;
		//进入游戏界面
		ContextManager.Instance.showUI(UIType.gameBoard);
	}
	
	private leaveRoomResponse(ev:egret.Event) {
		if(!this.parent)
			return;
		while(this.playerIconLayout.numChildren > 0)
		{
			this.playerIconLayout.removeChildAt(0);
			this.playerIcons.splice(0,1);
		}
		ContextManager.Instance.uiBack();
	}

	private leaveRoomNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		let leaveRoomInfo = ev.data;
		let userID = leaveRoomInfo.userId;
		let index = -1;
		for(let i=0;i<this.gameUserList.length;i++)
		{
			if(this.gameUserList[i] == userID)
			{
				index = i;
			}
		}
		this.gameUserList.splice(index,1);
		for(let i=0;i<this.playerIcons.length;i++)
		{
			this.playerIcons[i].init();
		}
		for(let i=0;i<this.gameUserList.length;i++)
		{
			this.playerIcons[i].setData(this.gameUserList[i]);
		}
	}

}