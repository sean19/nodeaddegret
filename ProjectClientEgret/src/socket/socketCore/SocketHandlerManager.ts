module texas {
    export class SocketHandlerManager extends ArrDispose {
        public addManager(socketType: number): void {
            if (this.getItem(socketType) != null) return;
            var skm: HandlerManagerBase = HManagerFactory.getHandlerManager(socketType);
            if(skm ==null) return;
            this.addItem(skm);
        }

        public getHandler(SocketType: number, cmdType: number): IHandler {
            var skm: HandlerManagerBase = <HandlerManagerBase>this.getItem(SocketType);
            return skm.gethandler(cmdType);
        }
    }
}