// Global Vars
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
const burger = document.querySelector(".burger")

// Helper Funcs
const isInViewport = () => {
    for (const section of sections){
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("your-active-class")
        }
        if (section.getBoundingClientRect().top < 0 || section.getBoundingClientRect().top >  window.innerHeight) {
            section.classList.remove("your-active-class")
        }
    }
}

const showLinks = () => {
    if (navbarList.style.display == "") {
        navbarList.style.display = "block"
    } else if (navbarList.style.display == "block") {
        navbarList.style.display = "none"
    } else {
        navbarList.style.display = "block"
    }
}


// build the nav
let frag = document.createDocumentFragment();
for (const section of sections){
    let li = document.createElement("li");
    li.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">${section.getAttribute("data-nav")}</a>`
    frag.appendChild(li)
}
navbarList.appendChild(frag);


// Set sections as active
window.addEventListener("scroll", isInViewport)

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
burger.addEventListener("click", showLinks)