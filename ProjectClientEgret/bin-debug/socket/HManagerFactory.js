var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var HManagerFactory = (function () {
        function HManagerFactory() {
        }
        HManagerFactory.getHandlerManager = function (socketType) {
            var hm;
            switch (socketType) {
                case texas.SocketType.Socket_User:
                    hm = new texas.HandlerMangerUser();
                    break;
                case texas.SocketType.Socket_Game:
                    hm = new texas.HandlerManagerGame();
                    break;
            }
            return hm;
        };
        return HManagerFactory;
    }());
    texas.HManagerFactory = HManagerFactory;
    __reflect(HManagerFactory.prototype, "texas.HManagerFactory");
})(texas || (texas = {}));
//# sourceMappingURL=HManagerFactory.js.map