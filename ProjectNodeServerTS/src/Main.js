"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketServer_1 = require("./socket/SocketServer");
var Main = (function () {
    function Main() {
        // for(var i:number = 0;i<100;i++)
        // {
        //     II.socketManager.addServer();
        var server = new SocketServer_1.SocketServer(8085);
        server.startServer();
        // }
        // var uit:UIT = new UIT();
        // uit.startPort();
    }
    return Main;
}());
var main = new Main();
