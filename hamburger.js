const burgerIcon = document.querySelector(".burger");
const closeIcon = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");
document.addEventListener("click", () => {
  if (burgerIcon.style.display === "block") {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
  }

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
});
