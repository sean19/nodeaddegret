
class MainUI extends egret.DisplayObjectContainer{
	private _txt_add:egret.TextField ;
	public constructor() {
		super();
		this.initBtn();
	}
	protected initBtn():void
	{
		this._txt_add = new egret.TextField();
		this.addChild(this._txt_add);
		this._txt_add.text = "添加";
		this._txt_add.touchEnabled = true;
		this._txt_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onadd,this);
	}
	protected onadd(e:egret.TouchEvent):void{
        	II.sk.startConnet();
			
			
	}
}