var http = require('http');
var app = http.createServer(function (req, res) {
}).listen(2013);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (socket){

  function log(){
    var array = [">>> Message from server: "];
    for (var i = 0; i < arguments.length; i++) {
      array.push(arguments[i]);
    }
    socket.emit('log', array);
  }

  socket.on('message', function (message) {
    log('Got message:', message);
    // for a real app, would be room only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function (room) {
    var numClients = io.sockets.clients(room).length;

    if(numClients == 0){
      socket.join(room);
      socket.emit('created');
    } else if (numClients == 1){
      socket.join(room);
      socket.emit('joined');
    } else {
      socket.emit('full');
    }
  })


});
