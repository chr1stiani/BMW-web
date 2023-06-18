document.addEventListener("DOMContentLoaded", function(event) {
    var overlay = document.querySelector(".overlay");
    
    setTimeout(function() {
      overlay.classList.add("fade-out");
    }, 5000);
    
    setTimeout(function() {
      overlay.style.display = "none";
    }, 7000); 
  });
  
