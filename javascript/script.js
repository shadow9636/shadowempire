// click bar icon slid-menu show in wab page
const bar = document.querySelector(".bar");
const slid = document.querySelector(".slid");
bar.addEventListener("click", () => {
  slid.classList.toggle("active");
  full.classList.toggle("active");
});
// click close button slidbar hide wab-page
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  slid.classList.toggle("active");
  full.classList.toggle("active");
  feed.style.display = "none";
  about.style.display = "none";
  halp.style.display = "none";
  come.style.display = "none";
});
// if side bar show click screen close side bar
const full = document.querySelector(".full-screen");
full.addEventListener("click", () => {
  slid.classList.toggle("active");
  full.classList.toggle("active");
});

// click sidebar button

// click feedback button

const feedback = document.querySelector(".feed-back");
const feed = document.querySelector(".feed");
feedback.addEventListener("click", () => {
  feed.classList.toggle("active");
  feed.style.display = "flex";
  about.style.display = "none";
  halp.style.display = "none";
  come.style.display = "none";
});
const feedoff = document.querySelector(".feed-off");
feedoff.addEventListener("click", () => {
  feed.classList.toggle("active");
});

// click about
const abouting = document.querySelector(".abouting");
const about = document.querySelector(".about");
abouting.addEventListener("click", () => {
  about.classList.toggle("active");
  feed.style.display = "none";
  about.style.display = "flex";
  halp.style.display = "none";
  come.style.display = "none";
});
const aboutoff = document.querySelector(".about-off");
aboutoff.addEventListener("click", () => {
  about.classList.toggle("active");
});

// click comeingsoon
const comein = document.querySelector(".comein");
const come = document.querySelector(".come");
comein.addEventListener("click", () => {
  come.classList.toggle("active");
  feed.style.display = "none";
  about.style.display = "none";
  halp.style.display = "none";
  come.style.display = "flex";
});
const comeoff = document.querySelector(".come-off");
comeoff.addEventListener("click", () => {
  come.classList.toggle("active");
});

// click halp button
const halping = document.querySelector(".halping");
const halp = document.querySelector(".halp");
halping.addEventListener("click", () => {
  halp.classList.toggle("active");
  feed.style.display = "none";
  about.style.display = "none";
  halp.style.display = "flex";
  come.style.display = "none";
});
const halpoff = document.querySelector(".halp-off");
halpoff.addEventListener("click", () => {
  halp.classList.toggle("active");
});

// click gameinterface show same turnament guns-mach
const freeFire = document.querySelector(".free-fire");
const bgmi = document.querySelector(".bgmi");
const ludo = document.querySelector(".ludo-king");
const ffGame = document.querySelector(".gun-intfac-free-fire");
const bgmiGame = document.querySelector(".gun-intfac-bgmi");
const ludoGame = document.querySelector(".gun-intfac-ludo");
// click free-fire
freeFire.addEventListener("click", () => {
  ffGame.style.display = "flex";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "none";
  if (freeFire.style.left = "1vw") {
    freeFire.style.left = "32vw";
    bgmi.style.left = "1vw";
    ludo.style.left = "62vw";
    freeFire.style.height = "50vh";
    bgmi.style.height = "40vh";
    ludo.style.height = "40vh";
  }
});
// click bgmi
bgmi.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "flex";
  ludoGame.style.display = "none";
  if (bgmi.style.left = "1vw") {
    freeFire.style.left = "1vw";
    bgmi.style.left = "32vw";
    ludo.style.left = "62vw";
    freeFire.style.height = "40vh";
    bgmi.style.height = "50vh";
  }
  if (bgmi.style.left = "62vw") {
    ludo.style.left = "62vw";
    bgmi.style.left = "32vw";
    ludo.style.height = "40vh";
    bgmi.style.height = "50vh";
  }
});

// click ludo
ludo.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "flex";

  if ((ludo.style.left = "62vw")) {
    bgmi.style.left = "62vw";
    ludo.style.left = "32vw";
    freeFire.style.left = "1vw";
    ludo.style.height = "50vh";
    bgmi.style.height = "40vh";
    freeFire.style.height = "40vh";
  }
});



