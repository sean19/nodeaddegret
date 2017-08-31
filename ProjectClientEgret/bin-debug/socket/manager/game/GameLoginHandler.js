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
    var GameLoginHandler = (function (_super) {
        __extends(GameLoginHandler, _super);
        function GameLoginHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameLoginHandler.prototype.execute = function (pkg) {
        };
        GameLoginHandler.prototype.sendMsg = function () {
            // var pkg:Package = new Package();
            // this.myClient.sendPkg(pkg);
        };
        /**是否已经登录过，sockect重连*/
        GameLoginHandler.sockectReconnect = false;
        return GameLoginHandler;
    }(texas.HandlerBase));
    texas.GameLoginHandler = GameLoginHandler;
    __reflect(GameLoginHandler.prototype, "texas.GameLoginHandler");
})(texas || (texas = {}));
//# sourceMappingURL=GameLoginHandler.js.map