
import ProtoBuf = require('protobufjs');
import {Root} from "protobufjs";
import {User_login} from "../protots/User_login";

export class ProtoManager
{
    private user_login:User_login;
    public init():void
    {
        //ProtoBuf.load("./protos/Login.proto", this.loadok);

    }
    protected loadok(err: (Error|null), root?: Root):void
    {
        console.log('ok');
        if (err)
            throw err;
        if(root == null)
        {
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
    public decode(reader: (ProtoBuf.Reader|Uint8Array), length?: number):void
    {
        this.user_login = User_login.decode(reader,length);
    }

}