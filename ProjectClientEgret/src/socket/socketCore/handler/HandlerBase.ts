module texas
{
 export class HandlerBase implements IItem,IHandler{
    protected _socket_type:number;
    protected _cmd_type:number =0;
    protected get class_name():string{
        return "todd";
    }
    protected getmsg(pkg:SocketPackage):any
    {
        var bytes = pkg.getProtoBuf();
        var Builder = II.protobufMgr.getBuilder( this.class_name);
        var msg = Builder.decode( bytes[ "data" ].buffer );
        return msg;
    }
    public set socketType(socketType:number){
        this._socket_type = socketType;
    }
    protected get myClient():SocketClient
    {
        return II.sk.getClientById(this._socket_type);
    }
    public getid():number
    {
        return 0;
    }
    public dispose():void{

    }
    public getCmdType():number
    {
        return this._cmd_type;
    }
    public execute( pkg:SocketPackage ): void
    {

    }
    public sendMsg():void
    {

    }
}
}