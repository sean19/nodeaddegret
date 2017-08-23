
var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({ port: 8185 });

var II =require("./SI");

II.pm.init();

wss.on('connection', function (ws) {
    var l = new Package();
    l.idd;
    ws.on('message', function (message) {
        var msg = II.pm.readMessage(message);
        console.log( message );
    });
    // 退出聊天
    ws.on('close', function(close) {
        try{

        }catch(e){

        }
    });
});





function  arrayBuffer2String( byteArray )
{
    var str = "";
    var dataView = new DataView(byteArray);
    var length = byteArray.length/2;
    for( var i = 0; i < length; i++ )
    {
        var tmp = dataView.getUint8( i ).toString(16);
        if( tmp.length == 1 )
        {
            tmp = "0" + tmp;
        }
        str += tmp;
    }
    return str;
}
function  string2dataView( str )
{
    var length = str.length;
    var byteArray =  new ArrayBuffer( length / 2 ) ;
    var dataView = new DataView(byteArray);
    for( var i = 0; i < length; i += 2 )
    {
        dataView.setUint8( i / 2, parseInt( str.substr( i, 2 ), 16 ) );
    }
    console.log( dataView.getInt8());
    console.log( dataView.getInt8());
    console.log( dataView.getInt32());
    console.log( dataView.getInt16());
    console.log( dataView.toSource());

    return dataView;
}
function ff(byteArray)
{
    var length = byteArray.length;
    var dataView =  new DataView(byteArray);
    for( var i = 0; i < length; i += 2 )
    {
        dataView.setUint8( i / 2, parseInt( str.substr( i, 2 ), 16 ) );
    }

}
