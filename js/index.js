// Navagation Dropdown menue

// Navagation toggel menue
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
