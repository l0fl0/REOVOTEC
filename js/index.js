
// Main page slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 9000); // Change image every 2 seconds
}

// Navagation Dropdown menue


// Navagation toggel menue
     // Sidebar Navagation menue
     function openNav() {
      document.getElementById("mySidenav").style.width = "400px";
      document.getElementById("home").style.width = "100%";
      document.getElementById("home").style.height = "100%";
      }
      function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("home").style.width = "0";
      document.getElementById("home").style.height = "0";
      }