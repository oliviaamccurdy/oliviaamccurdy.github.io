const video = document.getElementById('video');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const toggleButton = document.getElementById('toggle-audio');

// Audio captions
const audioCaptions = [
  "Start Playing: Relaxing Ambient Sounds", // Caption for Audio 1
  "Start Playing: Upbeat Inspirational Music" // Caption for Audio 2
];

let isAudio1Playing = true;
let hasStarted = false;

// Function to play the video and the corresponding audio
function playVideoAndAudio() {
  video.play();

  if (isAudio1Playing) {
    audio2.pause();
    audio1.currentTime = 0; // Start audio 1 from the beginning
    audio1.play();
    toggleButton.textContent = "Now Playing: Nature in the City";
  } else {
    audio1.pause();
    audio2.currentTime = 0; // Start audio 2 from the beginning
    audio2.play();
    toggleButton.textContent = "Now Playing: The City in Nature";
  }

  isAudio1Playing = !isAudio1Playing;
}

// Event listener for button click
toggleButton.addEventListener('click', () => {
  if (!hasStarted) {
    hasStarted = true;
  }
  playVideoAndAudio();
});
