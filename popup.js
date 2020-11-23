$(function () {
    $('#poke').click(function () {
        chrome.runtime.sendMessage({ todo: 'poked' });
    })
})