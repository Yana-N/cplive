const section = document.querySelector(".header+section"),
  header = document.querySelector(".header");

let height = getComputedStyle(header).height;
section.style.marginTop = height;
