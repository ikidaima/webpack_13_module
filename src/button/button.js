import './button.css';
import createElement from '../creatElement';

const START_VALUE = 0;
const CLASS_MODIFIER = 'button--red';
const ATTRIBUTE_OF_BUTTON = {
  class: 'button',
  type: 'button'
};

export default class Button {
  constructor() {
    this.buttonValue = START_VALUE;
  }

  render(selectorOfParentElem) {
    const parentElem = document.querySelector(selectorOfParentElem);

    if ( !this.buttonElem ) {
      this._creatButtonElem();
    }

    parentElem.append(this.buttonElem);
  }

  _creatButtonElem() {
    this.buttonElem = createElement('button', this.buttonValue, ATTRIBUTE_OF_BUTTON);

    this.buttonElem.addEventListener('click', this._onButtonClick.bind(this));
  }

  _onButtonClick(event) {
    event.target.textContent = ++this.buttonValue;

    if (this.buttonValue == 10) {
      import('./dynamicButton.js')
        .then(moduleDynamicButton => {
          moduleDynamicButton.addClass(event.target, CLASS_MODIFIER);
        })
    }

  }

}