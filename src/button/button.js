import './button.css';

const START_VALUE = 0;

export default class Button {
  constructor() {
    this.buttonElem = creatButtonElem();
  }

  render(parent) {
    parent.append(this.buttonElem);
  }
}

function creatButtonElem() {
  const buttonElem = document.createElement('input');

  buttonElem.value = START_VALUE;
  buttonElem.type = 'button';
  buttonElem.classList.add('button');

  buttonElem.addEventListener('click', onButtonClick);

  return buttonElem;
}

function onButtonClick(event) {
  event.target.value++;

  if (event.target.value == 10) {

    import('./dynamicButton.js')
      .then(obj => {
        obj.addClass(event.target, 'button--red')
      });

  }
}