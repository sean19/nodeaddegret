class SocketPackage {
	private _cmd_type:number ;
	private _byteArray:egret.ByteArray;
	private _plat_form:number;
	private _info_length:number = 0;

	public constructor(cmdtype:number = -1) {
		if(cmdtype!=-1)
		{
			this._byteArray = new egret.ByteArray();
			this.putByte( 0 );
			this.putByte( 0 );
			this.putInt( 0 );//自增ID保留4个byte
			this.putShort( cmdtype );
			this._cmd_type = cmdtype;
		}
		
	}
	public getProtoBuf():egret.ByteArray
	{
		this._info_length = this._byteArray.readShort();
		var arrays = new egret.ByteArray();
		this._byteArray.readBytes( arrays, 0, this._info_length );
		return arrays;
	}
	public readPBytes(byteArray:egret.ByteArray):void{
		this._byteArray = byteArray
		var a:number = this._byteArray.readByte();
		var b:number = this._byteArray.readByte();
		var c:number = this._byteArray.readInt();
		this._cmd_type = this._byteArray.readShort();
		
	}
	public set cmdType(num:number)
	{
		this._cmd_type = num;
	}
	public get cmdType():number
	{
		return this._cmd_type;
	}
	public putInt( int:number )
		{
			this._byteArray.writeInt( int );
		}
	public putByte( b:number )
	{
		this._byteArray.writeByte( b );
	}
	public putShort( s:number )
	{
		this._byteArray.writeShort( s );
	}
	public putBytes( data:egret.ByteArray )
	{
		this._info_length = data.length;
		this.putShort(this._info_length);
		this._byteArray.writeBytes( data, 0, this._info_length );
	}
	public toByteArray():egret.ByteArray
	{
		return this._byteArray;
	}
	
}