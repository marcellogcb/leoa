const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const container1 = document.getElementsByClassName('container1')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  container1.classList.toggle('active')
})