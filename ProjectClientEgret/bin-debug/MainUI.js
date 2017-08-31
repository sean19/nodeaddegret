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
        _this.initBtn();
        return _this;
    }
    MainUI.prototype.initBtn = function () {
        this.addbtn(0, "添加");
        this.addbtn(100, "发消息");
    };
    MainUI.prototype.addbtn = function (xps, info) {
        var txt = new egret.TextField();
        this.addChild(txt);
        txt.x = xps;
        txt.text = info;
        txt.touchEnabled = true;
        txt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
    };
    MainUI.prototype.onTap = function (e) {
        switch (e.target.text) {
            case "添加":
                var socketinfo = new SocketInfo(SocketType.Socket_User, "127.0.0.1", 7001, "");
                II.sk.addSocketClient(socketinfo).connect();
                break;
            case "发消息":
                II.skh.getHandler(SocketType.Socket_User, CmdTypeUser.LOGIN).sendMsg();
                break;
        }
    };
    return MainUI;
}(egret.DisplayObjectContainer));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map