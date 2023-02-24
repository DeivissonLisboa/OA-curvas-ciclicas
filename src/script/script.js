const container = document.querySelector(".container")
const progress = document.getElementById("progress-bar")
const upBtn = document.querySelector(".up")

window.addEventListener("scroll", () => {
  progress.style.width = `${
    (this.scrollY / (container.scrollHeight - this.innerHeight)) * 100
  }%`

  if (window.scrollY > 0) {
    upBtn.style.opacity = 0.7
  } else {
    upBtn.style.opacity = 0
  }
})

upBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})
