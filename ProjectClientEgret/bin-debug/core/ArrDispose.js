var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ArrDispose = (function () {
    function ArrDispose() {
        this.arr = [];
    }
    ArrDispose.prototype.getItemList = function () {
        return this.arr;
    };
    ArrDispose.prototype.getItem = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            if (item.getid() == id) {
                return item;
            }
        }
        return null;
    };
    ArrDispose.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    ArrDispose.prototype.removeItem = function (id) {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            if (item.getid() == id) {
                this.arr.splice(i, 1);
                return;
            }
        }
    };
    ArrDispose.prototype.clearItems = function () {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            item.dispose();
        }
        this.arr = [];
    };
    ArrDispose.prototype.dispose = function () {
        this.clear();
        this.clearItems();
    };
    ArrDispose.prototype.clear = function () {
        throw "has not clear";
    };
    return ArrDispose;
}());
__reflect(ArrDispose.prototype, "ArrDispose");
//# sourceMappingURL=ArrDispose.js.map