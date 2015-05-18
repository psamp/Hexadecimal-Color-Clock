
var normalTime = setInterval(function() {
  // variables
  var d = new Date();
  
  var h = d.getHours();
  
  var m = d.getMinutes();
  
  var s = d.getSeconds();
  // end variables

  var timeDisplay = document.querySelector(".time");
  var changeFormat = document.querySelector(".cngbtn");

  // zeroes
  if (s <= 9) {
    s = "0" + s;
  }
  if (h <= 9) {
    h = "0" + h;
  }
  if (m <= 9) {
    m = "0" + m; 
  }
  // end zeroes

  // 12hr time
  if (h > 12) {
    h = h - 12;
  }
  var fullTimer = h + ":" + m + ":" + s;

  document.querySelector(".time").innerHTML = fullTimer;
});