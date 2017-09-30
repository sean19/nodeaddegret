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
    var SocketHandlerManager = (function (_super) {
        __extends(SocketHandlerManager, _super);
        function SocketHandlerManager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SocketHandlerManager.prototype.getHandler = function (SocketType, cmdType) {
            var skm = this.getItem(SocketType);
            return skm.gethandler(cmdType);
        };
        return SocketHandlerManager;
    }(ArrDispose));
    texas.SocketHandlerManager = SocketHandlerManager;
    __reflect(SocketHandlerManager.prototype, "texas.SocketHandlerManager");
})(texas || (texas = {}));
//# sourceMappingURL=SocketHandlerManager.js.map