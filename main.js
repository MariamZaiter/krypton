let navList = document.querySelectorAll(".ico .tabs ul  li");
let listExplain = document.querySelectorAll(".ico .list");
navList.forEach(function (element) {
  element.onclick = function (ele) {
    navList.forEach(function (element) {
      element.classList.remove("is-active");
    });
    this.classList.add("is-active");
    listExplain.forEach(function (element) {
      element.classList.add("hh");
      element.style.opacity = "0";
      element.style.transition = "0.3s";
    });
    listExplain[this.id].classList.remove("hh");
    setTimeout(() => (listExplain[this.id].style.opacity = "1"), 500);
  };
});
var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances

let pageLoader = document.querySelector(".pageloader");
setTimeout(function () {
  pageLoader.classList.remove("is-active");
}, 3000);
console.log(hi);
