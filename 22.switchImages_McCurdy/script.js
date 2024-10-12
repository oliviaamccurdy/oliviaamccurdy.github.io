// Array of image paths
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
];

// Set initial image index
let currentIndex = 0;

// Function to change the image on click
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("carousel-image").src = images[currentIndex];
}
// JavaScript Document