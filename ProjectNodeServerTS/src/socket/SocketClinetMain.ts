/*
处理socket
* */

import {SocketClient} from "./SocketClient";
import {II} from "../II";

export class SocketClinetMain extends SocketClient {
    constructor(server: WebSocket) {
        super(server);


    }

    protected onmessage(msg: MessageEvent): void {
        console.log(msg.data);
        II.protoManager.decode(msg.data);
    }
}
