const videos = ['v1.mp4', 'v2.mp4'];
let currentVideo = 0;

const videoElement = document.getElementById('video');
const buttons = [
  document.getElementById('btn-deo'),
  document.getElementById('btn-wash')
];

function playVideo(index) {
  currentVideo = index;
  videoElement.src = videos[index];
  videoElement.play();

  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

videoElement.addEventListener('ended', () => {
  currentVideo = (currentVideo + 1) % videos.length;
  playVideo(currentVideo);
});

buttons[0].addEventListener('click', () => playVideo(0));
buttons[1].addEventListener('click', () => playVideo(1));

playVideo(0);
const reviews = [
  "Proved that natural deos do work just as well as antiperspirant",
  "A next-level deodorant that is kind to your skin & the planet",
  "Wild makes a mundane moment that little bit more satisfying",
  "Best subscription box for natural deodorant",
  "Obsessed with the gorgeous scents"
];

const cards = document.querySelectorAll(".wr");
const textContainer = document.getElementById("review-text");
let current = 0;
let interval;

function showReview(index) {
  // Remove active, focused, and hovered from all cards
  cards.forEach(card => {
    card.classList.remove("active", "focused", "hovered");
  });

  // Add active + focused to the selected card
  const activeCard = cards[index];
  activeCard.classList.add("active", "focused");

  // Update the review text with fade-in effect
  textContainer.style.opacity = 0;
  setTimeout(() => {
    textContainer.innerHTML = `<p>"${reviews[index]}"</p>`;
    textContainer.style.opacity = 1;
  }, 200);

  // Update the current card index
  current = index;
}

function startAutoSwitch() {
  interval = setInterval(() => {
    const next = (current + 1) % reviews.length;
    showReview(next);
  }, 4000); // Switch every 4 seconds
}

function stopAutoSwitch() {
  clearInterval(interval);
}

// Event listeners for hovering over cards
cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    showReview(index);              // Show review and apply focused style
    card.classList.add("hovered");  // Apply lift effect
    stopAutoSwitch();               // Stop auto-switch when user interacts
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hovered"); // Remove lift effect
    startAutoSwitch();                // Start auto-switch again
  });

  card.addEventListener("click", () => {
    showReview(index);               // Trigger review on click
    stopAutoSwitch();                // Stop auto-switch on click
  });
});

// Initial setup to start with the first review
showReview(0);
startAutoSwitch(); // Auto switch starts when the page loads
