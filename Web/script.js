function DarkMode() {
    var element = document.getElementById('Container');
    var textbutton = document.getElementById('textbutton');
    element.classList.toggle("dark-mode");
    if (textbutton.innerHTML === ('Light')) textbutton.innerHTML = ('Dark')
    else textbutton.innerHTML = ('Light')
}

function navbarmenu() {
    var x = document.getElementById("item-navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }