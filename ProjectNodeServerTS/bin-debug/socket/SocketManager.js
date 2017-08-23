"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrDispose_1 = require("../core/ArrDispose");
const SocketServer_1 = require("./SocketServer");
const SocketServerMain_1 = require("./SocketServerMain");
/*
处理socket
* */
class SocketManager extends ArrDispose_1.ArrDispose {
    constructor() {
        super(...arguments);
        this.portid = 8085;
        this.portid_main = 7000;
    }
    initServerMain() {
        this.server_main = new SocketServerMain_1.SocketServerMain(this.portid_main);
    }
    stopServerMain() {
        if (this.server_main != null) {
            this.server_main.dispose();
            this.server_main = null;
        }
    }
    addServer() {
        this.portid++;
        this.addItem(new SocketServer_1.SocketServer(this.portid));
    }
    clear() {
        this.stopServerMain();
    }
}
exports.SocketManager = SocketManager;
//# sourceMappingURL=SocketManager.js.map