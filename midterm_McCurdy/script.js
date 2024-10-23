const images = [
    {
        src: 'https://via.placeholder.com/400x300?text=Image+1',
        description: 'Description for Image 1'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+2',
        description: 'Description for Image 2'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+3',
        description: 'Description for Image 3'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+4',
        description: 'Description for Image 4'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+5',
        description: 'Description for Image 5'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+6',
        description: 'Description for Image 6'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+7',
        description: 'Description for Image 7'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+8',
        description: 'Description for Image 8'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+9',
        description: 'Description for Image 9'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+10',
        description: 'Description for Image 10'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+11',
        description: 'Description for Image 11'
    },
    {
        src: 'https://via.placeholder.com/400x300?text=Image+12',
        description: 'Description for Image 12'
    }
];

let currentIndex = 0;

function updateImage() {
    const imageElement = document.getElementById('image');
    const descriptionElement = document.getElementById('description');

    imageElement.src = images[currentIndex].src;
    imageElement.alt = images[currentIndex].description;
    descriptionElement.textContent = images[currentIndex].description;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

// Initialize the first image
updateImage();
