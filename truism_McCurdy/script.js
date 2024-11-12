// Array holding paths to the three videos
const videos = ["videos/video01.mp4", "videos/video02.mp4", "videos/video03.mp4"];

// Track the current video and remember playback positions for each video
let currentVideoIndex = Math.floor(Math.random() * videos.length);
let videoPositions = [0, 0, 0];
let firstClick = true;  // Tracks if this is the first click

// Access the video player element
const videoPlayer = document.getElementById("videoPlayer");

// Initialize the video player with a randomly selected video and mute it
videoPlayer.src = videos[currentVideoIndex];
videoPlayer.muted = true;  // Starts muted initially

// Function to handle switching video with sound enabled after the first click
function switchVideo() {
  // Enable sound if this is the first click
  if (firstClick) {
    videoPlayer.muted = false;
    firstClick = false;
  }

  // Save the current playback position of the current video
  videoPositions[currentVideoIndex] = videoPlayer.currentTime;

  // Randomly choose a new video that is different from the current one
  let nextVideoIndex;
  do {
    nextVideoIndex = Math.floor(Math.random() * videos.length);
  } while (nextVideoIndex === currentVideoIndex);

  // Update to the new video and set it to the remembered position
  currentVideoIndex = nextVideoIndex;
  videoPlayer.src = videos[currentVideoIndex];
  videoPlayer.currentTime = videoPositions[currentVideoIndex];
  videoPlayer.play();
}

// Event listener to save the current video's position when the page is about to close
window.addEventListener("beforeunload", () => {
  videoPositions[currentVideoIndex] = videoPlayer.currentTime;
});
