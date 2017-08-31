module texas
{
	export interface IHandler
	{
		getCmdType():number;
		sendMsg():void;
		execute( pkg:SocketPackage ): void;
	}
}