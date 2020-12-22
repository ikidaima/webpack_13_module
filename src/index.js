import './index.html';
import './style.css';
import Button from './button/button'

const SELECTOR_OF_ROOT_ELEM = '.js-root';

const button = new Button();
const button2 = new Button();

button.render(SELECTOR_OF_ROOT_ELEM);
button2.render(SELECTOR_OF_ROOT_ELEM);
