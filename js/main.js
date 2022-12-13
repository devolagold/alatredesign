const toggleBtn = document.querySelector(".toggle-button");
const navLink = document.querySelector(".nav-link");
const ctaButton = document.querySelector(".butn-button");
const navbar = document.querySelector(".navbar");
const year = document.querySelector(".year");

toggleBtn.addEventListener('click', () =>{
    navLink.classList.toggle('active')
    ctaButton.classList.toggle('active')
    navbar.classList.toggle('active')
    toggleBtn.classList.toggle('open')
})

const currentYear = new Date().getFullYear()

year.innerHTML = currentYear