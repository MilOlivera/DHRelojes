const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')
const dropdown = document.querySelector('.dropdown-container')
const dropdownLi = document.querySelector('.dropdownLi')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

    // console.log(navToggle.ariaExpanded)
    // if (navToggle.ariaExpanded  == 'true') {
    //     body.classList.add('blur')
    // }
});

dropdown.addEventListener('click', function() {
    dropdownLi.classList.toggle('show')
})