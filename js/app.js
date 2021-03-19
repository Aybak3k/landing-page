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
        if (section.getBoundingClientRect().top < -255) {
            section.classList.remove("your-active-class")
        }
    }
}

const showLinks = () => {
    if (window.getComputedStyle(navbarList).display === "none") {
        navbarList.style.display = "flex"
    } else if (window.getComputedStyle(navbarList).display === "flex") {
        navbarList.style.display = "none"
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