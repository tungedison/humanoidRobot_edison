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

function kickAct(){
    console.log("KICK ACTION:");
    console.log("First write-read circle:");
    uart.writeStr("#4GC1\r\n");
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
    uart.writeStr("#1GC1\r\n");
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
    uart.writeStr("#4GC1\r\n");
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
    uart.writeStr("#2GC1\r\n");
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
    uart.writeStr("#3GC1\r\n");
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


var util = require('util');
var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;

// Initialize BLE Characteristic
var FirstCharacteristic = function() {
  FirstCharacteristic.super_.call(this, {
    uuid: 'fc0f',
    properties: ['read', 'write', 'notify'],
    value: null
  });
  this._value = new Buffer("OFF", "utf-8");
  console.log("Characterisitic's value: "+this._value);
  this._updateValueCallback = null;
};

// Inherit the BlenoCharacteristic
util.inherits(FirstCharacteristic, BlenoCharacteristic);

// BLE Read request
FirstCharacteristic.prototype.onReadRequest = function(offset, callback) {
  console.log('FirstCharacteristic - onReadRequest: value = ' + this._value.toString("utf-8"), offset);
  callback(this.RESULT_SUCCESS, this._value);
};

// BLE write request
FirstCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  this._value = data;
  if (data == "left") {
    console.log(data);
	console.log('left');
	turnLeft();
  }
  if (data == "right") {
    console.log(data);
	console.log('left');
	turnRight();
  }
  if (data == "goForward") {
    console.log(data);
	console.log('left');
	goForwad();
  }
  if (data == "turnLeft") {
    console.log(data);
	console.log('left');
	turnLeft();
  }
  if (data == "turnRight") {
    console.log(data);
	console.log('left');
	turnRight();
  }
  if (data == "kick") {
    console.log(data);
	console.log('left');
	kickAct();
  }
  console.log('FirstCharacteristic - onWriteRequest: value = ' + this._value.toString("utf-8"));

  if (this._updateValueCallback) {
    console.log('FirstCharacteristic - onWriteRequest: notifying');

    this._updateValueCallback(this._value);
  }

  callback(this.RESULT_SUCCESS);
};

// BLE subscribe
FirstCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('FirstCharacteristic - onSubscribe');
  this._updateValueCallback = updateValueCallback;
};

// BLE unsubscribe
FirstCharacteristic.prototype.onUnsubscribe = function() {
  console.log('FirstCharacteristic - onUnsubscribe');
  this._updateValueCallback = null;
};

module.exports = FirstCharacteristic;
