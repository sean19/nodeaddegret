var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var HandlerBase = (function () {
        function HandlerBase() {
            this._cmd_type = 0;
        }
        Object.defineProperty(HandlerBase.prototype, "class_name", {
            get: function () {
                return "todd";
            },
            enumerable: true,
            configurable: true
        });
        HandlerBase.prototype.getmsg = function (pkg) {
            var bytes = pkg.getProtoBuf();
            var Builder = II.protobufMgr.getBuilder(this.class_name);
            var msg = Builder.decode(bytes["data"].buffer);
            return msg;
        };
        Object.defineProperty(HandlerBase.prototype, "socketType", {
            set: function (socketType) {
                this._socket_type = socketType;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(HandlerBase.prototype, "myClient", {
            get: function () {
                return II.sk.getClientById(this._socket_type);
            },
            enumerable: true,
            configurable: true
        });
        HandlerBase.prototype.getid = function () {
            return 0;
        };
        HandlerBase.prototype.dispose = function () {
        };
        HandlerBase.prototype.getCmdType = function () {
            return this._cmd_type;
        };
        HandlerBase.prototype.execute = function (pkg) {
        };
        HandlerBase.prototype.sendMsg = function (mag) {
        };
        return HandlerBase;
    }());
    texas.HandlerBase = HandlerBase;
    __reflect(HandlerBase.prototype, "texas.HandlerBase", ["IItem", "texas.IHandler"]);
})(texas || (texas = {}));
//# sourceMappingURL=HandlerBase.js.map