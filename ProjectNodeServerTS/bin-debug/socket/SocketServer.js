"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ArrDispose_1 = require("../core/ArrDispose");
/*
处理socket
* */
class SocketServer extends ArrDispose_1.ArrDispose {
    constructor(pid) {
        super();
        this._port = 0;
        this._port = pid;
        this._server = new ws_1.Server({ 'port': this._port });
        this.startServer();
    }
    getid() {
        return this._port;
    }
    get port() {
        return this._port;
    }
    startServer() {
        console.log('start server : ' + this._port);
        this._server.addListener('connection', this.onListen.bind(this));
    }
    onListen(client, request) {
        console.log('connect'); // window Main
        //var sk:SocketClient = new SocketClient(client);
        //this.addItem(sk);
    }
    dispose() {
        super.dispose();
        if (null != this._server) {
            this._server.removeListener('connection', this.onListen.bind(this));
            try {
                this._server.close();
            }
            catch (e) {
            }
            this._server = null;
        }
    }
}
exports.SocketServer = SocketServer;
//# sourceMappingURL=SocketServer.js.map