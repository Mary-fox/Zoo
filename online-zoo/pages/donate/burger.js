const btnBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.header__menu');
const blackLayer = document.querySelector('.black-layer')
const closeBtn = document.querySelector(".header__close");

btnBurger.addEventListener('click', () => {
    burger.classList.add('header__menu_active');
    blackLayer.classList.add('black-layer_active');
})
blackLayer.addEventListener('click', () => {
    burger.classList.remove('header__menu_active');
    blackLayer.classList.remove('black-layer_active');
})

closeBtn.addEventListener('click', () => {
    burger.classList.remove('header__menu_active');
    blackLayer.classList.remove('black-layer_active');
})