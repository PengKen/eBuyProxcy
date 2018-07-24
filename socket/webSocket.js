const server = require('http').createServer();

const io = require('socket.io')(server, {
  // path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});
// middleware
var sockets = []
io.use(function(socket, next){
  var token = socket.handshake.query.token;
  console.log("token:" + token)
   next()
});
 io.sockets.on('connection', function (socket) {
   socket.token = 1;
   sockets.push(socket)
   socket.userId = 'aaa'
   socket.emit('message', {hello: socket.userId});
   setTimeout(function () {
     socket.disconnect(true);
   },5000)
  })

server.listen(3001);
