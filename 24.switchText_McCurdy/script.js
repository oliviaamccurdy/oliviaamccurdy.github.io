// Array of sentences
const sentences = [
    "Aiden McLain and Liv McCurdy at Washington Park before Homecoming 2019",
    "Aiden McLain and Liv McCurdy's first picture together.",
    "Our first unofficial outing with one another.",
    "Two stars caught in each other’s orbit, just beginning to dance.",
    "Sometimes, a single moment can hint at a lifetime of memories"
];

let currentSentenceIndex = 0;

// Function to change text
function changeText() {
    // Get the text box element
    const textBox = document.getElementById("text-box");
    
    // Update the text with the current sentence
    textBox.textContent = sentences[currentSentenceIndex];
    
    // Move to the next sentence
    currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
}
