(function (){
var button = document.querySelectorAll(".button")[0];
var rectangle = document.querySelectorAll(".rectangle")[0];
 button.addEventListener("click", function(){
   rectangle.style.borderColor = "green";
   rectangle.style.backgroundColor = "red";})
 })();