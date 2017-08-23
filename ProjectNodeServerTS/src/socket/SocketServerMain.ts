/*
处理socket
* */
import {IncomingMessage} from "http";
import {SocketServer} from "./SocketServer";
import {SocketClinetMain} from "./SocketClinetMain";

export class SocketServerMain extends SocketServer {
    constructor(pid: number) {
        super(pid);
    }

    protected onListen(client: WebSocket, request: IncomingMessage): void {
        console.log('start socketServerMain') // window Main
        this.addItem(new SocketClinetMain(client));
    }

}
