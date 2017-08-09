var express = require('express');
var socket = require('socket.io');

var app = express();
var server = app.listen(process.env.PORT || 8080, listen);

function listen() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('listening at http://' + host + ':' + port);
}

app.use(express.static('public'));


//socket portion
var io = socket(server);

//callback run when have an individual connection
io.sockets.on('connection', function(socket) {
	console.log("new connection:", socket.id);

	socket.on('mouse', function(data) {
		socket.broadcast.emit('mouse', data); //emit to other clients except for sender
		// io.sockets.emit('mouse', data); //emit to all clients
		// console.log(data);
	})

	socket.on('disconnect', function(e) {
		console.log('client disconnected: ', e);
	})
})
