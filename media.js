const mediaQuery = window.matchMedia("(max-width:480px)");
// click free-fire
freeFire.addEventListener("click", () => {
  ffGame.style.display = "flex";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "none";
  if (freeFire.style.left = "-1vw") {
    freeFire.style.left = "30vw";
    bgmi.style.left = "-1vw";
    ludo.style.left = "61vw";
    freeFire.style.height = "25vh";
    bgmi.style.height = "20vh";
    ludo.style.height = "20vh";
  }
});
// click bgmi
bgmi.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "flex";
  ludoGame.style.display = "none";
  if (bgmi.style.left = "-1vw") {
    freeFire.style.left = "-1vw";
    bgmi.style.left = "30vw";
    ludo.style.left = "61vw";
    freeFire.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
  if (bgmi.style.left = "61vw") {
    ludo.style.left = "61vw";
    bgmi.style.left = "30vw";
    ludo.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
});

// click ludo
ludo.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "flex";

  if ((ludo.style.left = "61vw")) {
    bgmi.style.left = "61vw";
    ludo.style.left = "30vw";
    freeFire.style.left = "-1vw";
    ludo.style.height = "25vh";
    bgmi.style.height = "20vh";
    freeFire.style.height = "20vh";
  }
});



