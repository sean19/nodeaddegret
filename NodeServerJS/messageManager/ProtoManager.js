
var user_login;
ProtoBuf = require("protobufjs");
var handler = require("./messageManager/Handler");

function init()
{
    ProtoBuf.load("./messageManager/protos/Login.proto", function(err, root) {
        if (err) throw err;

        // Obtain a message type
        user_login = root.lookup("user_login");
    });
}


function readMessage(message)
{
    handler.handle(message);
    var msg = user_login.decode(message);
    return msg;
}





exports.readMessage = readMessage;
exports.init = init;