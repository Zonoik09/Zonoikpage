const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.style.opacity = '0';
    slide.style.display = 'none';
  });

  slides[currentSlide].style.display = 'block';
  setTimeout(() => {
    slides[currentSlide].style.opacity = '1';
  }, 100);
}

function prevSlide() {
  slides[currentSlide].style.opacity = '0';
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

function nextSlide() {
  slides[currentSlide].style.opacity = '0';
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide();

// Función para cambiar de slide automáticamente cada 5 segundos
function autoNextSlide() {
  setInterval(() => {
    nextSlide();
  }, 5000);
}

autoNextSlide();
