// ------ Painting Icon ------:
const colorIcon = document.getElementById("colorIcon");
const colorPicker = document.getElementById("colorPicker");

colorIcon.addEventListener("click", () => {
    colorPicker.classList.toggle("active");
});

colorPicker.addEventListener("input", (e) => {
    const newColor = e.target.value;
    const body = document.querySelector("body");

    body.style.setProperty("--primary-blue", newColor);
    document.documentElement.style.setProperty(
        "scrollbar-color",
        `${newColor} transparent`
    );
});

// ------ Themes ------:
const themeToggling = document.getElementById("theme");
const bgToggling = document.querySelector('.hero');

themeToggling.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        bgToggling.style.backgroundImage = 'url("assets/image/bg.png")';
    } else {
        bgToggling.style.backgroundImage = 'url("assets/image/reading.png")';
    }
});

// ------ Search Icon ------:
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("active");
});

// ------ Hamburger Icon ------:
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
