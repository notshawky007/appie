///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnMenuEl = document.querySelector(".mobile-nav");
const btnClosesEl = document.querySelector(".mobile-nav-close");
const body = document.body;

btnMenuEl.addEventListener("click", (e) => {
  body.classList.toggle("open");
});

btnClosesEl.addEventListener("click", (e) => {
  body.classList.remove("open");
});

///////////////////////////////////////////////////////////
const linksNavEl = document.querySelectorAll(".nav-bar .nav-btn");

linksNavEl.forEach((e) => {
  e.addEventListener("click", (link) => {
    body.classList.remove("open");
  });
});
///////////////////////////////////////////////////////////
