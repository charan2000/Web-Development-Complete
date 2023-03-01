const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const items = carousel.querySelectorAll('.carousel-item');
const prevButton = carousel.querySelector('.carousel-button--prev');
const nextButton = carousel.querySelector('.carousel-button--next');
let currentIndex = 0;
let interval;

function startInterval() {
  interval = setInterval(() => {
    currentIndex++;
    if (currentIndex === items.length) {
      currentIndex = 0;
    }
    slide();
  }, 5000);
}

function slide() {
  container.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {  
    currentIndex = items.length - 1;
  }
  slide();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex === items.length) {
    currentIndex = 0;
  }
  slide();
});

carousel.addEventListener('mouseenter', () => {
  clearInterval(interval);
});

carousel.addEventListener('mouseleave', () => {
  startInterval();
});

startInterval();
