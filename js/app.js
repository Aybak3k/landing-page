// Global Vars
const sections = document.querySelectorAll("section");

// Helper Funcs
const isInViewport = () => {
    for (const section of sections){
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('your-active-class')
        }
        if (section.getBoundingClientRect().top < -255) {
            section.classList.remove('your-active-class')
        }
    }
}


// build the nav
const navbarList = document.querySelector("#navbar__list");
let frag = document.createDocumentFragment();
for (const section of sections){
    let li = document.createElement("li");
    li.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">${section.getAttribute("data-nav")}</a>`
    frag.appendChild(li)
}
navbarList.appendChild(frag);


// Set sections as active
window.addEventListener("scroll", isInViewport)
