ProtoBuf = require("protobufjs");
ProtoBuf.load("testprotobuf/Login.proto", function(err, root) {
    if (err) throw err;


    // Obtain a message type
    var user_login = root.lookup("user_login");


    // Create a new message
    var dataTable= {
        userId:1,
        userName:"peter"
    }

    var message = user_login.create(dataTable);

    console.log(message.userName) //取值

    // Encode a message to an Uint8Array (browser) or Buffer (node)
    var buffer = user_login.encode(message).finish();

    // ... do something with buffer

    // Or, encode a plain object
    var buffer = user_login.encode({ userId: 1,userName:"bob" }).finish();
    // ... do something with buffer

    // Decode an Uint8Array (browser) or Buffer (node) to a message
    var message = user_login.decode(buffer);
    // ... do something with message

});