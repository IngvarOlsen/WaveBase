//Scroll reveal
window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 2000 });

(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();






// function animateWithRandomNumber(myClass, from, to) {
//     TweenMax.fromTo(myClass, Math.floor(Math.random() * (60 - 2 + 1) + 2) * 0.5 + 0.5, { y: from }, { y: to,
//         onComplete: animateWithRandomNumber,
//         onCompleteParams: [myClass, from, to],
//         ease: Linear.easeNone });
// }

// const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"]
// .forEach(e => animateWithRandomNumber(e, -1080, 1080))
// const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"]
// .forEach(e => animateWithRandomNumber(e, 1080, -1080))