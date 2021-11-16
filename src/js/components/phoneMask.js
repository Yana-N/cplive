const maskOptions = {
  mask: "+{7}(000)000-00-00",
};

const elems = document.querySelectorAll('[type="tel"]');

elems.forEach((elem) => IMask(elem, maskOptions));
