/* Connects to the socket server */

var socket = io.connect('https://real-time-ce-back.herokuapp.com/');

socket.on('connect', function () {
    socket.join('pork-room');

    socket.on('pork', message => {
        console.log(message);
    })
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == 'poked') {
        socket.to('pork-room').emit('pork', 'dmcshehan');
    }
})