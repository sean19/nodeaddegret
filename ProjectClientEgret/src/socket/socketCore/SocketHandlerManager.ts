module texas {
    export class SocketHandlerManager extends ArrDispose {
       

        public getHandler(SocketType: number, cmdType: number): IHandler {
            var skm: HandlerManagerBase = <HandlerManagerBase>this.getItem(SocketType);
            return skm.gethandler(cmdType);
        }
    }
}