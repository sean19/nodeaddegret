var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by jinghongwei on 29/11/2016.
 */
var EventCenter = (function () {
    function EventCenter() {
        this._arr_events = [];
    }
    EventCenter.prototype.addCallBack = function (evt, fc, tag) {
        var arr = this.getUnit2(evt, fc, tag);
        if (arr.length == 0) {
            var unit = new EventUnit(evt, fc, tag);
            this._arr_events.push(unit);
        }
    };
    EventCenter.prototype.removeCallBack = function (evt, fc, tag) {
        var arr = this.getUnit2(evt, fc, tag);
        for (var i = 0; i < arr.length; i++) {
            var unit = arr[i];
            this._arr_events.splice(this._arr_events.indexOf(unit), 1);
            unit.disose();
        }
    };
    EventCenter.prototype.callEvent = function (evt, arrparam) {
        if (arrparam === void 0) { arrparam = null; }
        var arr = this.getUnit(evt);
        for (var i = 0; i < arr.length; i++) {
            var unit = arr[i];
            unit.callFunc(arrparam);
        }
    };
    EventCenter.prototype.getUnit = function (evt) {
        var arr = [];
        var len = this._arr_events.length;
        for (var i = 0; i < len; i++) {
            var unit = this._arr_events[i];
            if (unit._evt == evt) {
                arr.push(unit);
            }
        }
        return arr;
    };
    EventCenter.prototype.getUnit2 = function (evt, fc, tag) {
        var arr = [];
        var len = this._arr_events.length;
        for (var i = 0; i < len; i++) {
            var unit = this._arr_events[i];
            if (unit._evt == evt && unit._fc == fc && unit._tag == tag) {
                arr.push(unit);
            }
        }
        return arr;
    };
    return EventCenter;
}());
__reflect(EventCenter.prototype, "EventCenter");
//# sourceMappingURL=EventCenter.js.map