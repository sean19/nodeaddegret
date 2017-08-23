"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_login_1 = require("../protots/User_login");
class ProtoManager {
    init() {
        //ProtoBuf.load("./protos/Login.proto", this.loadok);
    }
    loadok(err, root) {
        console.log('ok');
        if (err)
            throw err;
        if (root == null) {
            return;
        }
        /**
        // example code
        var lg:User_login  = User_login.create();// = root.lookupType("awesomepackage.AwesomeMessage");
        User_login.decode()
        let message = AwesomeMessage.create({ awesomeField: "hello" });
        console.log(`message = ${JSON.stringify(message)}`);

        let buffer = AwesomeMessage.encode(message).finish();
        console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

        let decoded = AwesomeMessage.decode(buffer);
        console.log(`decoded = ${JSON.stringify(decoded)}`);
         */
    }
    decode(reader, length) {
        this.user_login = User_login_1.User_login.decode(reader, length);
    }
}
exports.ProtoManager = ProtoManager;
//# sourceMappingURL=ProtoManager.js.map