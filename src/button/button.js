import './button.css';

const START_VALUE = 0;
const buttonElem = document.createElement('input');

buttonElem.value = START_VALUE;
buttonElem.type = 'button';
buttonElem.classList.add('button');

buttonElem.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  event.target.value++;
}

export default buttonElem;