

const coverFolder = document.getElementById("coverFolder");
const coverScreen = document.getElementById("coverScreen");
const portfolioInside = document.getElementById("portfolioInside");

if (coverFolder && coverScreen && portfolioInside) {
  coverFolder.addEventListener("click", () => {
    coverScreen.classList.add("open");
    portfolioInside.classList.add("show");
    document.body.style.overflow = "auto";
  });
}