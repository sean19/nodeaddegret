var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var SocketClient = (function () {
        function SocketClient(socketInfo) {
            this._socket_info = socketInfo;
        }
        SocketClient.prototype.connect = function () {
            this._socket_Connector = new texas.SocketConnector(this._socket_info.socket_port, this._socket_info.socket_ip, this._socket_info.socket_path, this.onConnect, this.onMessage, this);
            this._socket_Connector.connect();
        };
        SocketClient.prototype.onConnect = function () {
            II.event_center.callEvent(EventEnum.Socket_connected);
            console.log("on connect");
        };
        SocketClient.prototype.onMessage = function (sk) {
            var byte = new egret.ByteArray();
            sk.readBytes(byte);
            var pkg = new SocketPackage(-1);
            pkg.readPBytes(byte);
            var hdl = II.handlerFactory.getHandler(this._socket_info.socket_type, pkg.cmdType);
            hdl.execute(pkg);
            //var pkg:Package = new Package();
            // pkg.readPkg( Util.string2ArrayBuffer( e.target.readUTF() ) );
            /**
            var handler:IHandler = this._handler_manager.gethandler(pkg.getCmdType());
            if( handler )
                handler.execute( pkg );
            else
                console.log( "cmd handler is null 主协议ID:"+ pkg.getCmdType());
                 */
        };
        SocketClient.prototype.reConnect = function () {
            this._socket_Connector.connect();
        };
        SocketClient.prototype.sendSocketPsk = function (pkg) {
            var type = pkg.cmdType;
            /*if( CmdString.CmdType[ type ] )
            {
                console.log( "发送：cmdType:" + type + ";" + CmdString.CmdType[ type ] );
            }*/
            this._socket_Connector.sendData(pkg.toByteArray());
        };
        SocketClient.prototype.getid = function () {
            return this._socket_info.socket_type;
        };
        SocketClient.prototype.dispose = function () {
            this.clear();
        };
        SocketClient.prototype.clear = function () {
            /**
            if(this._handler_manager)
            {
                this._handler_manager.dispose();
                this._handler_manager = null;
            }
            if(this._socket_Connector)
            {
                this._socket_Connector.dispose();
                this._socket_Connector = null;
            }
            if(this._socket_info)
            {
                this._socket_info = null;
            }
             */
        };
        return SocketClient;
    }());
    texas.SocketClient = SocketClient;
    __reflect(SocketClient.prototype, "texas.SocketClient", ["IItem"]);
})(texas || (texas = {}));
//# sourceMappingURL=SocketClient.js.map