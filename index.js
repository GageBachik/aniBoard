var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', function(socket){
	console.log('RemoteSource Online')
	socket.on('animation', function(num, inQueue, from){
		console.log('animation', num, 'ran');
		io.emit('animation', num, inQueue, from);
	});
});

http.listen((process.env.PORT || 3200), function(){
	console.log('listening on env.Port');
});