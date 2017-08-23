"use strict";
/*
处理socket
* */
Object.defineProperty(exports, "__esModule", { value: true });
const SocketClient_1 = require("./SocketClient");
const II_1 = require("../II");
class SocketClinetMain extends SocketClient_1.SocketClient {
    constructor(server) {
        super(server);
    }
    onmessage(msg) {
        console.log(msg.data);
        II_1.II.protoManager.decode(msg.data);
    }
}
exports.SocketClinetMain = SocketClinetMain;
//# sourceMappingURL=SocketClinetMain.js.map