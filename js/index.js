// Sidebar Navagation menue

const sideNavagation = document.getElementById("mySideNav");
const sideNavagationOverlay = document.getElementById("sideNav-focus");

function openNav() {
  sideNavagation.style.width = "300px";
  sideNavagationOverlay.style.height = "100%";
  sideNavagationOverlay.style.width = "100%";
}
function closeNav() {
  sideNavagation.style.width = "0";
  sideNavagationOverlay.style.height = "0";
  sideNavagationOverlay.style.width = "0";
}

//   History
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const year = document.getElementsByClassName("year-button");
  console.log(slides);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.width = "0";
  }
  for (let i = 0; i < year.length; i++) {
    year[i].className = year[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.width = "100%";
  year[slideIndex - 1].className += " active";
}
