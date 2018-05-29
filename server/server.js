// modules
var express = require('express')
  , http = require('http')
  , morgan = require('morgan');

  

  
// configuration files
var configServer = require('./lib/config/server');

// app parameters
var app = express();
app.set('port', configServer.httpPort);
app.set('port_app', configServer.appPort);
app.use(express.static(configServer.staticFolder));
app.use(morgan('dev'));

// serve index
require('./lib/routes').serveIndex(app, configServer.staticFolder);

// HTTP server
var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('HTTP server listening on port ' + app.get('port'));
});
var server0 = http.createServer(app);
server0.listen(app.get('port_app'), function () {
  console.log('HTTP server listening on port ' + app.get('port_app'));
});


// WebSocket server
var io = require('socket.io')(server);
io.on('connection', require('./lib/routes/socket'));
var io0 = require('socket.io')(server0);
io0.on('connection', require('./lib/routes/socket'));


var bleno = require('bleno');
var BlenoPrimaryService = bleno.PrimaryService;

var FirstCharacteristic = require('../lib/config/socket');

bleno.on('stateChange', function(state) {
  console.log('BLE State: ' + state);
  if (state === 'poweredOn') {
    bleno.startAdvertising('Humanoid Robot', ['fc00']);
  }
  else {
    if(state === 'unsupported'){
      error.log("BLE error. Check board configuration.");
    }
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(error) {
  console.log('Advertising:' + (error ? 'error ' + error : 'success'));
  if (!error) {
    bleno.setServices([
      new BlenoPrimaryService({
        uuid: 'fc00',
        characteristics: [
          new FirstCharacteristic()
        ]
      })
    ]);
  }
});

bleno.on('accept', function(clientAddress) {
    console.log("Accepted Connection with Client Address: " +
clientAddress);
});

bleno.on('disconnect', function(clientAddress) {
    console.log("Disconnected Connection with Client Address: " +
clientAddress);
});

console.log("Edison initiated...");
  


module.exports.app = app;
