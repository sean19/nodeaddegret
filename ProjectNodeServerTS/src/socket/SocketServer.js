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
var ws_1 = require("ws");
var SocketClient_1 = require("./SocketClient");
var ArrDispose_1 = require("../core/ArrDispose");
var SocketServer = (function (_super) {
    __extends(SocketServer, _super);
    function SocketServer(pid) {
        var _this = _super.call(this) || this;
        _this._port = 0;
        _this._port = pid;
        _this._server = new ws_1.Server({ 'port': _this._port });
        _this.startServer();
        return _this;
    }
    SocketServer.prototype.getid = function () {
        return this._port;
    };
    Object.defineProperty(SocketServer.prototype, "port", {
        get: function () {
            return this._port;
        },
        enumerable: true,
        configurable: true
    });
    SocketServer.prototype.startServer = function () {
        console.log('start server : ' + this._port);
        this._server.addListener('connection', this.onListen.bind(this));
    };
    SocketServer.prototype.onListen = function (client, request) {
        console.log('connect'); // window Main
        this.addItem(new SocketClient_1.SocketClient(client));
    };
    SocketServer.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (null != this._server) {
            this._server.removeListener('connection', this.onListen.bind(this));
            try {
                this._server.close();
            }
            catch (e) {
            }
            this._server = null;
        }
    };
    return SocketServer;
}(ArrDispose_1.ArrDispose));
exports.SocketServer = SocketServer;
