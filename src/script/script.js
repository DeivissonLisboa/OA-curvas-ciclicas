const animationButton = document.getElementById("animation-button");
let animation = false;

function animationToggle() {
  animation = !animation;

  strr = "";
  if (animation) {
    strr = "PARAR";
  } else {
    strr = "COMEÇAR";
  }

  animationButton.innerText = strr;
}

animationButton.addEventListener("click", animationToggle);
