// Drawer Functionality
const drawer = document.querySelector('.drawer');
const drawerToggle = document.querySelector('.drawer-toggle');
const drawerOverlay = document.querySelector('.drawer-overlay');
const drawerClose = document.querySelector('.drawer-close');

drawerToggle.addEventListener('click', () => {
  drawer.classList.add('open');
});

drawerClose.addEventListener('click', () => {
  drawer.classList.remove('open');
});

drawerOverlay.addEventListener('click', () => {
  drawer.classList.remove('open');
});

// Carousel Functionality
const carouselWrapper = document.querySelector('.carousel-wrapper');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function updateCarousel() {
  carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : items.length - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});
