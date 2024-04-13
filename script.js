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


//script.js 
const cardsPerPage = 10; // Number of cards to show per page 
const dataContainer = document.getElementById('data-container'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const cards = 
	Array.from(dataContainer.getElementsByClassName('card4')); 

// Calculate the total number of pages 
const totalPages = Math.ceil(cards.length / cardsPerPage); 
let currentPage = 1; 

// Function to display cards for a specific page 
function displayPage(page) { 
	const startIndex = (page - 1) * cardsPerPage; 
	const endIndex = startIndex + cardsPerPage; 
	cards.forEach((card, index) => { 
		if (index >= startIndex && index < endIndex) { 
			card.style.display = 'flex'; 
		} else { 
			card.style.display = 'none'; 
		} 
	}); 
} 

// Function to update pagination buttons and page numbers 
function updatePagination() { 
	pageNumbers.textContent = 
		`Page ${currentPage} of ${totalPages}`; 
	prevButton.disabled = currentPage === 1; 
	nextButton.disabled = currentPage === totalPages; 
	pageLinks.forEach((link) => { 
		const page = parseInt(link.getAttribute('data-page')); 
		link.classList.toggle('active', page === currentPage); 
	}); 
} 

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => { 
	if (currentPage > 1) { 
		currentPage--; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for "Next" button 
nextButton.addEventListener('click', () => { 
	if (currentPage < totalPages) { 
		currentPage++; 
		displayPage(currentPage); 
		updatePagination(); 
	} 
}); 

// Event listener for page number buttons 
pageLinks.forEach((link) => { 
	link.addEventListener('click', (e) => { 
		e.preventDefault(); 
		const page = parseInt(link.getAttribute('data-page')); 
		if (page !== currentPage) { 
			currentPage = page; 
			displayPage(currentPage); 
			updatePagination(); 
		} 
	}); 
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

const slides = document.querySelectorAll('.slides');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')


let index = 0;

// Adding opacity to first dot on first time

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
  setInterval(autoPlaySlide,10000);
}

