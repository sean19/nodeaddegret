var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.initBtn();
        return _this;
    }
    MainUI.prototype.initBtn = function () {
        this._txt_add = new egret.TextField();
        this.addChild(this._txt_add);
        this._txt_add.text = "添加";
        this._txt_add.touchEnabled = true;
        this._txt_add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onadd, this);
    };
    MainUI.prototype.onadd = function (e) {
        II.sk.startConnet();
    };
    return MainUI;
}(egret.DisplayObjectContainer));
