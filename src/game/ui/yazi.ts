class yazi extends Bird implements  eui.UIComponent {
	public constructor()
	{
		super();
		this.health = 1;
		this.moveSpeed = 5;
		this.score = 1;
	}
}
window["yazi"] = yazi