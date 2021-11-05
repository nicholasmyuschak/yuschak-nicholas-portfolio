//Popover
const learnMoreBtn = document.getElementById("btn-1");
const scOffCanvas = document.getElementById("sc-off-canvas");

//On Click
learnMoreBtn.onclick = function () {
  if (scOffCanvas.classList.contains("off-canvas-hide")) {
    scOffCanvas.classList.remove("off-canvas-hide");
    scOffCanvas.classList.add("off-canvas-show");
    learnMoreBtn.innerHTML = "Hide";
  } else {
    scOffCanvas.classList.remove("off-canvas-show");
    scOffCanvas.classList.add("off-canvas-hide");
    learnMoreBtn.innerHTML = "Learn More";
  }
};
