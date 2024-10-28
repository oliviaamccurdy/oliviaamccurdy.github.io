// Array of image paths to be used as background images
const backgroundImages = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg'
];

// Get all text box elements
const textBoxes = document.querySelectorAll('.text-box');

// Set up IntersectionObserver to detect when text boxes enter the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the index of the current text box (id-1, e.g., box1 = index 0)
            const index = entry.target.id.replace('box', '') - 1;
            
            // Change the background image when the text box is visible
            document.body.style.backgroundImage = `url(${backgroundImages[index]})`;
        }
    });
}, { threshold: 0.5 });

// Observe each text box
textBoxes.forEach(textBox => observer.observe(textBox));
