// Global Vars
const sections = document.querySelectorAll('section');


// Helper Funcs
const lg = val => console.log(val);

// build the nav
const navbarList = document.querySelector('#navbar__list');
let frag = document.createDocumentFragment();
for (const section of sections){
    let li = document.createElement('li');
    li.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">${section.getAttribute('data-nav')}</a>`
    frag.appendChild(li)
}
navbarList.appendChild(frag);
// ---------------------------------------------------------------------------------

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active