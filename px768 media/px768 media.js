if(window.matchMedia("(max-width: 768px)").matches){


// click free-fire
freeFire.addEventListener("click", () => {
  ffGame.style.display = "flex";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "none";
  if (freeFire.style.left = "2vw") {
    freeFire.style.left = "35vw";
    bgmi.style.left = "2vw";
    ludo.style.left = "68vw";
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
  if (bgmi.style.left = "2vw") {
    freeFire.style.left = "2vw";
    bgmi.style.left = "35vw";
    ludo.style.left = "68vw";
    freeFire.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
  if (bgmi.style.left = "68vw") {
    ludo.style.left = "68vw";
    bgmi.style.left = "35vw";
    ludo.style.height = "20vh";
    bgmi.style.height = "25vh";
  }
});

// click ludo
ludo.addEventListener("click", () => {
  ffGame.style.display = "none";
  bgmiGame.style.display = "none";
  ludoGame.style.display = "flex";

  if ((ludo.style.left = "68vw")) {
    bgmi.style.left = "68vw";
    ludo.style.left = "35vw";
    freeFire.style.left = "2vw";
    ludo.style.height = "25vh";
    bgmi.style.height = "20vh";
    freeFire.style.height = "20vh";
  }
});





}