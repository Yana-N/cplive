const btn = document.querySelector("#scroll-up");

window.addEventListener("scroll", (e) => {
  window.pageYOffset > 1500
    ? btn.classList.add("active")
    : btn.classList.remove("active");
});

btn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
