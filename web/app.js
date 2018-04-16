//var socket = io.connect('http://192.168.42.1:8080');
var socket = io.connect('http://edison.local:8080');

socket.on('connect', function() {
  socket.emit('hello');
});

socket.on('left', function() {
  socket.emit('hello');
});

function moveForward(){
	var command = "forward";
    socket.emit('forward');
}

function turnRight(){
	var command = "right";
    socket.emit('right');
}

function turnLeft(){
	var command = "left";
    socket.emit('left');
}

function moveReverse(){
	var command = "reverse";
    socket.emit('reverse');
}

function stop(){
	var command = "SIGINT";
    socket.emit('SIGINT');
}

function Action1(){
	var command = "1stAction";
	socket.emit('Act1');
}

function Action2(){
	var command = "2ndAction";
	socket.emit('Act2');
}

function Action3(){
	var command = "3rdAction";
	socket.emit('Act3');
}

function Action4(){
	var command = "4thAction";
	socket.emit('Act4');
}



document.getElementById('forward').onclick = moveForward;
document.getElementById('right').onclick = turnRight;
document.getElementById('left').onclick = turnLeft;
document.getElementById('reverse').onclick = moveReverse;
document.getElementById('stop').onclick = stop;
document.getElementById('Act1').onclick = Action1;
document.getElementById('Act2').onclick = Action2;
document.getElementById('Act3').onclick = Action3;
document.getElementById('Act4').onclick = Action4;
