const card = document.querySelectorAll('.card');
const cardText = document.querySelectorAll('.card__text');
const cardPopUp = document.querySelector('.testimonials__popup');
const close = document.querySelector('.testimonials__popup-close');

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
        cardPopUp.classList.toggle('testimonials__popup_active');
        card[i].classList.toggle('card_active');
        //blackLayer.classList.toggle('black-layer_active');
        cardText[i].classList.toggle('card__text_active');
    })
    blackLayer.addEventListener('click', () => {
        cardPopUp.classList.remove('testimonials__popup_active')
        //blackLayer.classList.remove('black-layer_active');
        card[i].classList.remove('card_active');
        cardText[i].classList.remove('card__text_active');
    })
    close.addEventListener('click', () => {
        cardPopUp.classList.remove('testimonials__popup_active')
       // blackLayer.classList.remove('black-layer_active');
        card[i].classList.remove('card_active');
        cardText[i].classList.remove('card__text_active');
    })
}




