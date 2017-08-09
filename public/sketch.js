var socket;
var wsUri = "ws://localhost:8080//";
// var output;
function setup() {
	// createCanvas(400, 400)
	// websocket = new WebSocket(wsUri);
	// console.log(websocket)
	// websocket.onopen = function(evt) {
	// 	onOpen(evt)
	// };
	// // websocket.onclose = function(evt) {
	// // 	onClose(evt)
	// // };
	// websocket.onmessage = function(evt) {
	// 	onMessage(evt)
	// };
	// websocket.onerror = function(evt) {
	// 	onError(evt)
	// }
	socket = io.connect('http://localhost:8080');
	socket.on('mouse', newDrawing)
}

// function onOpen(evt) {
// 	console.log("CONNECTED");
// 	// doSend("WebSocket rocks");
// }
//
// function onClose(evt) {
// 	// writeToScreen("DISCONNECTED");
// }
//
// function onMessage(evt) {
// 	// writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
// 	// websocket.close();
// }
//
// function onError(evt) {
// 	// writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
// }
//
// function doSend(message) {
// 	console.log("SENT: " + message);
// 	websocket.send(message);
// }

function draw() {}


function mouseDragged() {
	var data = {
		x: mouseX,
		y: mouseY
	}
	// data.push(mouseX)
	// data.push(mouseY)

	socket.emit('mouse', data)
	ellipse(mouseX, mouseY, 36, 36)
	// console.log(data)
	// websocket.send(JSON.stringify(data));
	// console.log(JSON.stringify(data))

}

function newDrawing(data) {
	fill(255, 0, 0)
	ellipse(data.x, data.y, 20, 20)
}
