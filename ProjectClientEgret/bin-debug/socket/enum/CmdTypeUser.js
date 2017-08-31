var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var CmdTypeUser = (function () {
        function CmdTypeUser() {
        }
        CmdTypeUser.BASE = 0;
        /** 登陆 */
        CmdTypeUser.LOGIN = 111;
        return CmdTypeUser;
    }());
    texas.CmdTypeUser = CmdTypeUser;
    __reflect(CmdTypeUser.prototype, "texas.CmdTypeUser");
})(texas || (texas = {}));
//# sourceMappingURL=CmdTypeUser.js.map