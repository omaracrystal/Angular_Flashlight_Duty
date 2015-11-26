var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Beer API' });
// });



var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(5000, function(){
  console.log('listening on *:5000');
});

// module.exports = router;
