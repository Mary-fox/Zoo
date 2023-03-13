const input = document.querySelector('.amount__input-input');
const amountItems = document.querySelectorAll('.amount__item');
const amountLine = document.querySelectorAll('.donate__amount_line-item');

amountLine.forEach(item => {
	item.checked = false;
	if (input.value === item.attributes.id.value) //выводит true если идет совпадение значения инпута и item
		item.checked = true;
}); //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве

function setValueOnAmountLine (event) {
	if (input.value > 9999)
		input.value = input.value.slice(0, 4);   //замена первых четерых значений в инпуте
    amountItems.forEach(num => {
		num.classList.remove('amount__item-active'); //удаляем класс
		if (event.target.value === num.textContent.slice(1)) //добавляем класс 
			num.classList.add('amount__item-active');
	amountLine.forEach(item => {
		item.checked = false;
		if (event.target.value === item.attributes.id.value)
			item.checked = true;
		});
	});
}

function setValueInInput (event) {
	event.target.checked = true;  //событие checked
	amountItems.forEach(num => {
		num.classList.remove('amount__item-active');
		if (event.target.attributes.id.value === num.textContent.slice(1))
			num.classList.add('amount__item-active');
	});
	input.value = event.target.attributes.id.value;
}




input.addEventListener('input', setValueOnAmountLine);
amountLine.forEach(lineItem => lineItem.addEventListener('click', setValueInInput)); //событие клика для каждого элемента