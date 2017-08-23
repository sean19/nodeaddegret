import {ArrDispose} from "../core/ArrDispose";
import {SocketServer} from "./SocketServer";
import {SocketServerMain} from "./SocketServerMain";


/*
处理socket
* */
export class SocketManager extends ArrDispose {
    private portid: number = 8085;
    private portid_main: number = 7000;
    private server_main: SocketServerMain;

    public initServerMain(): void {
        this.server_main = new SocketServerMain(this.portid_main);
    }

    public stopServerMain(): void {
        if (this.server_main != null) {
            this.server_main.dispose();
            this.server_main = <any>null;
        }
    }

    public addServer(): void {
        this.portid++;
        this.addItem(new SocketServer(this.portid));
    }

    protected clear(): void {
        this.stopServerMain();
    }
}

