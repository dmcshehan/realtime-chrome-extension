/* Connects to the socket server */

var socket = io.connect('https://real-time-ce-back.herokuapp.com/');

socket.on('connect', function () {
    console.log('Client successfully connected to server!');
});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == 'poked') {
        socket.emit('pork', 'I pork you');
    }
})