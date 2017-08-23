"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var SocketServer_1 = require("./SocketServer");
var ArrDispose_1 = require("../core/ArrDispose");
var SocketManager = (function (_super) {
    __extends(SocketManager, _super);
    function SocketManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.portid = 8085;
        return _this;
    }
    SocketManager.prototype.addServer = function () {
        this.portid++;
        this.addItem(new SocketServer_1.SocketServer(this.portid));
    };
    return SocketManager;
}(ArrDispose_1.ArrDispose));
exports.SocketManager = SocketManager;
