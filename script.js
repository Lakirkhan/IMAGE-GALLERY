let currentIndex = 0;
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",

   // Add more images as needed
];

function openImage(index) {
  currentIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImage.src = images[currentIndex];
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; // Loop back to last image
  } else if (currentIndex >= images.length) {
    currentIndex = 0; // Loop back to first image
  }
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex];
}
