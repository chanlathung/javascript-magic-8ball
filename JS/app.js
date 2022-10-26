console.log("Hello, World!");

document.getElementById("play")
        .addEventListener("click", () => {
  document.getElementById("start").hidden = true;
  document.getElementById("ask").hidden = false;
}, false);

document.getElementById("submit-question")
        .addEventListener("click", () => {
  document.getElementById("ask").hidden = true;
  document.getElementById("ellipse").hidden = false;
}, false);