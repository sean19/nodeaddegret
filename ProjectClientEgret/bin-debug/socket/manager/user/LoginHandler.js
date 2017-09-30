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
var texas;
(function (texas) {
    var LoginHandler = (function (_super) {
        __extends(LoginHandler, _super);
        function LoginHandler() {
            return _super.call(this) || this;
        }
        Object.defineProperty(LoginHandler.prototype, "class_name", {
            get: function () {
                return "login_info";
            },
            enumerable: true,
            configurable: true
        });
        LoginHandler.prototype.execute = function (pkg) {
            var msg = this.getmsg(pkg);
            II.event_center.callEvent(EventEnum.Socket_login_result, [msg]);
        };
        LoginHandler.prototype.sendMsg = function (msg) {
            var proto = RES.getRes("Login_proto"); //加载PB数据结果定义字符
            var builder = dcodeIO.ProtoBuf.loadProto(proto, null); //解析PB数据定义文件，生成PB对象构造器 (loadProtoFile用这个可以代替RES的功能，自己选）
            var clazz = builder.build("user_login"); //构建一个PB数据结构（messageName为PB中定义的结果名）
            var data = new clazz();
            //创建一个数据结构
            //data.set("id",1);//可以使用data.id=1;
            data.name = msg.name; //赋值
            data.pass = msg.pass;
            //转成字节
            var btyearray = data.toBuffer();
            var len = btyearray.byteLength;
            var eb = new egret.ByteArray(btyearray);
            var socketPkg = new SocketPackage(texas.CmdTypeUser.LOGIN);
            socketPkg.putBytes(eb);
            this.myClient.sendSocketPsk(socketPkg);
            // var pkg:Package = Package.createPkg(CmdTypeUser.LOGIN);
            // pkg.putBytes(eb);
            // this.myClient.sendPkg(pkg);
        };
        /**是否已经登录过，sockect重连*/
        LoginHandler.sockectReconnect = false;
        return LoginHandler;
    }(texas.HandlerBase));
    texas.LoginHandler = LoginHandler;
    __reflect(LoginHandler.prototype, "texas.LoginHandler");
})(texas || (texas = {}));
//# sourceMappingURL=LoginHandler.js.map