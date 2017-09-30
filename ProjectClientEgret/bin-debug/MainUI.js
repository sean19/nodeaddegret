var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SocketType = texas.SocketType;
var SocketInfo = texas.SocketInfo;
var CmdTypeUser = texas.CmdTypeUser;
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.arr_txt = [];
        _this.initBtn();
        return _this;
    }
    MainUI.prototype.initBtn = function () {
        this.addtxt(0, 0, "连接", egret.TextFieldType.DYNAMIC, 1);
        this.addtxt(200, 100, "账号：", egret.TextFieldType.DYNAMIC, 0);
        this.addtxt(300, 100, "...", egret.TextFieldType.INPUT, 0);
        this.addtxt(200, 150, "密码：", egret.TextFieldType.DYNAMIC, 0);
        this.addtxt(300, 150, "...", egret.TextFieldType.INPUT, 0);
        this.addtxt(250, 200, "登录", egret.TextFieldType.DYNAMIC, 1);
        this.addtxt(100, 150, "连接中", egret.TextFieldType.DYNAMIC, 0);
        this.showConnect();
        this.addEvent();
    };
    MainUI.prototype.addEvent = function () {
        II.event_center.addCallBack(EventEnum.Socket_connected, this.onConnect, this);
        II.event_center.addCallBack(EventEnum.Socket_login_result, this.onLogin, this);
    };
    MainUI.prototype.onLogin = function (msg) {
        this.showTxt(6);
        if (msg.result == "1") {
            this.arr_txt[6].text = msg.userName;
        }
        else {
            this.arr_txt[6].text = "登录失败";
        }
    };
    MainUI.prototype.showTxt = function (idx) {
        var txt = this.arr_txt[idx];
        this.addChild(txt);
    };
    MainUI.prototype.hideTxt = function (idx) {
        var txt = this.arr_txt[idx];
        if (this.contains(txt)) {
            this.removeChild(txt);
        }
    };
    MainUI.prototype.addtxt = function (xps, yps, info, ty, evt) {
        if (evt === void 0) { evt = 0; }
        var txt = new egret.TextField();
        txt.type = ty;
        this.arr_txt.push(txt);
        txt.inputType = egret.TextFieldInputType.TEXT;
        txt.x = xps;
        txt.y = yps;
        txt.text = info;
        if (evt == 1) {
            txt.textColor = 0x00ff00;
            txt.touchEnabled = true;
            txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        }
    };
    MainUI.prototype.showConnect = function () {
        var txt = this.arr_txt[0];
        this.addChild(txt);
    };
    MainUI.prototype.onConnect = function () {
        this.showTxt(1);
        this.showTxt(2);
        this.showTxt(3);
        this.showTxt(4);
        this.showTxt(5);
    };
    MainUI.prototype.onTap = function (e) {
        switch (e.target.text) {
            case "连接":
                this.hideTxt(0);
                var socketinfo = new SocketInfo(SocketType.Socket_User, "127.0.0.1", 7000, "");
                II.sk.addSocketClient(socketinfo).connect();
                break;
            case "登录":
                this.hideTxt(1);
                this.hideTxt(2);
                this.hideTxt(3);
                this.hideTxt(4);
                this.hideTxt(5);
                this.showTxt(6);
                var msg = new Object();
                msg.name = this.arr_txt[2].text;
                msg.pass = this.arr_txt[4].text;
                II.handlerFactory.getHandler(SocketType.Socket_User, CmdTypeUser.LOGIN).sendMsg(msg);
                break;
        }
    };
    return MainUI;
}(egret.DisplayObjectContainer));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map