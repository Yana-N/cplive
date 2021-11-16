const btnBurger = document.querySelector(".header .burger"),
  menu = document.querySelector(".header .nav"),
  body = document.querySelector("body"),
  links = document.querySelectorAll(".header .nav__list a");

btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("burger--active");
  menu.classList.toggle("nav--active");
  body.classList.toggle("lock");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    btnBurger.classList.remove("burger--active");
    menu.classList.remove("nav--active");
    body.classList.remove("lock");
  })
);
