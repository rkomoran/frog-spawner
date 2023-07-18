document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
  
    container.addEventListener("click", function(event) {
      var frog = document.createElement("div");
      frog.className = "frog";
      frog.style.left = (event.clientX - 50) + "px";
      frog.style.top = (event.clientY - 50) + "px";
      container.appendChild(frog);
  
      setTimeout(function() {
        container.removeChild(frog);
      }, 2000);
    });
  });
  