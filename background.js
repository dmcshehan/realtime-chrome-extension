/* Connects to the socket server */

var socket = io.connect('http://localhost:5000');

socket.on('connect', function () {
    console.log('Client connected');
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("messaged received");

    if (request.todo == 'poked') {
        socket.emit('poke', 'dmcshehan');
    }
})