
var currentIndex = 0;
var images = document.querySelectorAll("#slideshow img");
var intervalId;

function startSlideshow() {
    intervalId = setInterval(changeImage, 2000);
}

function changeImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
}

startSlideshow();