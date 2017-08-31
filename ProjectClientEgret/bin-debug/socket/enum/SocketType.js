var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var SocketType = (function () {
        function SocketType() {
        }
        SocketType.Socket_User = 1;
        SocketType.Socket_Game = 2;
        return SocketType;
    }());
    texas.SocketType = SocketType;
    __reflect(SocketType.prototype, "texas.SocketType");
})(texas || (texas = {}));
//# sourceMappingURL=SocketType.js.map