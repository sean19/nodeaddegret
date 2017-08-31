module texas
{

	export class SocketClient implements IItem
	{
		protected _socket_info:SocketInfo ;
        /**webSocket 连接器*/
        private _socket_Connector:SocketConnector;
		public constructor(socketInfo:SocketInfo)
		{
			this._socket_info = socketInfo;
			II.skh.addManager(socketInfo.socket_type);
		}
		public connect(  )
		{
			this._socket_Connector = new SocketConnector(  this._socket_info.socket_port, this._socket_info.socket_ip, this._socket_info.socket_path,this.onConnect,this.onMessage,this );
			this._socket_Connector.connect( );
		}
		protected onConnect():void
		{
			console.log("on connect");
		}
		protected onMessage(sk:egret.WebSocket):void
		{
			var byte:egret.ByteArray = new egret.ByteArray();
			sk.readBytes(byte);
			var pkg:SocketPackage = new SocketPackage(-1);
			pkg.readPBytes(byte);
			II.skh.getHandler(this._socket_info.socket_type,pkg.cmdType).execute(pkg);
            //var pkg:Package = new Package();
           // pkg.readPkg( Util.string2ArrayBuffer( e.target.readUTF() ) );
			/**
            var handler:IHandler = this._handler_manager.gethandler(pkg.getCmdType());
            if( handler )
                handler.execute( pkg );
            else
                console.log( "cmd handler is null 主协议ID:"+ pkg.getCmdType());
				 */
		}

		public reConnect(  )
		{
			this._socket_Connector.connect( );
		}


		public sendSocketPsk(pkg:SocketPackage):void
		{
			var type:number = pkg.cmdType;
            /*if( CmdString.CmdType[ type ] )
            {
                console.log( "发送：cmdType:" + type + ";" + CmdString.CmdType[ type ] );
            }*/
			 this._socket_Connector.sendData(pkg.toByteArray());
		}
		
        public getid():number
		{
			return this._socket_info.socket_type;
		}
        public dispose():void
		{
			this.clear();
		}
		protected clear():void
		{
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
		}
	}
}