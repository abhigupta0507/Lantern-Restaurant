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
  let rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkScroll() {
  const menu = document.querySelector('.menu');
  const animatedElements = document.querySelectorAll('.animated-element');

  if (window.scrollY > 5) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-60px"; 
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


//Review Slider
const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')

let index = 0;
dots[0].style.opacity='1'

// positioning the slides
slides.forEach((slide,index)=>{
  slide.style.left=`${index*100}%`
});


// move slide function
const moveSlide = () =>{
  slides.forEach((slide)=>{
    slide.style.transform=`translateX(-${index*100}%)`;
  });
}

// remove dots opacity 1 from all dots
const removeDotsOpacity = () =>{
  dots.forEach((dot)=>{
    dot.style.opacity='.2';
  });
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
  })
});

// show the previous slide
prevBtn.addEventListener('click',()=>{
  if(index===0) return index;
  index--;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// show the next slide
nextBtn.addEventListener('click',()=>{
  if(index===slides.length-1) return index;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
});

// auto play slide
const autoPlaySlide = () =>{
  removeDotsOpacity();
  if(index===slides.length-1) index= -1;
  index++;
  dots[index].style.opacity='1'
  moveSlide();
}

window.onload=()=>{
  setInterval(autoPlaySlide,7000);
}

