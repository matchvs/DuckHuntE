class yeNiao extends Bird implements  eui.UIComponent {
	public constructor() {
		super();
		this.health = 2;
		this.moveSpeed = 7;
		this.score = 2;
	}
}
window["yeNiao"] = yeNiao