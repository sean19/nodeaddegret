module texas
{
    export class LoginHandler extends HandlerBase
    {
        protected get class_name():string{
        return "user_login";
    }
        /**是否已经登录过，sockect重连*/
        public static sockectReconnect:boolean = false;
        public execute( pkg:SocketPackage )
        {
            
			var msg = this.getmsg(pkg);
			
        } 
        public sendMsg():void
        {
            var proto: string = RES.getRes("Login_proto");               //加载PB数据结果定义字符
            var builder:any = dcodeIO.ProtoBuf.loadProto(proto,null);          //解析PB数据定义文件，生成PB对象构造器 (loadProtoFile用这个可以代替RES的功能，自己选）
            var clazz:any = builder.build("user_login");                      //构建一个PB数据结构（messageName为PB中定义的结果名）
            var data:any = new clazz();
            //创建一个数据结构
            //data.set("id",1);//可以使用data.id=1;
            data.userId=500;//赋值
            data.userName = "sean1";

            //转成字节
            var btyearray:ArrayBuffer = data.toBuffer();
            var len:number = btyearray.byteLength;
            var eb:egret.ByteArray = new egret.ByteArray(btyearray);

            var socketPkg:SocketPackage = new SocketPackage(CmdTypeUser.LOGIN);
            socketPkg.putBytes(eb);
            this.myClient.sendSocketPsk(socketPkg);

            // var pkg:Package = Package.createPkg(CmdTypeUser.LOGIN);
            // pkg.putBytes(eb);
            // this.myClient.sendPkg(pkg);
        }
    }
}