const arrayOfImages = ["IMG/image1.jpg", "IMG/image2.jpg", "IMG/image3.jpg", "IMG/image4.jpg", "IMG/image5.jpg", "IMG/image6.jpg", "IMG/image7.jpg", "IMG/image8.jpg"];

function getRandomImage() {
  // Get a random index
  const randomIndex = Math.floor(Math.random() * arrayOfImages.length);

  // Get an image at the index
  const selectedImage = arrayOfImages[randomIndex];

  // Display the image
  document.getElementById("image").src = `./${selectedImage}`;

}

document.getElementById("play")
        .addEventListener("click", () => {
  document.getElementById("start").hidden = true;
  document.getElementById("ask").hidden = false;
}, false);

document.getElementById("submit_question")
        .addEventListener("click", () => {
  document.getElementById("submit_question").hidden = true;
  document.getElementById("try_again").hidden = false;
  document.getElementById("text").hidden = false;
  document.getElementById("image").hidden = false;
}, false);

