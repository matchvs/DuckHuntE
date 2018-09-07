class PlusBullet extends eui.Component implements  eui.UIComponent {
	public xSpeed = 0;
	public ySpeed = 0;
	public constructor() {
		super();
		this.addEventListener(egret.TimerEvent.ENTER_FRAME,this.update,this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	private update()
	{
		this.x += this.xSpeed;
		this.y -= this.ySpeed;
	}
}