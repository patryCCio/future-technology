const navArrow = document.querySelector('.nav-arrow');
const navUl = document.querySelector('.nav-ul-wrapper');

navArrow.addEventListener('click', () => {
    navArrow.classList.toggle('active');
    navUl.classList.toggle('active');
})
