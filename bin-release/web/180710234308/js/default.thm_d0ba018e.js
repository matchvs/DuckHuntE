window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","uiLogin":"resource/eui_skins/uiLogin.exml","uiLobby\\":"resource/eui_skins/uiLobby/.exml","uiLobby":"resource/eui_skins/uiLobby.exml","uiMatch":"resource/eui_skins/uiMatch.exml","uiGame":"resource/eui_skins/uiGame.exml","uiCreateRoom":"resource/eui_skins/uiCreateRoom.exml","uiExit":"resource/eui_skins/uiExit.exml","uiRoomList":"resource/eui_skins/uiRoomList.exml","CommonBullet":"resource/eui_skins/CommonBullet.exml","PlusBullet":"resource/eui_skins/PlusBullet.exml","BlueBird":"resource/eui_skins/BlueBird.exml","yazi":"resource/eui_skins/yazi.exml","yeNiao":"resource/eui_skins/yeNiao.exml"};generateEUI.paths['resource/eui_skins/BlueBird.exml'] = window.BlueBirdSkin = (function (_super) {
	__extends(BlueBirdSkin, _super);
	function BlueBirdSkin() {
		_super.call(this);
		this.skinParts = ["fly","die","image","image0","image1"];
		
		this.height = 134;
		this.width = 143;
		this.fly_i();
		this.die_i();
		this.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem6,"target");
	}
	var _proto = BlueBirdSkin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object4_i();
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object8_i();
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.die_i = function () {
		var t = new egret.tween.TweenGroup();
		this.die = t;
		t.items = [this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "tiane1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "tiane2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "tiane3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BlueBirdSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CommonBullet.exml'] = window.CommonBulletSkin = (function (_super) {
	__extends(CommonBulletSkin, _super);
	function CommonBulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 22;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = CommonBulletSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 6;
		t.anchorOffsetY = 29.5;
		t.source = "bullet_png";
		t.x = 6;
		t.y = 29.5;
		return t;
	};
	return CommonBulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "ballistic_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "slidingBlock_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlusBullet.exml'] = window.PlusBulletSkin = (function (_super) {
	__extends(PlusBulletSkin, _super);
	function PlusBulletSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 92;
		this.width = 33;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = PlusBulletSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 16.5;
		t.anchorOffsetY = 46;
		t.source = "dazidan_png";
		t.x = 16.5;
		t.y = 46;
		return t;
	};
	return PlusBulletSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiCreateRoom.exml'] = window.uiCreateRoomSkin = (function (_super) {
	__extends(uiCreateRoomSkin, _super);
	function uiCreateRoomSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 720;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image8_i(),this._Label3_i()];
	}
	var _proto = uiCreateRoomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetY = 0;
		t.height = 719.64;
		t.scale9Grid = new egret.Rectangle(166,38,1002,234);
		t.source = "home-bg_png";
		t.x = -1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 355.5;
		t.y = 13.85;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Image6_i(),this._Label2_i(),this._Image7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cpm-logo2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon-plus_png";
		t.x = 503.5;
		t.y = 249.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "minus_png";
		t.x = 278.5;
		t.y = 269.42;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.source = "room-kuang2_png";
		t.width = 51.33;
		t.x = 386.84;
		t.y = 254.76;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.67;
		t.size = 34;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 38;
		t.x = 396.54;
		t.y = 251.42;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "room-kuang2_png";
		t.x = 279.5;
		t.y = 381.42;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.text = "Label";
		t.textColor = 0x827373;
		t.verticalAlign = "middle";
		t.width = 236;
		t.x = 287.5;
		t.y = 385.42;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "close_png";
		t.x = 551.5;
		t.y = 112;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.48;
		t.source = "dating-btn_png";
		t.width = 369.45;
		t.x = 481.28;
		t.y = 574.49;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.55;
		t.size = 46;
		t.text = "创 建";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 216.42;
		t.x = 558;
		t.y = 588;
		return t;
	};
	return uiCreateRoomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiExit.exml'] = window.uiExitSkin = (function (_super) {
	__extends(uiExitSkin, _super);
	function uiExitSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this._Image4_i(),this._Label2_i()];
	}
	var _proto = uiExitSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 745;
		t.source = "promptBox_png";
		t.width = 1331;
		t.y = 6;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "kuang_png";
		t.x = 354;
		t.y = 58;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 537;
		t.y = 498;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.text = "退 出";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 35;
		t.y = 4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "close_png";
		t.x = 902;
		t.y = 170;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.size = 40;
		t.text = "是否退出游戏？";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 510;
		t.y = 320;
		return t;
	};
	return uiExitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiGame.exml'] = window.uiGameSkin = (function (_super) {
	__extends(uiGameSkin, _super);
	function uiGameSkin() {
		_super.call(this);
		this.skinParts = ["myscore","leftScore","rightScore","playerBulletPos","playerCommonBulletPos","playerGun","leftPlayer","rightPlayer","rotationController","plusGun","commonGun","birds"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Image13_i(),this._Group5_i(),this.rotationController_i(),this.plusGun_i(),this.commonGun_i(),this.birds_i()];
	}
	var _proto = uiGameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "beijing_png";
		t.width = 1320;
		t.x = -2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "dimian_png";
		t.x = -2;
		t.y = 494;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "shuiyin_png";
		t.x = 0;
		t.y = 699;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 525.74;
		t.y = 36.09;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "duckClock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 52;
		t.size = 40;
		t.text = "60";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 53.7;
		t.x = 63.91;
		t.y = 1.91;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "s_png";
		t.x = 109.91;
		t.y = 18.91;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 1028.6;
		t.y = 51.28;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "jinbi_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "×_png";
		t.x = 56;
		t.y = 13.38;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "100";
		t.x = 95.55;
		t.y = 7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 1027.98;
		t.y = 100.67;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Label3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bullet_png";
		t.x = 9.09;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "×_png";
		t.x = 56;
		t.y = 30.05;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "100";
		t.x = 94.03;
		t.y = 26.71;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 42.91;
		t.y = 88;
		t.elementsContent = [this.myscore_i(),this.leftScore_i(),this.rightScore_i()];
		return t;
	};
	_proto.myscore_i = function () {
		var t = new eui.Group();
		this.myscore = t;
		t.x = 2.67;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Label4_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "myscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.42;
		t.y = 0;
		return t;
	};
	_proto.leftScore_i = function () {
		var t = new eui.Group();
		this.leftScore = t;
		t.x = 2;
		t.y = 43.33;
		t.elementsContent = [this._Image11_i(),this._Label5_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "leftscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.42;
		t.y = 0;
		return t;
	};
	_proto.rightScore_i = function () {
		var t = new eui.Group();
		this.rightScore = t;
		t.x = 0;
		t.y = 85.33;
		t.elementsContent = [this._Image12_i(),this._Label6_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "rightscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.42;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "exit_png";
		t.x = 54.41;
		t.y = 12.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 347.03;
		t.y = 41;
		t.elementsContent = [this.playerGun_i(),this.leftPlayer_i(),this.rightPlayer_i()];
		return t;
	};
	_proto.playerGun_i = function () {
		var t = new eui.Group();
		this.playerGun = t;
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 678;
		t.rotation = 0;
		t.x = 223.47;
		t.y = 684;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this.playerBulletPos_i(),this.playerCommonBulletPos_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "mygun_png";
		t.x = 0;
		t.y = 435;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "shexian_png";
		t.x = 23.5;
		t.y = 0;
		return t;
	};
	_proto.playerBulletPos_i = function () {
		var t = new eui.Image();
		this.playerBulletPos = t;
		t.alpha = 0.1;
		t.source = "dazidan_png";
		t.x = 9;
		t.y = 337.5;
		return t;
	};
	_proto.playerCommonBulletPos_i = function () {
		var t = new eui.Image();
		this.playerCommonBulletPos = t;
		t.alpha = 0.1;
		t.source = "bullet_png";
		t.x = 15.17;
		t.y = 369.5;
		return t;
	};
	_proto.leftPlayer_i = function () {
		var t = new eui.Group();
		this.leftPlayer = t;
		t.height = 242;
		t.width = 51;
		t.x = 30.5;
		t.y = 441.34;
		t.elementsContent = [this._Image16_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 242;
		t.rotation = 0;
		t.source = "leftgun_png";
		t.x = 25.5;
		t.y = 242;
		return t;
	};
	_proto.rightPlayer_i = function () {
		var t = new eui.Group();
		this.rightPlayer = t;
		t.x = 410.44;
		t.y = 679.48;
		t.elementsContent = [this._Image17_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 239;
		t.rotation = 0;
		t.source = "rightgun_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rotationController_i = function () {
		var t = new eui.HSlider();
		this.rotationController = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.value = 5;
		t.x = 33.46;
		t.y = 606;
		return t;
	};
	_proto.plusGun_i = function () {
		var t = new eui.Image();
		this.plusGun = t;
		t.source = "plusbutton_png";
		t.x = 1095.98;
		t.y = 411;
		return t;
	};
	_proto.commonGun_i = function () {
		var t = new eui.Image();
		this.commonGun = t;
		t.source = "button_png";
		t.x = 932.6;
		t.y = 520.5;
		return t;
	};
	_proto.birds_i = function () {
		var t = new eui.Group();
		this.birds = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 127.27;
		t.width = 89.52;
		t.x = -164.97;
		t.y = 242.01;
		return t;
	};
	return uiGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiLobby.exml'] = window.uiLobbySkin = (function (_super) {
	__extends(uiLobbySkin, _super);
	function uiLobbySkin() {
		_super.call(this);
		this.skinParts = ["username","rank","randomMatch","createRoom","joinRoom","inviteUser","back"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i(),this._Group2_i(),this.rank_i(),this.randomMatch_i(),this.createRoom_i(),this.joinRoom_i(),this.inviteUser_i(),this.back_i()];
	}
	var _proto = uiLobbySkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-bbot-bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sr-bot-bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 230.7;
		t.y = 206.06;
		t.elementsContent = [this.username_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105.76;
		t.size = 30;
		t.text = "玩家名字";
		t.textAlign = "center";
		t.textColor = 0x050202;
		t.verticalAlign = "middle";
		t.width = 295.21;
		t.x = 0;
		t.y = 215.12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "def-use_png";
		t.x = 82.1;
		t.y = 84.12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "handcon_png";
		t.x = 28.1;
		t.y = 0;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Group();
		this.rank = t;
		t.x = 1138.62;
		t.y = 74.48;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "rank-logo_png";
		t.x = 6.5;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.text = "排行榜";
		t.textAlign = "center";
		t.textColor = 0x380606;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 0;
		t.y = 63;
		return t;
	};
	_proto.randomMatch_i = function () {
		var t = new eui.Group();
		this.randomMatch = t;
		t.x = 658;
		t.y = 288;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.size = 40;
		t.text = "随机匹配";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 270;
		t.x = 127;
		t.y = 21;
		return t;
	};
	_proto.createRoom_i = function () {
		var t = new eui.Group();
		this.createRoom = t;
		t.x = 667;
		t.y = 446;
		t.elementsContent = [this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 36;
		t.text = "创建房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 32;
		t.y = 28.06;
		return t;
	};
	_proto.joinRoom_i = function () {
		var t = new eui.Group();
		this.joinRoom = t;
		t.x = 925;
		t.y = 448;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 36;
		t.text = "加入房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		t.x = 32;
		t.y = 28.06;
		return t;
	};
	_proto.inviteUser_i = function () {
		var t = new eui.Group();
		this.inviteUser = t;
		t.x = 831;
		t.y = 606;
		t.elementsContent = [this._Image9_i(),this._Label5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "dating-btn3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 30;
		t.text = "邀请好友";
		t.textAlign = "center";
		t.textColor = 0x110101;
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 39;
		t.y = 6;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "btn-back_png";
		t.x = 52;
		t.y = 42;
		return t;
	};
	return uiLobbySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiLogin.exml'] = window.uiLoginSkin = (function (_super) {
	__extends(uiLoginSkin, _super);
	function uiLoginSkin() {
		_super.call(this);
		this.skinParts = ["start"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.start_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
	}
	var _proto = uiLoginSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-bbot-bg2_png";
		t.x = -2;
		t.y = 9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sr-bot-bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "logo_png";
		t.x = 468;
		t.y = 165;
		return t;
	};
	_proto.start_i = function () {
		var t = new eui.Image();
		this.start = t;
		t.source = "startGame_png";
		t.x = 485;
		t.y = 496.85;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "friendsRanking_png";
		t.visible = false;
		t.x = 485;
		t.y = 526;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "worldRanking_png";
		t.visible = false;
		t.x = 747;
		t.y = 526;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "inviteFriends_png";
		t.visible = false;
		t.x = 634.5;
		t.y = 665.76;
		return t;
	};
	return uiLoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiMatch.exml'] = window.uiMatchSkin = (function (_super) {
	__extends(uiMatchSkin, _super);
	function uiMatchSkin() {
		_super.call(this);
		this.skinParts = ["player1","player2","player3"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = uiMatchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-con-bg_png";
		t.x = 1;
		t.y = 1;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cpm-logo_png";
		t.x = 356.5;
		t.y = 64.11;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 537;
		t.y = 647.45;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.88;
		t.size = 34;
		t.text = "取 消";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 131.58;
		t.x = 591;
		t.y = 650;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 398;
		t.y = 354.61;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.player1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user2_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user1_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.player1_i = function () {
		var t = new eui.Image();
		this.player1 = t;
		t.source = "def-use_png";
		t.visible = false;
		t.x = 8.5;
		t.y = 11.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 582;
		t.y = 356.61;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.player2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user2_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user1_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.player2_i = function () {
		var t = new eui.Image();
		this.player2 = t;
		t.source = "def-use_png";
		t.visible = false;
		t.x = 8.5;
		t.y = 11.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 772;
		t.y = 354.61;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.player3_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user2_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user1_png";
		t.x = 0;
		t.y = 1;
		return t;
	};
	_proto.player3_i = function () {
		var t = new eui.Image();
		this.player3 = t;
		t.source = "def-use_png";
		t.visible = false;
		t.x = 8.5;
		t.y = 11.5;
		return t;
	};
	return uiMatchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRoomList.exml'] = window.uiRoomListSkin = (function (_super) {
	__extends(uiRoomListSkin, _super);
	function uiRoomListSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Label2_i(),this._Scroller1_i(),this._TextInput1_i()];
	}
	var _proto = uiRoomListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-joinr-bg_png";
		t.x = 2;
		t.y = 4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "btn-back_png";
		t.x = 66;
		t.y = 38;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.size = 46;
		t.text = "加入房间";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 552;
		t.x = 418;
		t.y = 12.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 537;
		t.y = 652;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 40;
		t.text = "搜索";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 172;
		t.x = 572;
		t.y = 657;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 412;
		t.width = 1082;
		t.x = 128;
		t.y = 128;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 402;
		t.width = 1102;
		return t;
	};
	_proto._TextInput1_i = function () {
		var t = new eui.TextInput();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.width = 650;
		t.x = 344;
		t.y = 540;
		return t;
	};
	return uiRoomListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/yazi.exml'] = window.yaziSkin = (function (_super) {
	__extends(yaziSkin, _super);
	function yaziSkin() {
		_super.call(this);
		this.skinParts = ["fly","die","image","image0","image1"];
		
		this.height = 122;
		this.width = 113;
		this.fly_i();
		this.die_i();
		this.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
	}
	var _proto = yaziSkin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object4_i();
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object8_i();
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.die_i = function () {
		var t = new egret.tween.TweenGroup();
		this.die = t;
		t.items = [this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.source = "yazi1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yazi2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.source = "yazi3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return yaziSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/yeNiao.exml'] = window.yeNiaoSkin = (function (_super) {
	__extends(yeNiaoSkin, _super);
	function yeNiaoSkin() {
		_super.call(this);
		this.skinParts = ["fly","die","image","image0","image1"];
		
		this.height = 130;
		this.width = 134;
		this.fly_i();
		this.die_i();
		this.elementsContent = [this.image_i(),this.image0_i(),this.image1_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
	}
	var _proto = yeNiaoSkin.prototype;

	_proto.fly_i = function () {
		var t = new egret.tween.TweenGroup();
		this.fly = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.props = this._Object4_i();
		t.paths = [this._Set4_i(),this._Wait3_i(),this._Set5_i(),this._Wait4_i(),this._Set6_i()];
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.props = this._Object8_i();
		t.paths = [this._Set7_i(),this._Wait5_i(),this._Set8_i(),this._Wait6_i(),this._Set9_i()];
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.loop = "true";
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.die_i = function () {
		var t = new egret.tween.TweenGroup();
		this.die = t;
		t.items = [this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set11_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set12_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.scaleX = -1;
		t.source = "yeniao1_png";
		t.x = 134;
		t.y = 0;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.scaleX = -1;
		t.source = "yeniao2_png";
		t.x = 134;
		t.y = 0;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.scaleX = -1;
		t.source = "yeniao3_png";
		t.x = 134;
		t.y = 0;
		return t;
	};
	return yeNiaoSkin;
})(eui.Skin);