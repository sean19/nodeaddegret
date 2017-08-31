var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketHandlerManager = texas.SocketHandlerManager;
var SocketManager = texas.SocketManager;
var ProtoBufMgr = texas.ProtoBufMgr;
var II = (function () {
    function II() {
    }
    II.sk = new SocketManager();
    II.skh = new SocketHandlerManager();
    II.protobufMgr = new ProtoBufMgr();
    return II;
}());
__reflect(II.prototype, "II");
//# sourceMappingURL=II.js.map