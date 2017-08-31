module texas {

    export class SocketManager extends ArrDispose {
        protected ip: string = "127.0.0.1";
        protected port: number = 7000;

        public constructor() {
            super();
        }

        public addSocketClient(socketInfo: SocketInfo): SocketClient// socketType:number,ip:string,port:number,path:string):SocketClient
        {
            var socketClient: SocketClient = new SocketClient(socketInfo);//socketType,ip,port,path);
            this.addItem(socketClient);
            return socketClient;
        }

        public getClientById(socketType: number): SocketClient {
            for (var i: number = 0; i < this.arr.length; i++) {
                var socketClient: SocketClient = <SocketClient>this.arr[i];
                if (socketClient.getid() == socketType) {
                    return socketClient;
                }
            }
            return null;

        }
    }
}