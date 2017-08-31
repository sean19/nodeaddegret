
module texas
{
    export class HManagerFactory
{
    public static getHandlerManager(socketType:number):HandlerManagerBase
    {
        var hm:HandlerManagerBase;
        switch (socketType)
        {
            case SocketType.Socket_User:
                hm = new HandlerMangerUser();
                break;
                case SocketType.Socket_Game:
                hm = new HandlerManagerGame();
                break;
        }
        return hm;
    }
    
}
}