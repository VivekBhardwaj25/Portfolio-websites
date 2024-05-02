let typed = new Typed("#element", {
  strings: ["Web Developer", "Web Desinger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.querySelector(".sidebar").style.display = "none";
document.querySelector(".nav-menu").addEventListener("click", () => {
  if ((document.querySelector(".sidebar").style.display = "none")) {
    document.querySelector(".sidebar").style.display = "block";
  }
});

document.querySelector(".close").addEventListener("click", () => {
  if ((document.querySelector(".sidebar").style.display = "block")) {
    document.querySelector(".sidebar").style.display = "none";
  }
});

