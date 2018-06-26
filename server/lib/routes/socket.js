// Map GPIO block pins to MRAA pin numbers
// Reference: https://learn.sparkfun.com/tutorials/installing-libmraa-on-ubilinux-for-edison

"use strict";

const mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion());
let uart = new mraa.Uart(0);

console.log("Note: connect Rx and Tx of UART with a wire before use");

function sleep(delay) {
    delay += new Date().getTime();
    while (new Date() < delay) {}
}

console.log("Set UART parameters");

uart.setBaudRate(9600);
uart.setMode(8, 0, 1);
uart.setFlowcontrol(false, false);
sleep(200);

function up2Down(){
    console.log("UP AND DOWN ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("4GC1\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    /*
    uart.writeStr("#1P1740#2P967#3P1520#4P1540#5P1210#6P1810#7P1456#8P1567#25P1389#26P1456#27P1210#28P1989#29P1430#30P1456#31P567#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Second write-read circle:");
    uart.writeStr("#1P1740#2P1678#3P1520#4P1567#5P1210#6P2120#7P1100#8P1567#25P1389#26P1789#27P900#28P1989#29P1389#30P1456#31P1167#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Third write-read circle:");
    uart.writeStr("#1P1740#2P1830#3P1520#4P1540#5P1078#6P2256#7P1078#8P1500#25P1389#26P1830#27P740#28P2140#29P1430#30P1456#31P1389#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Fourth write-read circle:");
    uart.writeStr("#1P1740#2P1940#3P1520#4P1540#5P1078#6P2389#7P989#8P1500#25P1389#26P1940#27P589#28P2140#29P1430#30P1456#31P1540#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    */
}

function goForwad(){
    console.log("GO FORWARD ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("1GC1\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    /*
    uart.writeStr("#1P1740#2P967#3P1520#4P1540#5P1210#6P1810#7P1456#8P1567#25P1389#26P1456#27P1210#28P1989#29P1430#30P1456#31P567#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Second write-read circle:");
    uart.writeStr("#1P1740#2P1678#3P1520#4P1567#5P1210#6P2120#7P1100#8P1567#25P1389#26P1789#27P900#28P1989#29P1389#30P1456#31P1167#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Third write-read circle:");
    uart.writeStr("#1P1740#2P1830#3P1520#4P1540#5P1078#6P2256#7P1078#8P1500#25P1389#26P1830#27P740#28P2140#29P1430#30P1456#31P1389#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Fourth write-read circle:");
    uart.writeStr("#1P1740#2P1940#3P1520#4P1540#5P1078#6P2389#7P989#8P1500#25P1389#26P1940#27P589#28P2140#29P1430#30P1456#31P1540#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    */
}

function goToward(){
    console.log("GO TOWARD ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("4GC1\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    /*
    uart.writeStr("#1P1740#2P967#3P1520#4P1540#5P1210#6P1810#7P1456#8P1567#25P1389#26P1456#27P1210#28P1989#29P1430#30P1456#31P567#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Second write-read circle:");
    uart.writeStr("#1P1740#2P1678#3P1520#4P1567#5P1210#6P2120#7P1100#8P1567#25P1389#26P1789#27P900#28P1989#29P1389#30P1456#31P1167#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Third write-read circle:");
    uart.writeStr("#1P1740#2P1830#3P1520#4P1540#5P1078#6P2256#7P1078#8P1500#25P1389#26P1830#27P740#28P2140#29P1430#30P1456#31P1389#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Fourth write-read circle:");
    uart.writeStr("#1P1740#2P1940#3P1520#4P1540#5P1078#6P2389#7P989#8P1500#25P1389#26P1940#27P589#28P2140#29P1430#30P1456#31P1540#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    */
}

function turnLeft(){
    console.log("TURN LEFT ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("2GC1\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500); 
   /*
uart.writeStr("#1P1740#2P967#3P1520#4P1540#5P1210#6P1810#7P1456#8P1567#25P1389#26P1456#27P1210#28P1989#29P1430#30P1456#31P567#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Second write-read circle:");
    uart.writeStr("#1P1740#2P1678#3P1520#4P1567#5P1210#6P2120#7P1100#8P1567#25P1389#26P1789#27P900#28P1989#29P1389#30P1456#31P1167#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Third write-read circle:");
    uart.writeStr("#1P1740#2P1830#3P1520#4P1540#5P1078#6P2256#7P1078#8P1500#25P1389#26P1830#27P740#28P2140#29P1430#30P1456#31P1389#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Fourth write-read circle:");
    uart.writeStr("#1P1740#2P1940#3P1520#4P1540#5P1078#6P2389#7P989#8P1500#25P1389#26P1940#27P589#28P2140#29P1430#30P1456#31P1540#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    */
}

function turnRight(){
    console.log("TURN RIGHT ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("3GC1\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
/*    
uart.writeStr("#1P1740#2P967#3P1520#4P1540#5P1210#6P1810#7P1456#8P1567#25P1389#26P1456#27P1210#28P1989#29P1430#30P1456#31P567#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Second write-read circle:");
    uart.writeStr("#1P1740#2P1678#3P1520#4P1567#5P1210#6P2120#7P1100#8P1567#25P1389#26P1789#27P900#28P1989#29P1389#30P1456#31P1167#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Third write-read circle:");
    uart.writeStr("#1P1740#2P1830#3P1520#4P1540#5P1078#6P2256#7P1078#8P1500#25P1389#26P1830#27P740#28P2140#29P1430#30P1456#31P1389#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    sleep(500);
    console.log("Fourth write-read circle:");
    uart.writeStr("#1P1740#2P1940#3P1520#4P1540#5P1078#6P2389#7P989#8P1500#25P1389#26P1940#27P589#28P2140#29P1430#30P1456#31P1540#32P1230T1000\r\n");
    sleep(1000);
    console.log(uart.readStr(200));
    */
}

//var devPath = SerialPort.writeStr ("hgby");
//var sp = new mraa.Uart(devPath);


// WebSocket communications
module.exports = function (socket) {
  socket.on('connection', function(){
	console.log('hello');
  });
  socket.on('hello', function() {
    console.log('hello');
	var message = true;
	socket.emit('check_connect',{ noidung: message});
  });

  socket.on('left', function(data) {
    console.log(data);
	console.log('left');
	var message = true;
        socket.emit('check_command', {noidung: message});
	turnLeft();
  });

  socket.on('right', function(data) {
    console.log(data);
    console.log('right');
    turnRight();
  });

  socket.on('reverse', function(data) {
    console.log(data);
    console.log('reverse');
    goToward();
  });

  socket.on('forward', function(data) {
    console.log(data);
    console.log('forward');
    goForwad();
  });

  socket.on('Act1', function(data) {
    console.log(data);
    console.log('Action 1');
    goForwad();
  });

  socket.on('Act2', function(data) {
    console.log(data);
    console.log('Action 2');
    goToward();
  });

  socket.on('Act3', function(data) {
    console.log(data);
    console.log('Action 3');
    turnLeft();
  });

  socket.on('Act4', function(data) {
    console.log(data);
    console.log('Action 4');
    turnRight();
  });
  // App socket
  socket.on('command', function(data) {
	var message = true;
    switch(data){
        case "turn left":
                console.log(data);
                console.log('left');
				socket.emit('check_command',{noidung: message});
                turnLeft();
            break;
        case "turn right":
                console.log(data);
                console.log('right');
				socket.emit('check_command',{noidung: message});
                turnRight();
            break;
        case "go forward":
                console.log(data);
                console.log('forward');
				socket.emit('check_command',{noidung: message});
                goForwad();
            break;
        case "go toward":
                console.log(data);
                console.log('toward');
				socket.emit('check_command',{noidung: message});
                goToward();
            break;
        case "action 1":
                console.log(data);
                console.log('action 1');
				socket.emit('check_command',{noidung: message});
                turnLeft();
            break;
        case "action 2":
                console.log(data);
                console.log('action 2');
				socket.emit('check_command',{noidung: message});
                turnRight();
            break;
        case "action 3":
                console.log(data);
                console.log('action 3');
				socket.emit('check_command',{noidung: message});
                goForwad();
            break;
        case "action 4":
                console.log(data);
                console.log('action 4');
				socket.emit('check_command',{noidung: message});
                goToward();
            break;
        default:
    }

  });



  // Handle Ctrl+C event
  process.on('SIGINT', function() {
    console.log('Stop');
    socket.disconnect();
    process.exit();
  });
};





