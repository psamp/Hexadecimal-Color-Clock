
var normalTime = setInterval(function() { 
  var d = new Date();
  
  var h = d.getHours();
  
  var m = d.getMinutes();
  
  var s = d.getSeconds();

  var fullTimer = h + ":" + m + ":" + s;

  document.querySelector(".hex").innerHTML = fullTimer;
});