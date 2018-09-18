showTimestamp = function (e) {
    var now = new Date();
    if (e.ctrlKey && e.altKey) {
        var time = now.toTimeString()
        alert(time);
    } if (e.shiftKey) {
        var date = now.toDateString();
        alert(date);
    }
}