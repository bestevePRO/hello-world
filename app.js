showTimestamp = function(e) {
    var now = new Date();
    if (e.shiftKey) { // нажата кнопка CTRL
        var time = now.toTimeString()
        alert(time);
    } else {
        var date = now.toDateString();
        alert(date);
    }
}