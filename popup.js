$(function () {
    $('#send').click(function () {
        const message = $('#message').val();
        chrome.runtime.sendMessage({ todo: 'poked', message });
    })
})