import {SocketServer} from "./socket/SocketServer";
import {II} from "./II";

class Main
{
    constructor(){
         II.socketManager.initServerMain();
        // for(var i:number = 0;i<100;i++)
        // {
        //     II.socketManager.addServer();


        // }
        // var uit:UIT = new UIT();
        // uit.startPort();
    }
}
var main:Main = new Main();