const container = document.querySelector(".container")
const progress = document.getElementById("progress-bar")

window.addEventListener("scroll", () => {
  progress.style.width = `${
    (this.scrollY / (container.scrollHeight - this.innerHeight)) * 100
  }%`
})
