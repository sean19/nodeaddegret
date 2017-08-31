/**
 * @demon
 * websocket
 */
// import {User_login} from "../../libs/modules/protots/typings/User_login";
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texas;
(function (texas) {
    var SocketConnector = (function () {
        function SocketConnector(port, ip, path, openConnect, onMessage, callBackThis) {
            /**
             * 数据包自增ID
             */
            this.INC_ID = 0;
            this.timeStamp = 0;
            this.openConnect = openConnect;
            this.onMessage = onMessage;
            this.callBackThis = callBackThis;
            // this.client = client;
            this.port = port;
            this.ip = ip;
            this.path = path;
        }
        SocketConnector.prototype.dispose = function () {
            this.openConnect = null;
            this.onMessage = null;
            this.callBackThis = null;
        };
        SocketConnector.prototype.sendData = function (data) {
            if (!this.socket.connected) {
                console.log("socket已经断开");
                var timeStamp = Date.now();
                if (timeStamp - this.timeStamp > 5000) {
                    this.timeStamp = timeStamp;
                    if (SocketConnector.KickOut) {
                        // DropDownPanel.instance.setText( "您的帐号在另一地点登录，你被下线了。如果这不是您本人的操作，那么您的密码可能已经泄露，建议您修改密码。" );
                        return;
                    }
                    egret.setTimeout(this.onTimeOut, this, 15000);
                    // DropDownPanel.instance.setText( "断网了，自动重连中…" );
                    // AppContainer.getInstance().reConnect();
                }
                return;
            }
            //data.dataView.setInt32( 2, this.INC_ID++ );
            // var bufstr:string = Util.arrayBuffer2String( data );
            // this.socket.writeUTF(bufstr  );
            this.socket.writeBytes(data, 0, data.bytesAvailable);
        };
        /**
         * 连接websocket
         */
        SocketConnector.prototype.connect = function () {
            if (null == window["WebSocket"]) {
                // Statistics.noWebSocket();
                // DropDownPanel.instance.setText( "当前浏览器版本过低，建议使用qq浏览器或uc浏览器打开网址 kdzy818.com" );
                return;
            }
            var portStr = this.port + this.path; //端口号加后缀路径
            this.socket = new egret.WebSocket();
            // this.socket.type = egret.WebSocket.TYPE_STRING;
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            this.socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this.socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this.socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
            this.socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.socket.connect(this.ip, portStr);
            this.timeStamp = Date.now();
        };
        SocketConnector.prototype.onReceiveMessage = function (e) {
            this.onMessage.call(this.callBackThis, e.target);
        };
        SocketConnector.prototype.onSocketOpen = function () {
            console.log("socket open");
            this.openConnect.call(this.callBackThis, []);
        };
        SocketConnector.prototype.onSocketError = function (e) {
            //egret.setTimeout( this.onTimeOut, this, 5000 );
            console.log("socket error:" + e.type);
            // Statistics.leave();
        };
        SocketConnector.prototype.onSocketClose = function (e) {
            /*if( Param.getUrlDataByName( "isNew" ) == "1" )
            {
                Statistics.first_game();
            }*/
            //egret.setTimeout( this.onTimeOut, this, 5000 );
            console.log("socket close");
            // Statistics.leave();
        };
        SocketConnector.prototype.onTimeOut = function () {
            if (!this.socket.connected) {
                egret.setTimeout(this.onTimeOut2, this, 15000);
            }
        };
        SocketConnector.prototype.onTimeOut2 = function () {
            if (!this.socket.connected) {
                // DropDownPanel.instance.setText( "网络连不上，请换个网络再刷新试试" );
            }
        };
        SocketConnector.KickOut = false;
        return SocketConnector;
    }());
    texas.SocketConnector = SocketConnector;
    __reflect(SocketConnector.prototype, "texas.SocketConnector", ["IDispose"]);
})(texas || (texas = {}));
//# sourceMappingURL=SocketConnector.js.map