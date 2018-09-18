<<<<<<< HEAD
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
=======
(function () {
  var button = document.querySelectorAll(".button")[0];
  var rectangle = document.querySelectorAll(".rectangle")[0];
  button.addEventListener("click", function () {
    rectangle.style.borderColor = "green";
    rectangle.style.backgroundColor = "red";
  })
})();
>>>>>>> c2998a3c6033f0e5838c296d6511fabb810d4a7a
