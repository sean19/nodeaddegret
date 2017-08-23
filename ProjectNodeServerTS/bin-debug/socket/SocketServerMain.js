"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketServer_1 = require("./SocketServer");
const SocketClinetMain_1 = require("./SocketClinetMain");
class SocketServerMain extends SocketServer_1.SocketServer {
    constructor(pid) {
        super(pid);
    }
    onListen(client, request) {
        console.log('start socketServerMain'); // window Main
        this.addItem(new SocketClinetMain_1.SocketClinetMain(client));
    }
}
exports.SocketServerMain = SocketServerMain;
//# sourceMappingURL=SocketServerMain.js.map