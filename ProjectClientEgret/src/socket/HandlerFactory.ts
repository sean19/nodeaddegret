
module texas
{
    export class HandlerFactory
{
    public  getHandler(socketType:number,cmdtype:number):HandlerBase
    {
        var hm:HandlerBase;
        switch (socketType)
        {
            case SocketType.Socket_User:
                hm= this.getUserHandler(cmdtype);
                break;
                case SocketType.Socket_Game:
                break;
        }
        hm.socketType = socketType;
        return hm;
    }
    public getUserHandler(cmdType:number):HandlerBase
    {
        var hm:HandlerBase;
        switch (cmdType)
        {
            case CmdTypeUser.LOGIN:
                hm = new LoginHandler();
                break;
            case SocketType.Socket_Game:
                break;
        }
        return hm;
    }
}
}