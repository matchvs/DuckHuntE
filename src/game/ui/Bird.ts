class Bird extends eui.Component {
	public fly:egret.tween.TweenGroup;
	public die:egret.tween.TweenGroup;
	public moveSpeed = 6;
	public health = 5;
	public modifyScore:Function;
	private isDied = false;

	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
		this.addEventListener(egret.TimerEvent.ENTER_FRAME,this.update,this);
		this.isDied = false;
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
		this.fly.play();
	}

	private update()
	{
		this.x += this.moveSpeed;
	}

	public modifyHealth(value)
	{
		if(this.isDied)
			return;
		this.health -= value;
		if(this.health <= 0)
		{
			if(this.modifyScore != null) this.modifyScore();
			this.playDie();
			this.isDied = true;
		}
	}

	public playDie()
	{
		this.fly.stop();
		this.die.play();
	}
}