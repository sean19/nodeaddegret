var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketPackage = (function () {
    function SocketPackage(cmdtype) {
        if (cmdtype === void 0) { cmdtype = -1; }
        this._info_length = 0;
        if (cmdtype != -1) {
            this._byteArray = new egret.ByteArray();
            this.putByte(0);
            this.putByte(0);
            this.putInt(0); //自增ID保留4个byte
            this.putShort(cmdtype);
            this._cmd_type = cmdtype;
        }
    }
    SocketPackage.prototype.getProtoBuf = function () {
        this._info_length = this._byteArray.readShort();
        var arrays = new egret.ByteArray();
        this._byteArray.readBytes(arrays, 0, this._info_length);
        return arrays;
    };
    SocketPackage.prototype.readPBytes = function (byteArray) {
        this._byteArray = byteArray;
        var a = this._byteArray.readByte();
        var b = this._byteArray.readByte();
        var c = this._byteArray.readInt();
        this._cmd_type = this._byteArray.readShort();
    };
    Object.defineProperty(SocketPackage.prototype, "cmdType", {
        get: function () {
            return this._cmd_type;
        },
        set: function (num) {
            this._cmd_type = num;
        },
        enumerable: true,
        configurable: true
    });
    SocketPackage.prototype.putInt = function (int) {
        this._byteArray.writeInt(int);
    };
    SocketPackage.prototype.putByte = function (b) {
        this._byteArray.writeByte(b);
    };
    SocketPackage.prototype.putShort = function (s) {
        this._byteArray.writeShort(s);
    };
    SocketPackage.prototype.putBytes = function (data) {
        this._info_length = data.length;
        this.putShort(this._info_length);
        this._byteArray.writeBytes(data, 0, this._info_length);
    };
    SocketPackage.prototype.toByteArray = function () {
        return this._byteArray;
    };
    return SocketPackage;
}());
__reflect(SocketPackage.prototype, "SocketPackage");
//# sourceMappingURL=SocketPackage.js.map