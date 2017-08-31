module texas
{
 export class SocketInfo
{
    constructor(socketType:number,ip:string,port:number,path:string)
    {
        this.socket_ip = ip;
        this.socket_port = port;
        this.socket_path = path;
        this.socket_type = socketType;

    }
    public socket_ip:string;
    public socket_port:number;
    public socket_path:string;
    public socket_type:number;
}
}