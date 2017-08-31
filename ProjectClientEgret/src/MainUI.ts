
import SocketType = texas.SocketType;
import SocketInfo = texas.SocketInfo;
import CmdTypeUser = texas.CmdTypeUser;

class MainUI extends egret.DisplayObjectContainer{
	public constructor() {
		super();
		this.initBtn();
	}
	protected initBtn():void
	{
        this.addbtn(0,"添加");
		this.addbtn(100,"发消息");

    }
	protected addbtn(xps:number,info:string):void{
        var txt:egret.TextField = new egret.TextField();
        this.addChild(txt);
		txt.x = xps;
        txt.text = info;
        txt.touchEnabled = true;
        txt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
	}
	protected onTap(e:egret.TouchEvent):void{
		switch (e.target.text)
		{
            case "添加":
                var socketinfo:SocketInfo = new SocketInfo(SocketType.Socket_User,"127.0.0.1",7001,"");
                II.sk.addSocketClient(socketinfo).connect();
                break;
            case "发消息":
            	II.skh.getHandler(SocketType.Socket_User,CmdTypeUser.LOGIN).sendMsg();
                break;
		}

	}
}