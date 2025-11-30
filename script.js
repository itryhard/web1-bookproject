// ------ Handle primary color picker toggle ------:
const colorIcon = document.getElementById("colorIcon");
const colorPicker = document.getElementById("colorPicker");

colorIcon.addEventListener("click", () => {
  colorPicker.classList.toggle("active");
});

colorPicker.addEventListener("input", (e) => {
  // update CSS variable on color selection
  const newColor = e.target.value;
  const body = document.querySelector("body");

  body.style.setProperty("--primary-blue", newColor);
});

// ------ Theme Switcher ------:
const themeToggling = document.getElementById("theme");
// Toggle dark/light mode on click
themeToggling.addEventListener("click", () => {
  // caching body for cleaner code
  const body = document.querySelector("body");
  body.classList.toggle("dark-theme");
});

// ------ Search Icon ------:
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
// toggle search field visibility
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

// ------ Hamburger Icon ------:
// cache navbar elements for responsive menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
// close button for mobile navigation
const closeMenu = document.getElementById("closeMenu");
// open mobile navigation panel
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});
// close mobile menu panel
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
