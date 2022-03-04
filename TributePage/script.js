var r = document.querySelector(":root");
var dark = 0;

function darkMode() {
  myFunction_set();
}

function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  if (dark == 0) {
    r.style.setProperty("--main-color", "black");
    r.style.setProperty("--details-color", "white");
    r.style.setProperty("--divs-color", "rgb(59, 59, 59)");
    dark = 1;
  } else {
    r.style.setProperty("--main-color", "white");
    r.style.setProperty("--details-color", "black");
    r.style.setProperty("--divs-color", "rgb(230, 230, 230)");
    dark = 0;
  }
}
