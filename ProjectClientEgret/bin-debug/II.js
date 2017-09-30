var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketManager = texas.SocketManager;
var ProtoBufMgr = texas.ProtoBufMgr;
var HandlerFactory = texas.HandlerFactory;
var II = (function () {
    function II() {
    }
    II.sk = new SocketManager();
    II.handlerFactory = new HandlerFactory();
    II.protobufMgr = new ProtoBufMgr();
    II.event_center = new EventCenter();
    return II;
}());
__reflect(II.prototype, "II");
//# sourceMappingURL=II.js.map