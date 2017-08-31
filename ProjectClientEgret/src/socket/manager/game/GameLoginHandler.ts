module texas
{
    export class GameLoginHandler extends HandlerBase
    {
        /**是否已经登录过，sockect重连*/
        public static sockectReconnect:boolean = false;
        public execute( pkg:SocketPackage )
        {

        }
        public sendMsg():void
        {
            // var pkg:Package = new Package();
            // this.myClient.sendPkg(pkg);
        }
    }
}