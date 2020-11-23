/* Connects to the socket server */

var socket = io.connect('https://real-time-ce-back.herokuapp.com/');
//var socket = io.connect('http://localhost:5000/');

socket.on('connect', function () {
    console.log('Client successfully connected to server!');
});


socket.on('reply', function (message) {
    console.log(message);

    const notifObject = {
        type: 'basic',
        iconUrl: './icon64.png',
        title: 'Someone Poked You',
        message: message
    };

    chrome.notifications.create('notification', notifObject);

});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == 'poked') {
        socket.emit('pork', 'I pork you');
    }
})