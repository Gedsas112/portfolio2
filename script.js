const navBar = document.querySelector(".nav-links");
const sticky = navBar.offsetTop;

console.log(sticky);

function addStickyNav() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", addStickyNav);
