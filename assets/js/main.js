import { Dom } from './DOM.mjs';

const DOM = new Dom();

document.addEventListener('DOMContentLoaded', () => {
  DOM.getClass('.hide-menu').addEventListener('click', () => {
    DOM.getTagName('aside')[0].style.display = 'none';
  });
});
