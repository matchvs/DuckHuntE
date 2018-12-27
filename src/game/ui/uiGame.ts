class uiGame extends BaseView {
	public rotationController:eui.HSlider;
	public plusGun:eui.Image;
	public commonGun:eui.Image;
	public playerBulletPos:eui.Image;
	public playerCommonBulletPos:eui.Image;
	public leftPlayerBulletPos:eui.Image;
	public leftplayerCommonBulletPos:eui.Image;
	public rightPlayerBulletPos:eui.Image;
	public rightplayerCommonBulletPos:eui.Image;
	public timer:eui.Label;
	public bulletMask:eui.Image;
	public bulletImg:eui.Image;
	public myscore:eui.Group;
	public leftscore:eui.Group;
	public rightscore:eui.Group;
	public playerGun:eui.Group;
	public leftPlayer:eui.Group;
	public rightPlayer:eui.Group;
	public duckGuids:egret.tween.TweenGroup;
	public readyGo:egret.tween.TweenGroup;
	public bullet:egret.tween.TweenGroup;
	public gameover:egret.tween.TweenGroup;
	public rightScoreLabel:eui.Label;
	public leftScoreLabel:eui.Label;
	public myScoreLabel:eui.Label;
	public bulletNum:eui.Label;
	public coinNum:eui.Label;
	public back:eui.Image;
	public image6:eui.Image;

	private time = 0;

	private commonBulletList:CommonBullet[] = [];
	private plusBulletList:PlusBullet[] = [];
	private birdList:eui.Component[] =[];
	private gameStart:boolean = false;;
	private smallBulletNum = 0;
	private coinNUM = 0;
	private firedCD = 0.5;
	private myScore=0;
	private leftScore = 0;
	private rightScore = 0;

	private positionDic = {};

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.removeFromStage,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private bgChannel:egret.SoundChannel;
	private ready;
	private addToStage()
	{
		let self = this;
		this.duckGuids.play(0);
	   setTimeout(function() {
			self.readyGo.play(0);
			var sound:egret.Sound = RES.getRes("readygo_mp3");
  			sound.play(0,1);
		}, 5000);
		this.ready=setTimeout(function() {
			self.gameStart = true;
			self.timeOnEnterFrame = egret.getTimer();
		}, 8000);

		this.coinNUM = 100;
		this.updateCoin();
		this.smallBulletNum = 10;
		this.updateSmallBullet();

		this.image6.alpha = 0;
		this.myscore.visible = false;
		this.myScore = 0;
		this.myScoreLabel.text = this.myScore.toString();
		this.playerGun.visible =false;
		this.leftscore.visible = false;
		this.leftScore = 0;
		this.leftScoreLabel.text = this.leftScore.toString();
		this.leftPlayer.visible =false;
		this.rightscore.visible = false;
		this.rightScore = 0;
		this.rightScoreLabel.text = this.rightScore.toString();
		this.rightPlayer.visible =false;
		if(GameData.playerUserIds.length == 1)
		{
			this.myscore.visible = true;
			this.playerGun.visible = true;
		}else if(GameData.playerUserIds.length == 2)
		{
			this.myscore.visible = true;
			this.playerGun.visible = true;
			this.leftPlayer.visible = true;
			this.leftscore.visible =true
		}else if(GameData.playerUserIds.length == 3)
		{
			this.myscore.visible = true;
			this.playerGun.visible = true;
			this.leftPlayer.visible = true;
			this.leftscore.visible =true
			this.rightPlayer.visible = true;
			this.rightscore.visible = true;
		}
		
		GameData.playerUserIds.sort(function(a,b){
			return a.id-b.id;
		});
		this.positionDic = {};
		let index = -1;
		for(let i=0;i<GameData.playerUserIds.length;i++)
		{
			let id = GameData.playerUserIds[i].id;
			if(id == GameData.gameUser.id)
			{
				index = i;
				break;
			}
		}	
		if(index == 0)
		{
			this.positionDic[GameData.gameUser.id] = "middle"
			if(GameData.maxPlayerNum == 2)
			{
				this.positionDic[GameData.playerUserIds[1].id] = "left";
			}else if(GameData.maxPlayerNum == 3)
			{
				let leftId = GameData.playerUserIds[1].id;
				this.positionDic[leftId] = "left";
				let rightId = GameData.playerUserIds[2].id;
				this.positionDic[rightId] = "right";
			}
		}else if(index == 1)
		{
			this.positionDic[GameData.playerUserIds[0].id] = "left";
			this.positionDic[GameData.gameUser.id] = "middle";
			if(GameData.maxPlayerNum == 3)
			{
				this.positionDic[GameData.playerUserIds[2].id] = "right";
			}
		}else if(index==2)
		{
			this.positionDic[GameData.playerUserIds[0].id] = "left";
			this.positionDic[GameData.playerUserIds[1].id] = "right";
			this.positionDic[GameData.gameUser.id] = "middle";
		}

		for(let i=0;i<this.birdList.length;i++)
		{
			this.removeChild(this.birdList[i]);
		}
		this.birdList=[];

		let bg:egret.Sound = RES.getRes("duckBg_mp3");
  		this.bgChannel = bg.play();

		this.addMsResponseListen();	
		this.addEventListener(egret.TimerEvent.ENTER_FRAME,this.update,this);	
 	}

	private removeFromStage()
	{
		this.removeResponseListen();
		this.removeEventListener(egret.TimerEvent.ENTER_FRAME,this.update,this);	
	}

	private addMsResponseListen(){
        //发送消息
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);
        //离开房间
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);

		 //踢人
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);

		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
		mvs.MsResponse.getInstance.addEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);
    }

	private removeResponseListen()
	{
		//发送消息
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_SENDEVENT_NTFY, this.sendEventNotify,this);
        //离开房间
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_NTFY, this.leaveRoomNotify,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_LEAVEROOM_RSP,this.leaveRoomResponse,this);

		 //踢人
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_RSP, this.kickPlayerResponse,this);
        mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_KICKPLAYER_NTFY, this.kickPlayerNotify,this);

		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_ERROR_RSP, this.onErrorRsp,this);
		mvs.MsResponse.getInstance.removeEventListener(mvs.MsEvent.EVENT_NETWORKSTATE_NTFY,this.networkStateNotify,this);
	}

	public onEnter(context:any):void
	{
		this.init();
	}

	private createBirdInterval;
	private init()
	{
		this.bulletImg.mask = this.bulletMask;
		this.rotationController.addEventListener(egret.TouchEvent.CHANGE,this.onSlideChange,this);
		this.commonGun.addEventListener(egret.TouchEvent.TOUCH_TAP,this.commonGunClick,this);
		this.plusGun.addEventListener(egret.TouchEvent.TOUCH_TAP,this.plusGunClick,this);
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackClick,this);

		let self = this;
		if(this.createBirdInterval != null)
		{
			clearInterval(this.createBirdInterval);
		}
		this.createBirdInterval = setInterval(function() {
			if(!self.gameStart)
				return;
			let birdType = Math.floor(Math.random()*3);
			let birdComponent:Bird;
			switch(birdType)
			{
				case 0:
					birdComponent = new yeNiao();
					birdComponent.x = -120;
					birdComponent.y = 50;
				break
				case 1:
					birdComponent = new yazi();
					birdComponent.x = -120;
					birdComponent.y = 150;
				break;
				case 2:
					birdComponent = new BlueBird();
					birdComponent.x = -120;
					birdComponent.y = 200;
				break;
			}
			birdComponent.modifyScore = function(value){self.modifyMyScore(value)}
			self.birdList.push(birdComponent);
			self.addChild(birdComponent);
		}, 5000);

		this.time = 60;
		this.updateTime();

		this.rotationController.value = 5;
		this.onSlideChange();

		this.leftPlayer.rotation = 0;
		this.rightPlayer.rotation = 0;
	}

	private timeOnEnterFrame = 0;
	private update()
	{
		if(!this.gameStart)
			return;
		let self = this;
		for(let i=0;i<this.commonBulletList.length;i++)
		{
			let item = this.commonBulletList[i]
			for(let j=0;j<this.birdList.length;j++)
			{
				let bird = this.birdList[j];
				if(hitTestPosition(item,bird))
				{
					if(this.contains(item))
					{
						this.removeChild(item);
						this.commonBulletList.splice(i,1);
					}
					if(this.contains(bird))
					{
						(<Bird>bird).modifyHealth(1);
					}
				}
			}
			if(item.y < 0)
			{
				if(this.contains(item)) 
				{
					if(this.contains(item)) 
					{
						this.removeChild(item);
				 		this.commonBulletList.splice(i,1);
					}
				}
			}
		}

		for(let i=0;i<this.plusBulletList.length;i++)
		{
			let item = this.plusBulletList[i];
			for(let j=0;j<this.birdList.length;j++)
			{
				let bird = this.birdList[j];
				if(hitTestPosition(item,bird))
				{
					if(this.contains(item))
					{
						this.removeChild(item);
						this.plusBulletList.splice(i,1);
					}
					if(this.contains(bird))
					{
						(<Bird>bird).modifyHealth(7);
					}
				}
			}
			if(item.y < 0)
			{
				if(this.contains(item)) 
				{
					if(!this.contains(item))
						continue;
					this.removeChild(item);
				 	this.plusBulletList.splice(i,1);
				}
			}
		}

		for(let i=0;i<this.birdList.length;i++) 
		{
			let item = this.birdList[i];
			if(item == null || item == undefined) return;
			if(item.x>this.stage.width)
			{
				this.removeChild(item);
				this.birdList.splice(i,1);
			}
		}

		if(this.firedCD > 0)
		{
			this.firedCD -= 0.05;
		}

		var now = egret.getTimer();
		var pass = (now - this.timeOnEnterFrame)/1000;
		this.time = this.time - pass;
		if(this.time <= 0)
		{
			this.time = 0;
			this.gameStart = false;

			let dic = [];
			for(let i=0;i<GameData.playerUserIds.length;i++)
			{
				let id = GameData.playerUserIds[i].id;
				let pos = this.positionDic[id];
				let score = 0;
				if(pos == "left")
				{
					score = this.leftScore;
				}else if(pos == "middle")
				{	
					score = this.myScore;
				}else if(pos == "right")
				{
					score = this.rightScore;
				}
				let scoreInfo = {userId:id,score:score,profile:GameData.playerUserIds[i]};
				dic.push(scoreInfo);
			}
			dic.sort(function(a,b){
				return b.score - a.score;
			})
			var sound:egret.Sound = RES.getRes("gameover_mp3");
  			sound.play(0,1);
			this.bgChannel.stop();
			this.gameover.play();
			setTimeout(function() {
				ContextManager.Instance.showUI(UIType.gameOver,dic); 
			}, 1500);
			
		}
		this.updateTime();
        this.timeOnEnterFrame = egret.getTimer();
	}

	private onSlideChange()
	{
		let value = this.rotationController.value;
		let rotation = 3*value - 15;
		this.playerGun.rotation = rotation;

		let self = this;
		// let userids = [];
		// userids = GameData.playerUserIds;
		let jsonValue = JSON.stringify({
			action:"updatePositon",
			rotation:self.playerGun.rotation,
			uid:GameData.gameUser.id
		});
		mvs.MsEngine.getInstance.sendEvent(jsonValue);
	}

	private commonGunClick()
	{
		if(!this.gameStart)
			return;
		if(this.smallBulletNum <= 0 || this.firedCD > 0)
			return;
		let self = this;
		let commonbullet:CommonBullet = new CommonBullet();
		var targetGunPoint: egret.Point = this.playerGun.localToGlobal(this.playerCommonBulletPos.x,this.playerCommonBulletPos.y);
		commonbullet.x = targetGunPoint.x;
		commonbullet.y = targetGunPoint.y;
		this.addChild(commonbullet);
		let rotation = self.playerGun.rotation;
		commonbullet.rotation = rotation;
		let y = Math.sin((90-rotation) * Math.PI / 180);
		let x = Math.cos((90-rotation) * Math.PI / 180);
		commonbullet.xSpeed = 12 * x;
		commonbullet.ySpeed = 12 * y;
		this.commonBulletList.push(commonbullet);

		this.firedCD = 0.5;
		this.smallBulletNum --;
		this.updateSmallBullet();

		if(this.smallBulletNum <= 0)
		{
			this.playBulletAnimation();
		}

		// let userids = [];
		// userids = GameData.playerUserIds;
		let value = {
			action:"shoot",
			type:"commonBullet",
			uid:GameData.gameUser.id
		};
		mvs.MsEngine.getInstance.sendEvent(JSON.stringify(value))

		var sound:egret.Sound = RES.getRes("fire_mp3");
  		sound.play(0,1);
	}

	private plusGunClick()
	{
		if(!this.gameStart)
			return;
		if(this.coinNUM <= 0 || this.firedCD > 0)
			return;
		let self = this;
		let plusBullet:PlusBullet = new PlusBullet();
		var targtGunPoint:egret.Point = this.playerGun.localToGlobal(this.playerBulletPos.x,this.playerBulletPos.y);
		plusBullet.x = targtGunPoint.x;
		plusBullet.y = targtGunPoint.y;
		this.addChild(plusBullet);
		let rotation = self.playerGun.rotation;
		plusBullet.rotation = rotation;
		let y = Math.sin((90-rotation) * Math.PI / 180);
		let x = Math.cos((90-rotation) * Math.PI / 180);
		plusBullet.ySpeed = 12 * y;
		plusBullet.xSpeed = 12 * x;
		this.plusBulletList.push(plusBullet);

		this.firedCD = 0.5;
		this.coinNUM --;
		this.updateCoin();

		// let userids = [];
		// userids = GameData.playerUserIds;
		let value = JSON.stringify({
			action:"shoot",
			type:"plusBullet",
			uid:GameData.gameUser.id
		});
		mvs.MsEngine.getInstance.sendEvent(value);

		var sound:egret.Sound = RES.getRes("firePlus_mp3");
  		sound.play(0,1);
	}

	private leaveRoomNotify(ev:egret.Event) {
		if(!this.parent)
			return;
		let tip = new uiTip("对手离开了游戏");
		this.addChild(tip);
	}
	
	private sendEventNotify(event:egret.Event) {
		if(!this.parent)
			return;
		let sdnotify = event.data;
		if(sdnotify && sdnotify.cpProto){
			if(sdnotify.cpProto.indexOf("updateScore") >= 0)
			{
				if(sdnotify.srcUserId != GameData.gameUser.id)
				{
						var info = JSON.parse(sdnotify.cpProto);
						let score = info.score;
						let pos = this.positionDic[sdnotify.srcUserId];
						if(pos == "left")
						{
							this.leftScore = score;
							this.leftScoreLabel.text = score;
						}else if(pos == "right")
						{
							this.rightScore = score;
							this.rightScoreLabel.text = score;
						}
				}
			}else if(sdnotify.cpProto.indexOf("updatePositon") >= 0)
			{
				if(sdnotify.srcUserId != GameData.gameUser.id)
				{
					var info = JSON.parse(sdnotify.cpProto);
					let pos = this.positionDic[sdnotify.srcUserId];
					let rotation = info.rotation;
					if(pos == "left")
					{
						this.leftPlayer.rotation = rotation;
					}else if(pos == "right")
					{
						this.rightPlayer.rotation = rotation;
					}
				}
			}else if(sdnotify.cpProto.indexOf("shoot") >= 0)
			{
				if(sdnotify.srcUserId != GameData.gameUser.id)
				{
					var info = JSON.parse(sdnotify.cpProto);
					let pos = this.positionDic[sdnotify.srcUserId];
					let type = info.type;
					if(pos == "left")
					{
						if(type == "plusBullet")
						{
							let self =this;
							let plusBullet:PlusBullet = new PlusBullet();
							var targtGunPoint:egret.Point = this.leftPlayer.localToGlobal(this.leftPlayerBulletPos.x,this.leftPlayerBulletPos.y);
							plusBullet.x = targtGunPoint.x;
							plusBullet.y = targtGunPoint.y;
							this.addChild(plusBullet);
							let rotation = self.leftPlayer.rotation;
							plusBullet.rotation = rotation;
							let y = Math.sin((90-rotation) * Math.PI / 180);
							let x = Math.cos((90-rotation) * Math.PI / 180);
							plusBullet.ySpeed = 12 * y;
							plusBullet.xSpeed = 12 * x;
						}else if(type == "commonBullet")
						{
							let self =this;
							let commonbullet:CommonBullet = new CommonBullet();
							var targetGunPoint: egret.Point = this.leftPlayer.localToGlobal(this.leftplayerCommonBulletPos.x,this.leftplayerCommonBulletPos.y);
							commonbullet.x = targetGunPoint.x;
							commonbullet.y = targetGunPoint.y;
							this.addChild(commonbullet);
							let rotation = self.leftPlayer.rotation;
							commonbullet.rotation = rotation;
							let y = Math.sin((90-rotation) * Math.PI / 180);
							let x = Math.cos((90-rotation) * Math.PI / 180);
							commonbullet.xSpeed = 12 * x;
							commonbullet.ySpeed = 12 * y;
						}
					}else if(pos == "right")
					{
						if(type == "plusBullet")
						{
							let self =this;
							let plusBullet:PlusBullet = new PlusBullet();
							var targtGunPoint:egret.Point = this.rightPlayer.localToGlobal(this.rightPlayerBulletPos.x,this.rightPlayerBulletPos.y);
							plusBullet.x = targtGunPoint.x;
							plusBullet.y = targtGunPoint.y;
							this.addChild(plusBullet);
							let rotation = self.rightPlayer.rotation;
							plusBullet.rotation = rotation;
							let y = Math.sin((90-rotation) * Math.PI / 180);
							let x = Math.cos((90-rotation) * Math.PI / 180);
							plusBullet.ySpeed = 12 * y;
							plusBullet.xSpeed = 12 * x;
						}else if(type == "commonBullet")
						{
							let self =this;
							let commonbullet:CommonBullet = new CommonBullet();
							var targetGunPoint: egret.Point = this.rightPlayer.localToGlobal(this.rightplayerCommonBulletPos.x,this.rightplayerCommonBulletPos.y);
							commonbullet.x = targetGunPoint.x;
							commonbullet.y = targetGunPoint.y;
							this.addChild(commonbullet);
							let rotation = self.rightPlayer.rotation;
							commonbullet.rotation = rotation;
							let y = Math.sin((90-rotation) * Math.PI / 180);
							let x = Math.cos((90-rotation) * Math.PI / 180);
							commonbullet.xSpeed = 12 * x;
							commonbullet.ySpeed = 12 * y;
						}
					}
				}
			}
		}
	}

	private updateCoin()
	{
		this.coinNum.text = this.coinNUM.toString();
	}

	private updateSmallBullet()
	{
		this.bulletNum.text = this.smallBulletNum.toString();
	}

	private modifyMyScore(score)
	{
		// let userids = [];
		// userids = GameData.playerUserIds;
		this.myScore += score;
		this.myScoreLabel.text = this.myScore.toString();

		let self = this;
		let value = JSON.stringify({
			action:"updateScore",
			score:self.myScore,
			uid:GameData.gameUser.id
		})
		mvs.MsEngine.getInstance.sendEvent(value);
	}

	private playBulletAnimation(){
		let self = this;
		this.bullet.play(0);
		setTimeout(function() {
			self.smallBulletNum = 10;
			self.updateSmallBullet();
		}, 3000);
	}

	private updateTime()
	{
		this.timer.text = Math.floor(this.time).toString();
	}

	private onBackClick()
	{
		ContextManager.Instance.showDialog(UIType.exit);
	}

	private leaveRoomResponse()
	{
		clearTimeout(this.ready);
		this.gameStart = false;
		this.bgChannel.stop();
		ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard)
	}

	private kickPlayerResponse(ev:egret.Event)
	{
		let rsp = ev.data;
		if(rsp.status != 200)
			return;
		let owner = rsp.owner;
	
        if (GameData.gameUser.id == rsp.userID) {
            GameData.isRoomOwner = false;
			ContextManager.Instance.backSpecifiedUI(UIType.lobbyBoard);
        }else{
			let tip = new uiTip("对手离开了游戏");
			this.addChild(tip);
		}

		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}
	}

	private kickPlayerNotify(ev:egret.Event)
	{
		if(!this.parent)
			return;
		let rsp = ev.data;
	//	let userID = rsp.userID;
		let owner = rsp.owner;

        if (GameData.gameUser.id == rsp.userId) {
            GameData.isRoomOwner = false;
			ContextManager.Instance.uiBackMain();
        }else
		{
			let tip = new uiTip("对手离开了游戏");
			this.addChild(tip);
		}

		if(owner == GameData.gameUser.id)
		{
			GameData.isRoomOwner = true;
		}
	}

	private clearAllBird()
	{
		for(let i=0;i<this.birdList.length;i++)
		{
			this.removeChild(this.birdList[i]);
		}
		this.birdList=[];
	}

	private onErrorRsp(ev:egret.Event)
	{
		let data = ev.data;
		let errorCode = data.errCode;
		if(errorCode == 1001)
		{
			let tip = new uiTip("网络断开连接");
			this.addChild(tip);
			clearTimeout(this.ready);
			this.gameStart = false;
			this.bgChannel.stop();		
			let self = this;	
			setTimeout(function() {
				self.clearAllBird();
				ContextManager.Instance.uiBackMain();
			}, 5000);
		}
	}

	private networkStateNotify(ev:egret.Event)
	{
		let data = ev.data;
		let state = data.state;
		let userID = data.userID;
		let owner = data.owner;
		if(state == 1)
		{
			// let tip = new uiTip("玩家"+userID+"网络断开连接");
			// this.addChild(tip);

			//手动踢出房间
			mvs.MsEngine.getInstance.kickPlayer(userID,"");
		}else if(state == 3)
		{
		}
	}
}