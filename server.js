console.log("server.js is running");

var express = require('express');
var app = express();
var server = app.listen(8080);

// var WebSocketServer = require('websocket').server;
// var WebSocketClient = require('websocket').client;
// var WebSocketFrame = require('websocket').frame;
// var WebSocketRouter = require('websocket').router;
// var W3CWebSocket = require('websocket').w3cwebsocket;


app.use(express.static('public'));


var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	// io.to(socket.id).emit('connected', 'yeah!');
	console.log("new connection", socket.id);
	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		console.log(data);
	}
}


// const express = require('express');
// const http = require('http');
// const url = require('url');
// const WebSocket = require('ws');
//
// const app = express();
// app.use(express.static('public'));
//
// app.use(function(req, res) {
// 	res.send({
// 		msg: "hello"
// 	});
// });
//
// const server = http.createServer(app);
// const wss = new WebSocket.Server({
// 	server
// });
//
// wss.on('connection', function connection(ws, req) {
// 	// const location = url.parse(req.url, true);
// 	// You might use location.query.access_token to authenticate or share sessions
// 	// or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
// 	// console.log(req)
// 	ws.on('message', function incoming(message) {
// 		var a = JSON.parse(message);
// 		console.log()
// 		console.log('received: %s', a.x, a.y);
// 		// console.log(message.x, message.y)
// 		ws.send(message);
//
// 	});
//
// 	ws.send('something+10');
// });
//
// server.listen(8080, function listening() {
// 	console.log('Listening on %d', server.address().port);
// });
