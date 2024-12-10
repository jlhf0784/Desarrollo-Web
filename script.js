const imagesContainer = document.getElementById("carousel-images");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const pauseButton = document.getElementById("pause");
const pauseIcon = document.getElementById("pause-icon");

let currentIndex = 0;
let isPaused = false;
let autoScroll;

const updateCarousel = () => {
  const width = imagesContainer.offsetWidth;
  imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
};

const nextImage = () => {
  if (!isPaused) {
    currentIndex = (currentIndex + 1) % imagesContainer.children.length;
    updateCarousel();
  }
};

const prevImage = () => {
  currentIndex =
    (currentIndex - 1 + imagesContainer.children.length) % imagesContainer.children.length;
  updateCarousel();
};
// Configuracion Carrucel //
const togglePause = () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(autoScroll);
    pauseIcon.src = "Resource/play.png"; 
    pauseIcon.alt = "Resume"; 
  } else {
    autoScroll = setInterval(nextImage, 3000); 
    pauseIcon.src = "Resource/Pause.png"; 
    pauseIcon.alt = "Pause"; 
  }
};

nextButton.addEventListener("click", nextImage);
prevButton.addEventListener("click", prevImage);
pauseButton.addEventListener("click", togglePause);

// Configurar el intervalo automático
autoScroll = setInterval(nextImage, 3000);

window.addEventListener("resize", updateCarousel);

