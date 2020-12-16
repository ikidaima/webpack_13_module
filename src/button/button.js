import './button.css';

const START_VALUE = 0;

export default class Button {

  render(selectorOfParentElem) {
    const parentElem = document.querySelector(selectorOfParentElem);

    if ( !this.buttonElem ) {
      this._creatButtonElem();
    }

    parentElem.append(this.buttonElem);
  }

  _creatButtonElem() {
    this.buttonElem = document.createElement('input');

    this.buttonElem.value = START_VALUE;
    this.buttonElem.type = 'button';
    this.buttonElem.classList.add('button');

    this.buttonElem.addEventListener('click', this._onButtonClick);
  }

  _onButtonClick(event) {
    event.target.value++;

    if (event.target.value == 10) {
      import('./dynamicButton.js')
        .then(obj => {
          obj.addClass(event.target, 'button--red');
        })
    }

  }

}