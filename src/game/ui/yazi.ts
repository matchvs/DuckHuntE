class yazi extends Bird implements  eui.UIComponent {
	public constructor()
	{
		super();
		this.health = 1;
		this.moveSpeed = 5;
	}
}
window["yazi"] = yazi