var socket;

function setup() {

	createCanvas(windowWidth, windowHeight);
	socket = io.connect('http://localhost:8080');
	socket.on('mouse', newDrawing); //listen to server

}


function draw() {}


function mouseDragged() {

	var data = {
		x: mouseX,
		y: mouseY
	};

	sendData(data);

	fill(255);
	ellipse(mouseX, mouseY, 36, 36);

}

function newDrawing(data) {
	console.log("get data from server: ", data)
	fill(255, 0, 0);
	ellipse(data.x, data.y, 20, 20);
}

function sendData(data) {
	console.log("send data to server: ", data);
	socket.emit('mouse', data) //emit to server
}
