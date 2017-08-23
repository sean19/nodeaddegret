"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketClient = (function () {
    function SocketClient(server) {
        this._id = 0;
        this._client_name = "";
        this._client_id = 0;
        this._is_alive = false;
        this._socket = server;
        this.initEvn();
    }
    Object.defineProperty(SocketClient.prototype, "client_name", {
        get: function () {
            return this._client_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SocketClient.prototype, "client_id", {
        get: function () {
            return this._client_id;
        },
        enumerable: true,
        configurable: true
    });
    SocketClient.prototype.getid = function () {
        return this._id;
    };
    SocketClient.prototype.dispose = function () {
        this.clear();
        this.removeEvn();
    };
    SocketClient.prototype.clear = function () {
    };
    SocketClient.prototype.initEvn = function () {
        if (this._socket != null) {
            this._socket.addEventListener('message', this.onmessage.bind(this));
            this._is_alive = true;
        }
    };
    SocketClient.prototype.onmessage = function (msg) {
        console.log(msg);
    };
    SocketClient.prototype.removeEvn = function () {
        if (this._socket) {
            this._socket.removeEventListener('message', this.onmessage.bind(this));
            this._is_alive = false;
        }
        this._is_alive = false;
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;
