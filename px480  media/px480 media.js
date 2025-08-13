if(window.matchMedia("(max-width: 480px)").matches){


// click free-fire
freeFire.addEventListener("click", () => {
  ffGame.style.display = "flex";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "none";
  if (freeFire.style.left = "0vw") {
    freeFire.style.left = "33vw";
    bgmi.style.left = "0vw";
    ludo.style.left = "66vw";
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
  if (bgmi.style.left = "0vw") {
    freeFire.style.left = "0vw";
    bgmi.style.left = "33vw";
    ludo.style.left = "66vw";
    freeFire.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
  if (bgmi.style.left = "66vw") {
    ludo.style.left = "66vw";
    bgmi.style.left = "33vw";
    ludo.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
});

// click ludo
ludo.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "flex";

  if ((ludo.style.left = "66vw")) {
    bgmi.style.left = "66vw";
    ludo.style.left = "33vw";
    freeFire.style.left = "0vw";
    ludo.style.height = "25vh";
    bgmi.style.height = "20vh";
    freeFire.style.height = "20vh";
  }
});





}