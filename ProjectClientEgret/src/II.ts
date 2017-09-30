import SocketManager = texas.SocketManager;
import ProtoBufMgr = texas.ProtoBufMgr;
import HandlerFactory = texas.HandlerFactory;

class II {
    public static sk:SocketManager = new SocketManager();
    public static handlerFactory:HandlerFactory = new HandlerFactory();
    public static protobufMgr:ProtoBufMgr = new ProtoBufMgr();
    public static event_center:EventCenter = new EventCenter();

}