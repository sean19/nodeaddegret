
import SocketType = texas.SocketType;
import SocketInfo = texas.SocketInfo;
import CmdTypeUser = texas.CmdTypeUser;

class MainUI extends egret.DisplayObjectContainer{
	protected arr_txt:egret.TextField[] = [];
	public constructor() {
		super();
		this.initBtn();
	}
	protected initBtn():void
	{
        this.addtxt(0,0,"连接",egret.TextFieldType.DYNAMIC,1);
        this.addtxt(200,100,"账号：",egret.TextFieldType.DYNAMIC,0);
		this.addtxt(300,100,"...",egret.TextFieldType.INPUT,0);
        this.addtxt(200,150,"密码：",egret.TextFieldType.DYNAMIC,0);
		this.addtxt(300,150,"...",egret.TextFieldType.INPUT,0);
		this.addtxt(250,200,"登录",egret.TextFieldType.DYNAMIC,1);
		this.addtxt(100,150,"连接中",egret.TextFieldType.DYNAMIC,0);

        this.showConnect();
		this.addEvent();
    }
    protected addEvent():void{
		II.event_center.addCallBack(EventEnum.Socket_connected, this.onConnect,this);
		II.event_center.addCallBack(EventEnum.Socket_login_result, this.onLogin,this);
		
	}
	protected onLogin(msg:any):void{
		this.showTxt(6);
		if(msg.result=="1")
		{
			this.arr_txt[6].text=msg.userName;
		}else{
			this.arr_txt[6].text="登录失败";
		}
	}
	protected showTxt(idx:number):void
	{
		var txt:egret.TextField = this.arr_txt[idx];
		this.addChild(txt);
	}
	protected hideTxt(idx:number):void{
		var txt:egret.TextField = this.arr_txt[idx];
		if(this.contains(txt))
		{
			this.removeChild(txt);
		}
	}

	protected addtxt(xps:number,yps:number,info:string,ty:string,evt:number=0):void{
        var txt:egret.TextField = new egret.TextField();
		txt.type = ty;
        this.arr_txt.push(txt);
		txt.inputType = egret.TextFieldInputType.TEXT;
		txt.x = xps;
		txt.y = yps;
        txt.text = info;
		if(evt == 1)
		{
			txt.textColor = 0x00ff00;
			txt.touchEnabled = true;
        	txt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this);
		}
        
	}
	protected showConnect():void
	{
		var txt:egret.TextField = this.arr_txt[0];
		this.addChild(txt);
	}
	protected onConnect():void
	{
        this.showTxt(1);
		this.showTxt(2);
		this.showTxt(3);
		this.showTxt(4);
		this.showTxt(5);
		
    }
	protected onTap(e:egret.TouchEvent):void{
		switch (e.target.text)
		{
            case "连接":
			this.hideTxt(0);
                var socketinfo:SocketInfo = new SocketInfo(SocketType.Socket_User,"127.0.0.1",7000,"");
                II.sk.addSocketClient(socketinfo).connect();
                break;
            case "登录":
			this.hideTxt(1);
			this.hideTxt(2);
			this.hideTxt(3);
			this.hideTxt(4);
			this.hideTxt(5);
			this.showTxt(6);
			
				var msg:any = new Object();
				msg.name = this.arr_txt[2].text;
				msg.pass = this.arr_txt[4].text;
				
            	II.handlerFactory .getHandler(SocketType.Socket_User,CmdTypeUser.LOGIN).sendMsg(msg);
                break;
		}

	}
}