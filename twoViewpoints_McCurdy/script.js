const video = document.getElementById('video');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const toggleButton = document.getElementById('toggle-audio');

// Audio captions
const audioCaptions = [
  "Listening to Nature in the City", // Caption for Audio 1
  "Listening to The City in Nature" // Caption for Audio 2
];

let isAudio1Playing = true;

// Function to play the appropriate audio
function playAudioForCurrentTrack() {
  if (isAudio1Playing) {
    audio2.pause();
    audio1.currentTime = 0; // Start from the beginning
    audio1.play();
    toggleButton.textContent = audioCaptions[0];
  } else {
    audio1.pause();
    audio2.currentTime = 0; // Start from the beginning
    audio2.play();
    toggleButton.textContent = audioCaptions[1];
  }
}

// Toggle audio when the video ends and loops
video.addEventListener('ended', () => {
  isAudio1Playing = !isAudio1Playing;
  playAudioForCurrentTrack();
});

// Initialize audio on page load
playAudioForCurrentTrack();

// Optional: Allow manual toggle via button
toggleButton.addEventListener('click', () => {
  isAudio1Playing = !isAudio1Playing;
  playAudioForCurrentTrack();
});
