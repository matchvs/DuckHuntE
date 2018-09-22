class BlueBird extends Bird implements  eui.UIComponent {
	public constructor() {
		super();
		this.health = 4;
		this.moveSpeed = 10;
		this.score = 4;
	}
}
window["BlueBird"] = BlueBird