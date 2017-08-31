var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var SocketInfo = (function () {
        function SocketInfo(socketType, ip, port, path) {
            this.socket_ip = ip;
            this.socket_port = port;
            this.socket_path = path;
            this.socket_type = socketType;
        }
        return SocketInfo;
    }());
    texas.SocketInfo = SocketInfo;
    __reflect(SocketInfo.prototype, "texas.SocketInfo");
})(texas || (texas = {}));
//# sourceMappingURL=SocketInfo.js.map