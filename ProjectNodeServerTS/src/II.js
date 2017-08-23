"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketManager_1 = require("./socket/SocketManager");
var II = (function () {
    function II() {
    }
    return II;
}());
II.socketManager = new SocketManager_1.SocketManager();
exports.II = II;
