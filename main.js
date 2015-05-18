// VARIABLES
var d, h, m, s;

// CLOCK
var normalTime = setInterval(function() {
  d = new Date();
  
  h = d.getHours();
  
  m = d.getMinutes();
  
  s = d.getSeconds();


  // 12hr time
  if (h > 12) {
    h = h - 12;
  }
  // end 12hr time

  // zeroes
  if (h <= 9) {
    h = "0" + h; 
  }
  if (s <= 9) {
    s = "0" + s;
  }
  if (m <= 9) {
    m = "0" + m; 
  }

  // display on page
  var displayTimer = h + ":" + m + ":" + s;
  document.querySelector(".time").innerHTML = displayTimer;

  // background color
  document.body.backgroundColor = displayTimer;

  // timeout
  setTimeout(normalTime, 1000);
});

var colorTime = setInterval(function () {
  d = new Date();
  
  h = d.getHours();
  
  m = d.getMinutes();
  
  s = d.getSeconds();


  // 12hr time
  if (h > 12) {
    h = h;
  }
  // end 12hr time

  //zeroes

  if (h <= 9) {
    h = "0" + h; 
  }
  if (s <= 9) {
    s = "0" + s;
  }
  if (m <= 9) {
    m = "0" + m; 
  }

  var displayColor = "#" + h + m + s;
  document.querySelector(".color").innerHTML = displayColor;
}
  );