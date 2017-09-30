module texas
{
	export interface IHandler
	{
		getCmdType():number;
		sendMsg(msg:any):void;
		execute( pkg:SocketPackage ): void;
	}
}