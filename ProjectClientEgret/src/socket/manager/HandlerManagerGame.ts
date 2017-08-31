module texas {

export class HandlerManagerGame extends HandlerManagerBase{
	public getid():number
        {
            return SocketType.Socket_Game;
        }
        protected initHandler():void
        {
           this.addHandler(CmdTypeGame.LOGIN,new LoginHandler)
        }
}
}