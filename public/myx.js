document.addEventListener('DOMContentLoaded', () => {

  var socket = io();
  const title = document.querySelector('title');
  const content = document.createTextNode("Connected!");

  socket.on('connect', () => {
    title.appendChild(content);
  });

  socket.on('update', (data) => {
    const myx = document.querySelector('#myx');
    myx.value = data.state.split(',').join(' ');
  });

  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    socket.emit('update', event.which);
  });

});
