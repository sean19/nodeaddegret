"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketClient {
    constructor(server) {
        this._id = 0;
        this._client_name = "";
        this._client_id = 0;
        this._is_alive = false;
        this._socket = server;
        this.initEvn();
    }
    get client_name() {
        return this._client_name;
    }
    get client_id() {
        return this._client_id;
    }
    getid() {
        return this._id;
    }
    dispose() {
        this.clear();
        this.removeEvn();
    }
    clear() {
    }
    initEvn() {
        if (this._socket != null) {
            this._socket.addEventListener('message', this.onmessage.bind(this));
            this._is_alive = true;
        }
    }
    onmessage(msg) {
        console.log(msg.data);
    }
    removeEvn() {
        if (this._socket) {
            this._socket.removeEventListener('message', this.onmessage.bind(this));
            this._is_alive = false;
        }
        this._is_alive = false;
    }
}
exports.SocketClient = SocketClient;
//# sourceMappingURL=SocketClient.js.map