document.addEventListener('DOMContentLoaded', () => {

  var socket = io();
  var title = document.querySelector('title');
  var content = document.createTextNode("Connected!");
  var updatedP = document.createElement("p");

  socket.on('connect', () => {
    title.appendChild(content);
  });

  socket.on('update', (data) => {
    var myx = document.querySelector('#myx')
    myx.value = data.state;
  });

  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    socket.emit('update', event.which);
  });

});
