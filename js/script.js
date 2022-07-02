const navArrow = document.querySelector('.nav-arrow');
const navUl = document.querySelector('.nav-ul');

navArrow.addEventListener('click', () => {
    navArrow.classList.toggle('active');
    navUl.classList.toggle('active');
})
