var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by jinghongwei on 29/11/2016.
 */
var EventUnit = (function () {
    function EventUnit(evt, fc, tag) {
        this._evt = evt;
        this._fc = fc;
        this._tag = tag;
    }
    EventUnit.prototype.callFunc = function (arr) {
        if (arr === void 0) { arr = null; }
        this._fc.apply(this._tag, arr);
    };
    EventUnit.prototype.disose = function () {
        this._fc = null;
        this._tag = null;
    };
    return EventUnit;
}());
__reflect(EventUnit.prototype, "EventUnit");
//# sourceMappingURL=EventUnit.js.map