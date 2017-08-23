import {IncomingMessage} from "http";
import {Server} from "ws";
import {ArrDispose} from "../core/ArrDispose";
import {IItem} from "../core/IItem";


/*
处理socket
* */
export class SocketServer extends ArrDispose implements IItem {

    public getid(): number {
        return this._port;
    }

    private _port: number = 0;
    private _server: Server;

    constructor(pid: number) {
        super();
        this._port = pid;
        this._server = new Server({'port': this._port});
        this.startServer();
    }

    get port(): number {
        return this._port;
    }

    public startServer(): void {
        console.log('start server : ' + this._port);
        this._server.addListener('connection', this.onListen.bind(this));
    }

    protected onListen(client: WebSocket, request: IncomingMessage): void {
        console.log('connect') // window Main
        //var sk:SocketClient = new SocketClient(client);
        //this.addItem(sk);
    }

    public dispose(): void {
        super.dispose();
        if (null != this._server) {
            this._server.removeListener('connection', this.onListen.bind(this));
            try {
                this._server.close();
            } catch (e) {

            }
            this._server = <any>null;
        }
    }

}

