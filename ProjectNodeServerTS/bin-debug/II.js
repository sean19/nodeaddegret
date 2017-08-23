"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketManager_1 = require("./socket/SocketManager");
const ProtoManager_1 = require("./ProtoManager");
class II {
}
II.socketManager = new SocketManager_1.SocketManager();
II.protoManager = new ProtoManager_1.ProtoManager();
exports.II = II;
//# sourceMappingURL=II.js.map