const toggleBtn = document.querySelector(".toggle-button");
const navLink = document.querySelector(".nav-link");
const ctaButton = document.querySelector(".butn-button");
const navbar = document.querySelector(".navbar");
const heroText1 = document.querySelector(".hero-text-1")
const heroText2 = document.querySelector(".hero-text-2")
const heroText3 = document.querySelector(".hero-text-3")

toggleBtn.addEventListener('click', () =>{
    navLink.classList.toggle('active')
    ctaButton.classList.toggle('active')
    navbar.classList.toggle('active')
    toggleBtn.classList.toggle('open')
})


// document.querySelector(".hero-button").addEventListener("click", ()=>{
//     heroText.classList.toggle("gradient")
// })

function addGradient(){
    heroText1.classList.toggle("gradient")
    heroText2.classList.toggle("gradient")
    // heroText3.classList.toggle("gradient")
}

// setInterval(addGradient, 4000);