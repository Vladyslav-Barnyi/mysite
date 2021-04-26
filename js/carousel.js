const images = [
    "../img/logo1.png",
    "../img/logo2.png",
    "../img/logo3.png",
    "../img/logo4.png",
    "../img/logo5.png",
    "../img/logo6.png",
    "../img/logo7.png"
]
let currentSlide = 0;

function showSlide() {
    const carouselImage = document.querySelector('.products-carousel img');
    carouselImage.src = images[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide();
}
setInterval (nextSlide, 1000);