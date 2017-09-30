var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var HandlerFactory = (function () {
        function HandlerFactory() {
        }
        HandlerFactory.prototype.getHandler = function (socketType, cmdtype) {
            var hm;
            switch (socketType) {
                case texas.SocketType.Socket_User:
                    hm = this.getUserHandler(cmdtype);
                    break;
                case texas.SocketType.Socket_Game:
                    break;
            }
            hm.socketType = socketType;
            return hm;
        };
        HandlerFactory.prototype.getUserHandler = function (cmdType) {
            var hm;
            switch (cmdType) {
                case texas.CmdTypeUser.LOGIN:
                    hm = new texas.LoginHandler();
                    break;
                case texas.SocketType.Socket_Game:
                    break;
            }
            return hm;
        };
        return HandlerFactory;
    }());
    texas.HandlerFactory = HandlerFactory;
    __reflect(HandlerFactory.prototype, "texas.HandlerFactory");
})(texas || (texas = {}));
//# sourceMappingURL=HandlerFactory.js.map