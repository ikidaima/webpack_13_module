import './index.html';
import './style.css';
import Button from './button/button'

const rootElem = document.querySelector('.js-root');

const button = new Button;
const button2 = new Button;

button.render(rootElem);
button2.render(rootElem);
