"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrDispose {
    constructor() {
        this.arr = [];
    }
    getItemList() {
        return this.arr;
    }
    getItem(id) {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            if (item.getid() == id) {
                return item;
            }
        }
        return null;
    }
    addItem(item) {
        this.arr.push(item);
    }
    removeItem(id) {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            if (item.getid() == id) {
                this.arr.splice(i, 1);
                return;
            }
        }
    }
    clearItems() {
        for (var i = 0; i < this.arr.length; i++) {
            var item = this.arr[i];
            item.dispose();
        }
        this.arr = [];
    }
    dispose() {
        this.clear();
        this.clearItems();
    }
    clear() {
        throw "has not clear";
    }
}
exports.ArrDispose = ArrDispose;
//# sourceMappingURL=ArrDispose.js.map