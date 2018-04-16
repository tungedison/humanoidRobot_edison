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

module.exports.app = app;
