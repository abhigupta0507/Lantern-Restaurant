document.addEventListener("DOMContentLoaded", function() {
  let header = document.querySelector(".main-header");
  let nameheader = document.querySelector('.name-header-button');

  window.addEventListener("scroll", function() {
      if (window.scrollY > header.clientHeight) {
          header.classList.add("inverted");
          nameheader.classList.add('inverted');
      } 
      else {
          header.classList.remove("inverted");
          nameheader.classList.remove('inverted');
      }
  });
});


const cardsPerPage = 10;
const dataContainer = document.querySelector('.data-container'); 
const pagination = document.querySelector('.pagination'); 
const pageLinks = document.querySelectorAll('.page-link'); 
const mainmenu = document.querySelector('.mainMenu');
const dessert = document.querySelector('.dessert');
const drinks = document.querySelector('.drinks');

const cards = 
	Array.from(dataContainer.getElementsByClassName('card4')); 

// Calculate the total number of pages 
const totalPages = (cards.length / cardsPerPage); 
let currentPage = 1; 

// Function to display cards for a specific page 
function displayPage(page) { 
	const startIndex = (page - 1) * cardsPerPage; 
	const endIndex = startIndex + cardsPerPage; 
	cards.forEach((card, index) => { 
		if (index >= startIndex && index < endIndex) { 
			card.style.display = 'flex'; 
		} 
    else{
      card.style.display = 'none'; 
    }
	}); 
} 

// Function to update pagination buttons and page numbers 
function updatePagination() {  
	pageLinks.forEach((link) => { 
		const page = parseInt(link.getAttribute('data-page')); 
		link.classList.toggle('active', page === currentPage); 
	}); 
} 

mainmenu.addEventListener('click', (e) =>
{
  e.preventDefault(); 
  currentPage=1;
  updatePagination();
  displayPage(currentPage);
});

dessert.addEventListener('click', (e) =>
{
  e.preventDefault(); 
  currentPage=2;
  updatePagination();
  displayPage(currentPage);
});

drinks.addEventListener('click', (e) =>
{
  e.preventDefault(); 
  currentPage=3;
  updatePagination();
  displayPage(currentPage);
});  

// Initial page load 
displayPage(currentPage); 
updatePagination();

const menuButtonNav1 = document.querySelector('.page-link1')
const menuButtonNav2 = document.querySelector('.page-link2')
const menuButtonNav3 = document.querySelector('.page-link3');
menuButtonNav1.classList.add('active-menu-buttons');

menuButtonNav1.addEventListener('click',()=>{
    menuButtonNav1.classList.add('active-menu-buttons');
    menuButtonNav2.classList.remove('active-menu-buttons');
    menuButtonNav3.classList.remove('active-menu-buttons');
});
menuButtonNav2.addEventListener('click',()=>{
    menuButtonNav1.classList.remove('active-menu-buttons');
    menuButtonNav2.classList.add('active-menu-buttons');
    menuButtonNav3.classList.remove('active-menu-buttons');
});
menuButtonNav3.addEventListener('click',()=>{
    menuButtonNav1.classList.remove('active-menu-buttons');
    menuButtonNav2.classList.remove('active-menu-buttons');
    menuButtonNav3.classList.add('active-menu-buttons');
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


let index = 0;



