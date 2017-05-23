var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
	console.log('BrowserSource Online')
});

http.listen(3002, function(){
	console.log('listening on *:3002');
});