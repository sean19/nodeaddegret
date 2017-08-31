/**
 * @demon
 * websocket
 */
// import {User_login} from "../../libs/modules/protots/typings/User_login";

module texas
{
    export class SocketConnector implements IDispose
    {
        public static KickOut:boolean = false;
        private socket:egret.WebSocket;
        // private client:SocketClient;
        private port:number;//端口
        private ip:string;//ip
        private path:string;//后缀路径
        private openConnect:any;
        private onMessage:any;
        private callBackThis;

        /**
         * 数据包自增ID
         */
        private INC_ID:number = 0;

        public constructor(  port:number, ip:string, path:string ,openConnect:any,onMessage:any, callBackThis:any)
        {
            this.openConnect = openConnect;
            this.onMessage = onMessage;
            this.callBackThis = callBackThis;
            // this.client = client;
            this.port = port;
            this.ip = ip;
            this.path = path;
        }

        public dispose():void
        {
            this.openConnect = null;
            this.onMessage = null;
            this.callBackThis = null;
        }
        private timeStamp:number = 0;

        public sendData( data:egret.ByteArray ):void
        {
            if( !this.socket.connected )
            {
                console.log( "socket已经断开" );
                var timeStamp:number = Date.now();
                if( timeStamp - this.timeStamp > 5000 )
                {
                    this.timeStamp = timeStamp;
                    if( SocketConnector.KickOut )
                    {
                        // DropDownPanel.instance.setText( "您的帐号在另一地点登录，你被下线了。如果这不是您本人的操作，那么您的密码可能已经泄露，建议您修改密码。" );
                        return;
                    }
                    egret.setTimeout( this.onTimeOut, this, 15000 );
                    // DropDownPanel.instance.setText( "断网了，自动重连中…" );
                    // AppContainer.getInstance().reConnect();
                }
                return;
            }

            //data.dataView.setInt32( 2, this.INC_ID++ );
            // var bufstr:string = Util.arrayBuffer2String( data );
            // this.socket.writeUTF(bufstr  );
            this.socket.writeBytes( data, 0, data.bytesAvailable );
        }
        
        

        /**
         * 连接websocket
         */
        public connect(  ):void
        {

            if( null == window[ "WebSocket" ] )
            {
                // Statistics.noWebSocket();
                // DropDownPanel.instance.setText( "当前浏览器版本过低，建议使用qq浏览器或uc浏览器打开网址 kdzy818.com" );
                return;
            }
            var portStr:any = this.port + this.path;  //端口号加后缀路径
            this.socket = new egret.WebSocket();
            // this.socket.type = egret.WebSocket.TYPE_STRING;
            this.socket.type = egret.WebSocket.TYPE_BINARY;
            this.socket.addEventListener( egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this );
            this.socket.addEventListener( egret.Event.CONNECT, this.onSocketOpen, this );
            this.socket.addEventListener( egret.IOErrorEvent.IO_ERROR, this.onSocketError, this );
            this.socket.addEventListener( egret.Event.CLOSE, this.onSocketClose, this );
            this.socket.connect( this.ip, portStr );
            this.timeStamp = Date.now();
        }
       

        public onReceiveMessage( e:egret.Event ):void
        {
            this.onMessage.call( this.callBackThis, e.target );
        }

        private onSocketOpen():void
        {
            console.log( "socket open" );
            this.openConnect.call( this.callBackThis, [] );
        }

        public onSocketError( e:egret.Event ):void
        {
            //egret.setTimeout( this.onTimeOut, this, 5000 );
            console.log( "socket error:" + e.type );
            // Statistics.leave();
        }

        public onSocketClose( e:egret.Event ):void
        {
            /*if( Param.getUrlDataByName( "isNew" ) == "1" )
            {
                Statistics.first_game();
            }*/
            //egret.setTimeout( this.onTimeOut, this, 5000 );
            console.log( "socket close" );
            // Statistics.leave();
        }

        private onTimeOut():void
        {
            if( !this.socket.connected )
            {
                egret.setTimeout( this.onTimeOut2, this, 15000 );
            }
        }
        private onTimeOut2():void
        {
            if( !this.socket.connected )
            {
                // DropDownPanel.instance.setText( "网络连不上，请换个网络再刷新试试" );
            }
        }
    }
}
