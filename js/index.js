// Sidebar Navagation menue

const sideNavagation = document.getElementById("mySideNav");
const sideNavagationOpacity = document.getElementById("sideNav-focus");

function openNav() {
  sideNavagation.style.width = "300px";
  sideNavagationOpacity.style.opacity = 0.5;
}
function closeNav() {
  sideNavagation.style.width = "0";
  sideNavagationOpacity.style.opacity = 1;
}

//   History
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const year = document.getElementsByClassName("year-button");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.width = "0";
  }
  for (i = 0; i < year.length; i++) {
    year[i].className = year[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.width = "100%";
  year[slideIndex - 1].className += " active";
}
