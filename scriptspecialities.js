
document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("main-header");
    var nameheader = document.querySelector('.name-header');
    window.addEventListener("scroll", function() {
        if (window.scrollY > header.clientHeight) {
            header.classList.add("inverted");
            nameheader.classList.add('inverted');
        } else {
            header.classList.remove("inverted");
            nameheader.classList.remove('inverted');
        }
    });
});



function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkScroll() {
  var menu = document.querySelector('.menu');
  var animatedElements = document.querySelectorAll('.animated-element');

  if (window.scrollY > 20) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-60px"; // Adjust based on your menu height
  }

  animatedElements.forEach(function (element) {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('DOMContentLoaded', checkScroll);

