function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
    x.previousElementSibling.className += " theme-d1";
  } else { 
    x.className = x.className.replace("show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace(" show", "");
  }
}