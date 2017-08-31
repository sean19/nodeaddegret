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
    var SocketManager = (function (_super) {
        __extends(SocketManager, _super);
        function SocketManager() {
            var _this = _super.call(this) || this;
            _this.ip = "127.0.0.1";
            _this.port = 7000;
            return _this;
        }
        SocketManager.prototype.addSocketClient = function (socketInfo) {
            var socketClient = new texas.SocketClient(socketInfo); //socketType,ip,port,path);
            this.addItem(socketClient);
            return socketClient;
        };
        SocketManager.prototype.getClientById = function (socketType) {
            for (var i = 0; i < this.arr.length; i++) {
                var socketClient = this.arr[i];
                if (socketClient.getid() == socketType) {
                    return socketClient;
                }
            }
            return null;
        };
        return SocketManager;
    }(ArrDispose));
    texas.SocketManager = SocketManager;
    __reflect(SocketManager.prototype, "texas.SocketManager");
})(texas || (texas = {}));
//# sourceMappingURL=SocketManager.js.map