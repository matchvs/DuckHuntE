class BlueBird extends Bird implements  eui.UIComponent {
	public constructor() {
		super();
		this.health = 3;
		this.moveSpeed = 10;
	}
}
window["BlueBird"] = BlueBird