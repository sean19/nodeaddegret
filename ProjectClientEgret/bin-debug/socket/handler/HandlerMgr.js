var texas;
(function (texas) {
    var HandleMgr = (function () {
        function HandleMgr() {
        }
        HandleMgr.init = function () {
            //HandleMgr.addHandler( CmdType.ENTER_GAME, new EnterGameHandler() );
            HandleMgr.addHandler(texas.CmdType.LOGIN, new texas.LoginHandler());
            //HandleMgr.addHandler( CmdType.LOGIN, new LoginHandler() );
        };
        HandleMgr.addHandler = function (cmdType, handler) {
            HandleMgr.handlers[cmdType] = handler;
        };
        HandleMgr.getHandler = function (cmdType) {
            var handler = HandleMgr.handlers[cmdType];
            if (handler == null)
                console.log("cmd is null" + cmdType);
            return handler;
        };
        HandleMgr.handlers = new Array();
        return HandleMgr;
    }());
    texas.HandleMgr = HandleMgr;
})(texas || (texas = {}));
