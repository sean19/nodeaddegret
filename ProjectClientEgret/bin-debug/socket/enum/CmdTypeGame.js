var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var CmdTypeGame = (function () {
        function CmdTypeGame() {
        }
        /** 登陆 */
        CmdTypeGame.LOGIN = 1;
        return CmdTypeGame;
    }());
    texas.CmdTypeGame = CmdTypeGame;
    __reflect(CmdTypeGame.prototype, "texas.CmdTypeGame");
})(texas || (texas = {}));
//# sourceMappingURL=CmdTypeGame.js.map