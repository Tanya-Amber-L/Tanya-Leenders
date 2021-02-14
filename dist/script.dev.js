"use strict";

// Tanya Leenders - Curriculum Vitae and Portfolio
scrollTo = function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
  console;
};

document.getElementById("btnSkills").addEventListener('click', function () {
  scrollTo(document.getElementById("skills"));
});
document.getElementById("btnExp").addEventListener('click', function () {
  scrollTo(document.getElementById("exp"));
});
document.getElementById("btnPortfolio").addEventListener('click', function () {
  scrollTo(document.getElementById("portfolio"));
});
document.getElementById("btnContact").addEventListener('click', function () {
  scrollTo(document.getElementById("contact"));
});
console.log("text");