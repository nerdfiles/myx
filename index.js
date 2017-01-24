/* @fileOverview ./server.js
 */
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const niceware = require('niceware');

app.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, function () {
  console.log('Server started!');
});
// var spawn = require('child_process').spawn;

io.on('connection', function (socket) {
  console.log('Connected!');

  socket.on('update', function (data) {
    console.log('Update keydown!');
    console.log(data);

    // var child = spawn('openssl', ['rand', '-base64', '10']);
    const passphrase = niceware.generatePassphrase(8);
    gameState.state = passphrase.toString();
    socket.emit('update', gameState);

    // child.stdout.on('data', function (password) {
    //   gameState.state = password.toString();
    //   socket.emit('update', gameState);
    // });

    // child.stderr.on('data', function (data) {
    //   process.stdout.write(data.toString());
    // });

  });

});

var loopAsync = function () {
  setImmediate(loop);
};

function loop () {
  gameLoops++;
  var delta = Date.now() - lastTimestamp;
  last = Date.now();
  var currentState = {
    time      : Date.now(),
    loopDelta : delta,
    loops     : gameLoops
  };

  gameState = currentState;
  loopAsync();
}

var lastTimestamp = Date.now();
var gameLoops = 0;
var gameState = {
  time      : Date.now(),
  loopDelta : 0,
  loops     : gameLoops
};
loopAsync();



