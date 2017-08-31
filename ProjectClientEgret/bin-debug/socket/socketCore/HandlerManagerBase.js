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
var HandlerBase = texas.HandlerBase;
var texas;
(function (texas) {
    var HandlerManagerBase = (function (_super) {
        __extends(HandlerManagerBase, _super);
        function HandlerManagerBase() {
            var _this = _super.call(this) || this;
            _this.initHandler();
            return _this;
        }
        HandlerManagerBase.prototype.getid = function () {
            return 0;
        };
        /**
         * 初始化句柄 格式如下
         * this.addHandler(CmdType.LOGIN,new LoginHandler);
         */
        HandlerManagerBase.prototype.initHandler = function () {
            throw new Error("没初始化控制器");
        };
        HandlerManagerBase.prototype.addHandler = function (cmdType, handlerBase) {
            handlerBase.socketType = this.getid();
            this.arr[cmdType] = handlerBase;
        };
        HandlerManagerBase.prototype.gethandler = function (cmdType) {
            return this.arr[cmdType];
        };
        return HandlerManagerBase;
    }(ArrDispose));
    texas.HandlerManagerBase = HandlerManagerBase;
    __reflect(HandlerManagerBase.prototype, "texas.HandlerManagerBase", ["IItem"]);
})(texas || (texas = {}));
//# sourceMappingURL=HandlerManagerBase.js.map