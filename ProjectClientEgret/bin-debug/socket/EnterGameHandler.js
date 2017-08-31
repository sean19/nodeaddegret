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
    var EnterGameHandler = (function (_super) {
        __extends(EnterGameHandler, _super);
        function EnterGameHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EnterGameHandler.prototype.execute = function (pkg) {
            /**
            var bytes = pkg.getProtoBuf();
            var Builder = ProtoBufMgr.getInstance().getBuilder( "TableInfo" );
            var msg = Builder.decode( bytes[ "data" ].buffer );
            
            var players = msg.playerInfoSet.playerInfoList;
            var roomID:number = msg.tableId;
*/
        };
        return EnterGameHandler;
    }(texas.HandlerBase));
    texas.EnterGameHandler = EnterGameHandler;
    __reflect(EnterGameHandler.prototype, "texas.EnterGameHandler");
})(texas || (texas = {}));
//# sourceMappingURL=EnterGameHandler.js.map