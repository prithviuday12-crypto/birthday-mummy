const images = [
  "1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg",
  "8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  slide.style.opacity = 0;

  setTimeout(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
    slide.style.opacity = 1;
  }, 800);
}, 3500);

/* Mobile audio unlock */
document.body.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  music.play();
});

