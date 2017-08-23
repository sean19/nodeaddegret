var texas;
(function (texas) {
    var CmdType = (function () {
        function CmdType() {
        }
        CmdType.BASE = 0;
        /** 登陆 */
        CmdType.LOGIN = 1;
        return CmdType;
    }());
    texas.CmdType = CmdType;
})(texas || (texas = {}));
