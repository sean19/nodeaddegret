module texas {
    export class HandlerMangerUser extends HandlerManagerBase{
        public getid():number
        {
            return SocketType.Socket_User;
        }
        protected initHandler():void
        {
           this.addHandler(CmdTypeUser.LOGIN,new LoginHandler)
        }
    }
}