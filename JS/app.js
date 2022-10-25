console.log("Hello, World!");

document.getElementById("play")
        .addEventListener("click", () => {
  document.getElementById("start").hidden = true;
  document.getElementById("ask").hidden = false;
}, false);