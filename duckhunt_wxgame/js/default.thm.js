var egret = window.egret;window.skins={};
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","uiLogin":"resource/eui_skins/uiLogin.exml","uiLobby\\":"resource/eui_skins/uiLobby/.exml","uiLobby":"resource/eui_skins/uiLobby.exml","uiMatch":"resource/eui_skins/uiMatch.exml","uiGame":"resource/eui_skins/uiGame.exml","uiCreateRoom":"resource/eui_skins/uiCreateRoom.exml","uiExit":"resource/eui_skins/uiExit.exml","uiRoomList":"resource/eui_skins/uiRoomList.exml","CommonBullet":"resource/eui_skins/CommonBullet.exml","PlusBullet":"resource/eui_skins/PlusBullet.exml","BlueBird":"resource/eui_skins/BlueBird.exml","yazi":"resource/eui_skins/yazi.exml","yeNiao":"resource/eui_skins/yeNiao.exml","uiRoom":"resource/eui_skins/uiRoom.exml","RoomUserInfo":"resource/eui_skins/RoomUserInfo.exml","PlayerIcon":"resource/eui_skins/PlayerIcon.exml","RoomPrefab":"resource/eui_skins/RoomPrefab.exml","uiResult":"resource/eui_skins/uiResult.exml","uiTip":"resource/eui_skins/uiTip.exml"};generateEUI.paths['resource/eui_skins/BlueBird.exml'] = window.BlueBirdSkin = (function (_super) {
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
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [200],[],this._Object15,"y");
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
		t.paths = [this._Set12_i(),this._To1_i()];
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
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.ease = "quadIn";
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/PlayerIcon.exml'] = window.PlayerIconSkin = (function (_super) {
	__extends(PlayerIconSkin, _super);
	function PlayerIconSkin() {
		_super.call(this);
		this.skinParts = ["player1"];
		
		this.height = 155;
		this.width = 155;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = PlayerIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.player1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user2_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "play-user1_png";
		t.x = 3;
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
	return PlayerIconSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/RoomPrefab.exml'] = window.RoomPrefabSkin = (function (_super) {
	__extends(RoomPrefabSkin, _super);
	function RoomPrefabSkin() {
		_super.call(this);
		this.skinParts = ["roomId","roomname","roomItem"];
		
		this.height = 162.12;
		this.width = 137.88;
		this.elementsContent = [this.roomItem_i()];
	}
	var _proto = RoomPrefabSkin.prototype;

	_proto.roomItem_i = function () {
		var t = new eui.Group();
		this.roomItem = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.roomId_i(),this.roomname_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "room_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.roomId_i = function () {
		var t = new eui.Label();
		this.roomId = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.text = "10001";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 127.03;
		t.x = 4;
		t.y = 93;
		return t;
	};
	_proto.roomname_i = function () {
		var t = new eui.Label();
		this.roomname = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.58;
		t.text = "默认";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 127.03;
		t.x = 4;
		t.y = 135;
		return t;
	};
	return RoomPrefabSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RoomUserInfo.exml'] = window.RoomUserInfoSkin = (function (_super) {
	__extends(RoomUserInfoSkin, _super);
	function RoomUserInfoSkin() {
		_super.call(this);
		this.skinParts = ["username","common","default","type1","type2","type3","kick"];
		
		this.height = 219.33;
		this.width = 162;
		this.elementsContent = [this._Group1_i(),this.kick_i()];
	}
	var _proto = RoomUserInfoSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 68.5;
		t.anchorOffsetY = 93;
		t.horizontalCenter = 0.5;
		t.verticalCenter = -1.6650000000000063;
		t.elementsContent = [this.common_i(),this.default_i(),this.type1_i(),this.type2_i(),this.type3_i()];
		return t;
	};
	_proto.common_i = function () {
		var t = new eui.Group();
		this.common = t;
		t.x = 4.02;
		t.y = 3.35;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.username_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "def-user-squ_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "promptBox_png";
		t.width = 125;
		t.x = 0;
		t.y = 100;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetY = 0;
		t.height = 21.33;
		t.size = 15;
		t.text = "226300";
		t.verticalAlign = "middle";
		t.x = 42.17;
		t.y = 103.17;
		return t;
	};
	_proto.default_i = function () {
		var t = new eui.Group();
		this.default = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.alpha = 0.6;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123.2;
		t.source = "promptBox_png";
		t.width = 124;
		t.x = 6.61;
		t.y = 5.3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "bar-user2.2_png";
		t.x = -0.17;
		t.y = 147;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.1_png";
		t.y = -1;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "promptBox_png";
		t.width = 125;
		t.x = 6.11;
		t.y = 102.85;
		return t;
	};
	_proto.type1_i = function () {
		var t = new eui.Group();
		this.type1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "bar-user1.2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bar-user1.1_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "房主";
		t.x = 54.19;
		t.y = 155.85;
		return t;
	};
	_proto.type2_i = function () {
		var t = new eui.Group();
		this.type2 = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this._Label2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "bar-user2.2_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "路人";
		t.x = 51.19;
		t.y = 155.85;
		return t;
	};
	_proto.type3_i = function () {
		var t = new eui.Group();
		this.type3 = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Label3_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "bar-user3.3_png";
		t.x = 1.67;
		t.y = 146.35;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 20;
		t.text = "我";
		t.x = 58.5;
		t.y = 155.85;
		return t;
	};
	_proto.kick_i = function () {
		var t = new eui.Image();
		this.kick = t;
		t.source = "kick_png";
		t.x = 130;
		t.y = 2.35;
		return t;
	};
	return RoomUserInfoSkin;
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
		this.skinParts = ["plus","sub","playerNum","back","roomName","create"];
		
		this.height = 720;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.create_i(),this._Label1_i()];
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
		t.elementsContent = [this._Image2_i(),this.plus_i(),this.sub_i(),this._Image3_i(),this.playerNum_i(),this._Image4_i(),this.back_i(),this.roomName_i(),this._Image5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cpm-logo2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.plus_i = function () {
		var t = new eui.Image();
		this.plus = t;
		t.source = "icon-plus_png";
		t.x = 503.5;
		t.y = 249.5;
		return t;
	};
	_proto.sub_i = function () {
		var t = new eui.Image();
		this.sub = t;
		t.source = "minus_png";
		t.x = 278.5;
		t.y = 269.42;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(106,11,36,37);
		t.source = "room-kuang2_1_png";
		t.width = 56;
		t.x = 387.9;
		t.y = 247.76;
		return t;
	};
	_proto.playerNum_i = function () {
		var t = new eui.Label();
		this.playerNum = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.67;
		t.size = 34;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x070707;
		t.verticalAlign = "middle";
		t.width = 25.49;
		t.x = 403.18;
		t.y = 261.83;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "room-kuang2_png";
		t.x = 279.5;
		t.y = 381.42;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "close_png";
		t.x = 551.5;
		t.y = 112;
		return t;
	};
	_proto.roomName_i = function () {
		var t = new eui.TextInput();
		this.roomName = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.76;
		t.prompt = "请输入房间名";
		t.width = 235.15;
		t.x = 287;
		t.y = 389.03;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "close_png";
		t.visible = false;
		t.x = 548;
		t.y = 116.39;
		return t;
	};
	_proto.create_i = function () {
		var t = new eui.Image();
		this.create = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.48;
		t.source = "dating-btn_png";
		t.width = 369.45;
		t.x = 481.28;
		t.y = 574.49;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84.55;
		t.size = 46;
		t.text = "创 建";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = false;
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
		this.skinParts = ["back","leaveGame"];
		
		this.height = 750;
		this.width = 1344;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.back_i(),this._Label1_i(),this.leaveGame_i(),this._Label2_i()];
	}
	var _proto = uiExitSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 747.03;
		t.source = "track_sb_png";
		t.width = 1346.94;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "kuang_png";
		t.x = 360.5;
		t.y = 102.01;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "close_png";
		t.x = 908.5;
		t.y = 212.42;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.67;
		t.size = 40;
		t.text = "是否退出游戏？";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 316.67;
		t.x = 515.14;
		t.y = 375;
		return t;
	};
	_proto.leaveGame_i = function () {
		var t = new eui.Image();
		this.leaveGame = t;
		t.source = "home-btn5_png";
		t.x = 543.48;
		t.y = 517;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.67;
		t.size = 34;
		t.text = "退 出";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 186;
		t.x = 579;
		t.y = 522.33;
		return t;
	};
	return uiExitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiGame.exml'] = window.uiGameSkin = (function (_super) {
	__extends(uiGameSkin, _super);
	function uiGameSkin() {
		_super.call(this);
		this.skinParts = ["duckGuids","readyGo","bullet","gameover","timer","coinNum","bulletMask","bulletImg","bulletNum","myScoreLabel","myscore","leftScoreLabel","leftscore","rightScoreLabel","rightscore","back","playerBulletPos","playerCommonBulletPos","playerGun","leftPlayerBulletPos","leftplayerCommonBulletPos","leftPlayer","rightPlayerBulletPos","rightplayerCommonBulletPos","rightPlayer","rotationController","plusGun","commonGun","image","image0","image1","image2","image3","keyduckguids","image4","image5","image6"];
		
		this.height = 720;
		this.width = 1280;
		this.duckGuids_i();
		this.readyGo_i();
		this.bullet_i();
		this.gameover_i();
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.back_i(),this._Group5_i(),this.rotationController_i(),this.plusGun_i(),this.commonGun_i(),this.keyduckguids_i(),this._Group6_i(),this.image6_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [1.2],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [1.1],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, ["image2"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, ["image3"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, ["keyduckguids"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, ["image4"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [1.3],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, ["image5"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [92.76],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [59.29],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [1.5],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, [92.76],[],this._Object18,"x");
		eui.Binding.$bindProperties(this, ["image6"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, ["bulletMask"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [3.75],[],this._Object20,"height");
		eui.Binding.$bindProperties(this, [9.89],[],this._Object20,"x");
		eui.Binding.$bindProperties(this, [56.76],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, [58.81],[],this._Object21,"height");
		eui.Binding.$bindProperties(this, [8.09],[],this._Object21,"x");
		eui.Binding.$bindProperties(this, [1.72],[],this._Object21,"y");
		eui.Binding.$bindProperties(this, ["image6"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [573.28],[],this._Object23,"x");
		eui.Binding.$bindProperties(this, [210],[],this._Object23,"y");
		eui.Binding.$bindProperties(this, [10],[],this._Object24,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object25,"rotation");
		eui.Binding.$bindProperties(this, [-10],[],this._Object26,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object27,"rotation");
		eui.Binding.$bindProperties(this, [10],[],this._Object28,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object29,"rotation");
		eui.Binding.$bindProperties(this, [-10],[],this._Object30,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object31,"rotation");
	}
	var _proto = uiGameSkin.prototype;

	_proto.duckGuids_i = function () {
		var t = new egret.tween.TweenGroup();
		this.duckGuids = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.ease = "sineIn";
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Wait1_i(),this._Set2_i()];
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 750;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Wait2_i(),this._Set3_i()];
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 1750;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Wait3_i(),this._Set4_i()];
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 2750;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Wait4_i(),this._Set5_i()];
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 3750;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._Wait5_i(),this._Set7_i(),this._To4_i()];
		return t;
	};
	_proto._Set6_i = function () {
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
		t.duration = 3750;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto.readyGo_i = function () {
		var t = new egret.tween.TweenGroup();
		this.readyGo = t;
		t.items = [this._TweenItem7_i(),this._TweenItem8_i(),this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set8_i(),this._To5_i(),this._To6_i(),this._To7_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set9_i(),this._To8_i(),this._Wait6_i(),this._To9_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 850;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 50;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto.bullet_i = function () {
		var t = new egret.tween.TweenGroup();
		this.bullet = t;
		t.items = [this._TweenItem10_i()];
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set11_i(),this._To10_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 3000;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto.gameover_i = function () {
		var t = new egret.tween.TweenGroup();
		this.gameover = t;
		t.items = [this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set12_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i(),this._To16_i(),this._To17_i(),this._To18_i(),this._To19_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 750;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object26_i();
		return t;
	};
	_proto._Object26_i = function () {
		var t = {};
		this._Object26 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object27_i();
		return t;
	};
	_proto._Object27_i = function () {
		var t = {};
		this._Object27 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object28_i();
		return t;
	};
	_proto._Object28_i = function () {
		var t = {};
		this._Object28 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object29_i();
		return t;
	};
	_proto._Object29_i = function () {
		var t = {};
		this._Object29 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object30_i();
		return t;
	};
	_proto._Object30_i = function () {
		var t = {};
		this._Object30 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object31_i();
		return t;
	};
	_proto._Object31_i = function () {
		var t = {};
		this._Object31 = t;
		return t;
	};
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
		t.x = -1;
		t.y = 493;
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
		t.elementsContent = [this._Image4_i(),this.timer_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "duckClock_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.timer_i = function () {
		var t = new eui.Label();
		this.timer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 52;
		t.size = 36;
		t.text = "60";
		t.textAlign = "left";
		t.textColor = 0x5e5c58;
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
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.coinNum_i()];
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
	_proto.coinNum_i = function () {
		var t = new eui.Label();
		this.coinNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.text = "100";
		t.textColor = 0x5e5c58;
		t.x = 95.55;
		t.y = 7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 1027.98;
		t.y = 100.67;
		t.elementsContent = [this._Image8_i(),this.bulletMask_i(),this.bulletImg_i(),this._Image9_i(),this.bulletNum_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.alpha = 0.3;
		t.anchorOffsetX = 11;
		t.anchorOffsetY = 60;
		t.height = 60;
		t.source = "bullet_png";
		t.x = 19.75;
		t.y = 60;
		return t;
	};
	_proto.bulletMask_i = function () {
		var t = new eui.Image();
		this.bulletMask = t;
		t.alpha = 0.001;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.rotation = 358.13;
		t.source = "bullet_png";
		t.x = 8.05;
		t.y = 0.54;
		return t;
	};
	_proto.bulletImg_i = function () {
		var t = new eui.Image();
		this.bulletImg = t;
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
	_proto.bulletNum_i = function () {
		var t = new eui.Label();
		this.bulletNum = t;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.text = "100";
		t.textColor = 0x5e5c58;
		t.x = 95;
		t.y = 23.33;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 42.91;
		t.y = 88;
		t.elementsContent = [this.myscore_i(),this.leftscore_i(),this.rightscore_i()];
		return t;
	};
	_proto.myscore_i = function () {
		var t = new eui.Group();
		this.myscore = t;
		t.x = 2.67;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this.myScoreLabel_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "myscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.myScoreLabel_i = function () {
		var t = new eui.Label();
		this.myScoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Verdana";
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xff0707;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.33;
		t.y = -1.84;
		return t;
	};
	_proto.leftscore_i = function () {
		var t = new eui.Group();
		this.leftscore = t;
		t.x = 2;
		t.y = 43.33;
		t.elementsContent = [this._Image11_i(),this.leftScoreLabel_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "leftscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.leftScoreLabel_i = function () {
		var t = new eui.Label();
		this.leftScoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xf9dfa9;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.42;
		t.y = 0;
		return t;
	};
	_proto.rightscore_i = function () {
		var t = new eui.Group();
		this.rightscore = t;
		t.x = 0;
		t.y = 85.33;
		t.elementsContent = [this._Image12_i(),this.rightScoreLabel_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "rightscore_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto.rightScoreLabel_i = function () {
		var t = new eui.Label();
		this.rightScoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 40.67;
		t.size = 32;
		t.text = "0";
		t.textAlign = "left";
		t.textColor = 0xa39e9e;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 172.42;
		t.y = 0;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
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
		t.y = 748;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this.playerBulletPos_i(),this.playerCommonBulletPos_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "mygun_png";
		t.x = 0;
		t.y = 435;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "shexian_png";
		t.x = 23.5;
		t.y = -242.66;
		return t;
	};
	_proto.playerBulletPos_i = function () {
		var t = new eui.Image();
		this.playerBulletPos = t;
		t.alpha = 0.01;
		t.source = "dazidan_png";
		t.x = 9;
		t.y = 337.5;
		return t;
	};
	_proto.playerCommonBulletPos_i = function () {
		var t = new eui.Image();
		this.playerCommonBulletPos = t;
		t.alpha = 0.01;
		t.source = "bullet_png";
		t.x = 15.17;
		t.y = 369.5;
		return t;
	};
	_proto.leftPlayer_i = function () {
		var t = new eui.Group();
		this.leftPlayer = t;
		t.height = 242;
		t.rotation = 0;
		t.width = 51;
		t.x = 30.5;
		t.y = 507;
		t.elementsContent = [this._Image15_i(),this.leftPlayerBulletPos_i(),this.leftplayerCommonBulletPos_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 242;
		t.rotation = 0;
		t.source = "leftgun_png";
		t.x = 25.5;
		t.y = 242;
		return t;
	};
	_proto.leftPlayerBulletPos_i = function () {
		var t = new eui.Image();
		this.leftPlayerBulletPos = t;
		t.alpha = 0.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dazidan_png";
		t.x = 8.2;
		t.y = -98.89;
		return t;
	};
	_proto.leftplayerCommonBulletPos_i = function () {
		var t = new eui.Image();
		this.leftplayerCommonBulletPos = t;
		t.alpha = 0.01;
		t.source = "bullet_png";
		t.x = 13.63;
		t.y = -59.09;
		return t;
	};
	_proto.rightPlayer_i = function () {
		var t = new eui.Group();
		this.rightPlayer = t;
		t.x = 410.44;
		t.y = 749;
		t.elementsContent = [this._Image16_i(),this.rightPlayerBulletPos_i(),this.rightplayerCommonBulletPos_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 25.5;
		t.anchorOffsetY = 239;
		t.rotation = 0;
		t.source = "rightgun_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rightPlayerBulletPos_i = function () {
		var t = new eui.Image();
		this.rightPlayerBulletPos = t;
		t.alpha = 0.01;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "dazidan_png";
		t.x = -15.12;
		t.y = -341.91;
		return t;
	};
	_proto.rightplayerCommonBulletPos_i = function () {
		var t = new eui.Image();
		this.rightplayerCommonBulletPos = t;
		t.alpha = 0.01;
		t.source = "bullet_png";
		t.x = -9.69;
		t.y = -302.11;
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
	_proto.keyduckguids_i = function () {
		var t = new eui.Group();
		this.keyduckguids = t;
		t.anchorOffsetX = 215.91;
		t.anchorOffsetY = 139.395;
		t.height = 278.79;
		t.width = 431.82;
		t.x = 564.76;
		t.y = 278.395;
		t.elementsContent = [this.image_i(),this.image0_i(),this.image1_i(),this.image2_i(),this.image3_i()];
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 330;
		t.anchorOffsetY = 120;
		t.height = 240;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "promptBox_png";
		t.width = 660;
		t.x = 220;
		t.y = 120;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.alpha = 0;
		t.source = "text1_png";
		t.x = 28;
		t.y = 12;
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.alpha = 0;
		t.source = "text2_png";
		t.x = 26.65;
		t.y = 68.4;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.alpha = 0;
		t.source = "text3_png";
		t.x = 94.89;
		t.y = 122.79;
		return t;
	};
	_proto.image3_i = function () {
		var t = new eui.Image();
		this.image3 = t;
		t.alpha = 0;
		t.source = "text4_png";
		t.x = 99.65;
		t.y = 178;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.width = 200;
		t.x = 472;
		t.y = 216;
		t.elementsContent = [this.image4_i(),this.image5_i(),this._Image17_i()];
		return t;
	};
	_proto.image4_i = function () {
		var t = new eui.Image();
		this.image4 = t;
		t.anchorOffsetX = 143.5;
		t.anchorOffsetY = 53.5;
		t.scaleY = 0;
		t.source = "ready_png";
		t.x = 143.5;
		t.y = 53.5;
		return t;
	};
	_proto.image5_i = function () {
		var t = new eui.Image();
		this.image5 = t;
		t.alpha = 0;
		t.anchorOffsetX = 96.5;
		t.anchorOffsetY = 44.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "go_png";
		t.x = -318.5;
		t.y = 44.5;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.width = 20;
		t.x = 175;
		t.y = 63;
		return t;
	};
	_proto.image6_i = function () {
		var t = new eui.Image();
		this.image6 = t;
		t.anchorOffsetX = 185.5;
		t.anchorOffsetY = 32;
		t.source = "gameov_png";
		t.x = 1466.1;
		t.y = 209.4;
		return t;
	};
	return uiGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiLobby.exml'] = window.uiLobbySkin = (function (_super) {
	__extends(uiLobbySkin, _super);
	function uiLobbySkin() {
		_super.call(this);
		this.skinParts = ["username","rank","randomMatch","createRoom","joinRoom","inviteUser","exit"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i(),this._Group2_i(),this.rank_i(),this.randomMatch_i(),this.createRoom_i(),this.joinRoom_i(),this.inviteUser_i(),this.exit_i()];
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
	_proto.exit_i = function () {
		var t = new eui.Image();
		this.exit = t;
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
		this.skinParts = ["back","playerIconLayout"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.back_i(),this._Label1_i(),this.playerIconLayout_i()];
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
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
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
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 131.58;
		t.x = 591;
		t.y = 650;
		return t;
	};
	_proto.playerIconLayout_i = function () {
		var t = new eui.Group();
		this.playerIconLayout = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 212.12;
		t.width = 590.91;
		t.x = 372.97;
		t.y = 327;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 50;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return uiMatchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiResult.exml'] = window.uiResultSkin = (function (_super) {
	__extends(uiResultSkin, _super);
	function uiResultSkin() {
		_super.call(this);
		this.skinParts = ["firstId","firstScore","first","secondId","secondScore","second","thirdId","thirdScore","third","back"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group1_i(),this.first_i(),this.second_i(),this.third_i(),this.back_i()];
	}
	var _proto = uiResultSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-con-bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 420;
		t.source = "sr-con-bg3_png";
		t.width = 800;
		t.x = 267;
		t.y = 165;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sr-con-light_png";
		t.x = 383.5;
		t.y = 2;
		return t;
	};
	_proto.first_i = function () {
		var t = new eui.Group();
		this.first = t;
		t.x = 600;
		t.y = 139.36;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.source = "def-use_png";
		t.width = 124;
		t.x = 15;
		t.y = 10.64;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 188;
		t.source = "rank-user1_png";
		t.width = 217;
		t.x = -34;
		t.y = -29;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 6.5;
		t.y = 166;
		t.elementsContent = [this._Label1_i(),this.firstId_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "玩家：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.firstId_i = function () {
		var t = new eui.Label();
		this.firstId = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "123456";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 5.5;
		t.y = 196;
		t.elementsContent = [this._Label2_i(),this.firstScore_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "分数：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.firstScore_i = function () {
		var t = new eui.Label();
		this.firstScore = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto.second_i = function () {
		var t = new eui.Group();
		this.second = t;
		t.x = 403.04;
		t.y = 347;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.source = "def-use_png";
		t.width = 124;
		t.x = 15;
		t.y = 10.64;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 158;
		t.source = "rank-user3_png";
		t.width = 154;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 6.5;
		t.y = 166;
		t.elementsContent = [this._Label3_i(),this.secondId_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "玩家：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.secondId_i = function () {
		var t = new eui.Label();
		this.secondId = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "123456";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 5.5;
		t.y = 196;
		t.elementsContent = [this._Label4_i(),this.secondScore_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "分数：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.secondScore_i = function () {
		var t = new eui.Label();
		this.secondScore = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto.third_i = function () {
		var t = new eui.Group();
		this.third = t;
		t.x = 774;
		t.y = 346.36;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 124;
		t.source = "def-use_png";
		t.width = 124;
		t.x = 15;
		t.y = 10.64;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 167.09;
		t.source = "rank-user2_png";
		t.width = 167.64;
		t.x = -3.04;
		t.y = -9.09;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 6.5;
		t.y = 166;
		t.elementsContent = [this._Label5_i(),this.thirdId_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "玩家：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thirdId_i = function () {
		var t = new eui.Label();
		this.thirdId = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "123456";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 5.5;
		t.y = 196;
		t.elementsContent = [this._Label6_i(),this.thirdScore_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "分数：";
		t.textColor = 0x000000;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thirdScore_i = function () {
		var t = new eui.Label();
		this.thirdScore = t;
		t.anchorOffsetX = 0;
		t.size = 24;
		t.text = "1";
		t.textColor = 0x000000;
		t.width = 156;
		t.x = 67.5;
		t.y = 0;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Group();
		this.back = t;
		t.x = 548.5;
		t.y = 641;
		t.elementsContent = [this._Image10_i(),this._Label7_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "home-btn5_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.text = "返回";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 122;
		t.x = 71.5;
		t.y = 5;
		return t;
	};
	return uiResultSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRoom.exml'] = window.uiRoomSkin = (function (_super) {
	__extends(uiRoomSkin, _super);
	var uiRoomSkin$Skin1 = 	(function (_super) {
		__extends(uiRoomSkin$Skin1, _super);
		function uiRoomSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = uiRoomSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "home-btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return uiRoomSkin$Skin1;
	})(eui.Skin);

	var uiRoomSkin$Skin2 = 	(function (_super) {
		__extends(uiRoomSkin$Skin2, _super);
		function uiRoomSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = uiRoomSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "bar-user2.2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return uiRoomSkin$Skin2;
	})(eui.Skin);

	var uiRoomSkin$Skin3 = 	(function (_super) {
		__extends(uiRoomSkin$Skin3, _super);
		function uiRoomSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = uiRoomSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "home-btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return uiRoomSkin$Skin3;
	})(eui.Skin);

	function uiRoomSkin() {
		_super.call(this);
		this.skinParts = ["gamestart","gamestartGray","leave","roomUserGroup"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.gamestart_i(),this.gamestartGray_i(),this.leave_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this.roomUserGroup_i()];
	}
	var _proto = uiRoomSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.source = "border_png";
		t.width = 1334;
		t.y = 15;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sr-bbot-bg2_png";
		t.x = 0;
		return t;
	};
	_proto.gamestart_i = function () {
		var t = new eui.Button();
		this.gamestart = t;
		t.label = "开始游戏";
		t.x = 905.64;
		t.y = 603.42;
		t.skinName = uiRoomSkin$Skin1;
		return t;
	};
	_proto.gamestartGray_i = function () {
		var t = new eui.Button();
		this.gamestartGray = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102.64;
		t.label = "开始游戏";
		t.touchEnabled = false;
		t.width = 265.3;
		t.x = 905.64;
		t.y = 603.42;
		t.skinName = uiRoomSkin$Skin2;
		return t;
	};
	_proto.leave_i = function () {
		var t = new eui.Button();
		this.leave = t;
		t.label = "离开";
		t.x = 155.03;
		t.y = 603.42;
		t.skinName = uiRoomSkin$Skin3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "sr-user-bg_png";
		t.x = 0;
		t.y = 184.84;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon-money_png";
		t.visible = false;
		t.x = 25;
		t.y = 111;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "rome-gold_png";
		t.visible = false;
		t.x = 90.03;
		t.y = 122;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "999";
		t.visible = false;
		t.x = 229.03;
		t.y = 122;
		return t;
	};
	_proto.roomUserGroup_i = function () {
		var t = new eui.Group();
		this.roomUserGroup = t;
		t.anchorOffsetX = 400;
		t.anchorOffsetY = 150;
		t.height = 300;
		t.width = 800;
		t.x = 610;
		t.y = 360;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 195;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	return uiRoomSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiRoomList.exml'] = window.uiRoomListSkin = (function (_super) {
	__extends(uiRoomListSkin, _super);
	function uiRoomListSkin() {
		_super.call(this);
		this.skinParts = ["back","search","roomGroup","roomIDInput"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.back_i(),this._Label1_i(),this._Image2_i(),this.search_i(),this._Label2_i(),this._Scroller1_i(),this.roomIDInput_i()];
	}
	var _proto = uiRoomListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "sr-joinr-bg_png";
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Image();
		this.back = t;
		t.source = "btn-back_png";
		t.x = 114;
		t.y = 84;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.size = 40;
		t.text = "加入房间";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 388;
		t.x = 473;
		t.y = 68.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 210;
		t.width = 1330;
		t.x = 2;
		t.y = 538;
		return t;
	};
	_proto.search_i = function () {
		var t = new eui.Image();
		this.search = t;
		t.source = "home-btn5_png";
		t.x = 537;
		t.y = 647;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.size = 34;
		t.text = "搜索";
		t.textAlign = "center";
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.width = 246;
		t.x = 546;
		t.y = 652;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382;
		t.width = 1100;
		t.x = 152;
		t.y = 148;
		t.viewport = this.roomGroup_i();
		return t;
	};
	_proto.roomGroup_i = function () {
		var t = new eui.Group();
		this.roomGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 376;
		t.width = 1044;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.roomIDInput_i = function () {
		var t = new eui.TextInput();
		this.roomIDInput = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.prompt = "输入房间号";
		t.width = 646;
		t.x = 344;
		t.y = 551;
		return t;
	};
	return uiRoomListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/uiTip.exml'] = window.uiTipSkin = (function (_super) {
	__extends(uiTipSkin, _super);
	function uiTipSkin() {
		_super.call(this);
		this.skinParts = ["tip"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.tip_i()];
	}
	var _proto = uiTipSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "di_png";
		t.x = 389.41;
		t.y = 283;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bian_png";
		t.x = 385.02;
		t.y = 280.66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "bian_png";
		t.x = 946.55;
		t.y = 280.03;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46.67;
		t.text = "Label";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 484.61;
		t.x = 421.47;
		t.y = 281.82;
		return t;
	};
	return uiTipSkin;
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
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, ["image0"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, ["image1"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [200],[],this._Object15,"y");
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
		t.paths = [this._Set12_i(),this._To1_i()];
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
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
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
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [200],[],this._Object15,"y");
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
		t.paths = [this._Set12_i(),this._To1_i()];
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
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.ease = "quadIn";
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
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