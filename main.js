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
  document.getElementById("time").innerHTML = displayTimer;

  // background color
  document.getElementById("time").backgroundColor = displayTimer;

  // timeout
  setTimeout(normalTime, 1000);
});

var colorTime = setInterval(function () {
  d = new Date();
  
  h = d.getHours();
  
  m = d.getMinutes();
  
  s = d.getSeconds();


  // no-12hr time
  if (h > 12) {
    h = h;
  }
  // end no-12hr time

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
  // end zeroes

  // hex time
  var displayColor = "#" + h + m + s;
  // end hex time

  // drop in dom node
  document.getElementById("color").innerHTML = displayColor;
  // end drop in dom node

  // change background color
  document.getElementById("container").style.backgroundColor = displayColor;
  // end change background color

  // apply background to whole page, not just container
  document.querySelector("body").style.backgroundColor = displayColor;
  end
}
  );