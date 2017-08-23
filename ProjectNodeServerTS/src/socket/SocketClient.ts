/*
处理socket
* */
import {IItem} from "../core/IItem";

export class SocketClient implements IItem
{
    private _id: number = 0;
    private _client_name: string = "";
    private _client_id: number = 0;
    private _is_alive: boolean = false;
    private _socket: WebSocket;

    public constructor(server: WebSocket) {
        this._socket = server;
        this.initEvn();
    }

    get client_name(): string {
        return this._client_name;
    }

    get client_id(): number {
        return this._client_id;
    }

    public getid(): number {
        return this._id;
    }

    public dispose(): void {
        this.clear();
        this.removeEvn();
    }

    protected clear(): void {

    }

    protected initEvn(): void {
        if (this._socket != null) {
            this._socket.addEventListener('message', this.onmessage.bind(this));
            this._is_alive = true;
        }
    }

    protected onmessage(msg: MessageEvent): void {
        console.log(msg.data);
    }

    protected removeEvn(): void {
        if (this._socket) {
            this._socket.removeEventListener('message', this.onmessage.bind(this));
            this._is_alive = false;
        }
        this._is_alive = false;

    }

}
