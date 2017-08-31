
import HandlerBase = texas.HandlerBase;
import IHandler = texas.IHandler;
module texas
{
export class HandlerManagerBase extends ArrDispose implements IItem
{
    public  getid():number
    {
        return 0;
    }
    constructor()
    {
        super();
        this.initHandler();
    }
    /**
     * 初始化句柄 格式如下
     * this.addHandler(CmdType.LOGIN,new LoginHandler);
     */
    protected initHandler():void
    {
        throw new Error("没初始化控制器");
    }
    protected addHandler(cmdType:number,handlerBase:HandlerBase):void
    {
        handlerBase.socketType = this.getid();
        this.arr[cmdType] = handlerBase;
    }
    public gethandler(cmdType:number):IHandler
    {
        return <HandlerBase>this.arr[cmdType];
    }
}
}