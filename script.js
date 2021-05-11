const hamburger = document.querySelector(".hamburger")
const navbarMobile = document.querySelector(".navbar-mobile")
const preview = document.querySelector(".preview")
const panel = document.querySelectorAll(".panel")

hamburger.addEventListener("click", () => {
  navbarMobile.classList.toggle("show")
  hamburger.classList.toggle("active")
})

panel.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses()
    panel.classList.add("active")
    panel.classList.add("overlay")
  })
})

function removeActiveClasses() {
  panel.forEach((panel) => {
    panel.classList.remove("active")
  })
}
