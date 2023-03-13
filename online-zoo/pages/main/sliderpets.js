const items = document.querySelectorAll('.slider__block');
const prevBtn = document.querySelector('.slider__button_prev');
const nextBtn = document.querySelector('.slider__button_next');
let currentItem = 0; //индекс текущей карточки,в моем случае блока,чтобы выводился первый элемент(блок)
let isEnabled = true; //задержка анимации, чтобы не было ошибки при частом нажатии

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
} //оператор процент позволяет возвращать в 0, чтобы была бесконечная карусель

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__block-active', direction);
	}); //прячем элемент,удаляя класс,используя при этом массим
}

function showItem(direction) {

	items[currentItem].classList.add('slider__block-next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('slider__block-next', direction);
		this.classList.add('slider__block-active');
		isEnabled = true;
	}); //открываем элемент,добавляя класс,используя при этом массим...directtion то направление
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left'); 
} //при нажатии на стрелку влево минусуем индекс на -1 и перемещаем элемент влево

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right'); 
} //при нажатии на стрелку вправо плюсуем индекс на +1 и перемещаем элемент вправо

prevBtn.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
}); //функция нажатия на кнопку влево

nextBtn.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
}); //функция нажатия на кнопку вправо 

////////////////Слайдер в Tectimonials


const gap = 30;
const input = document.getElementById('card__line');
const carousel = document.getElementById('testimonials__slider');

let imgWidth = document.querySelector('.card').offsetWidth;//ширина
let imgHeight= document.querySelector('.card').offsetHeight;//высота
window.addEventListener('resize', (e) => {
  width = carousel.offsetWidth;
  imgWidth = document.querySelector('.card').offsetWidth;
});

function slideMove() {
		carousel.scrollTo((imgWidth + gap) * input.value, 0);	//ширина отзыва + отступ и умнажаем на значение инпута
}

const slideFunc = () => {
	let slideIndex = +input.value;
  slideIndex += 1;
	if (slideIndex > 7) {
    slideIndex = 0;
  }
	input.value = slideIndex;
  slideMove();
}

let autoSlideInterval = setInterval(slideFunc, 10000);
let autoSlideTimeout = null;

const delayAutoSliding = () => {
  clearTimeout(autoSlideTimeout);
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;

  autoSlideTimeout = setTimeout(() => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(slideFunc, 10000);
  }, 30000);
}

carousel.addEventListener('click', delayAutoSliding);
input.addEventListener('input', slideMove);