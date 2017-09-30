
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/res/res.js",
	"libs/modules/socket/socket.js",
	"libs/modules/tween/tween.js",
	"libs/modules/protobuf/protobuf.js",
	"bin-debug/core/ArrDispose.js",
	"bin-debug/socket/socketCore/SocketManager.js",
	"bin-debug/socket/socketCore/handler/IHandler.js",
	"bin-debug/socket/socketCore/SocketInfo.js",
	"bin-debug/socket/enum/SocketType.js",
	"bin-debug/event/EventCenter.js",
	"bin-debug/socket/ProtoBufMgr.js",
	"bin-debug/socket/HandlerFactory.js",
	"bin-debug/socket/enum/CmdTypeUser.js",
	"bin-debug/socket/socketCore/handler/HandlerBase.js",
	"bin-debug/socket/socketCore/SocketClient.js",
	"bin-debug/event/EventUnit.js",
	"bin-debug/socket/enum/CmdTypeGame.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/core/IItem.js",
	"bin-debug/socket/manager/game/GameLoginHandler.js",
	"bin-debug/socket/manager/user/LoginHandler.js",
	"bin-debug/socket/socketCore/HandlerManagerBase.js",
	"bin-debug/event/EventEnum.js",
	"bin-debug/socket/socketCore/SocketConnector.js",
	"bin-debug/socket/socketCore/SocketHandlerManager.js",
	"bin-debug/core/IDispose.js",
	"bin-debug/MainUI.js",
	"bin-debug/socket/socketCore/SocketPackage.js",
	"bin-debug/socket/socketCore/Util.js",
	"bin-debug/Main.js",
	"bin-debug/II.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    if(egret_native.featureEnable) {
        //控制一些优化方案是否开启
        var result = egret_native.featureEnable({
            
        });
    }
    egret_native.requireFiles();
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 800,
		contentHeight: 600,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel("/system/fonts/DroidSansFallback.ttf", 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};