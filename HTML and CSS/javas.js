
var welcomeImage = document.getElementById("welcomeImage");
var imageSources = ["img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "/img/image1.png"]; // Array of image sources
var currentIndex = 0;
var textClasses = [
  'text-class-1',
  'text-class-2',
  'text-class-3',
  'text-class-4'
];
function changeImage() {
  welcomeImage.src = imageSources[currentIndex];
  currentIndex = (currentIndex + 1) % imageSources.length;
}

setInterval(changeImage, 3000);
