import { Dom } from './DOM.mjs';
import { Table } from './table.mjs';

const DOM = new Dom();
const TABLE = new Table();
document.addEventListener('DOMContentLoaded', () => {
  DOM.getClass('.hide-menu').addEventListener('click', () => {
    DOM.getTagName('aside')[0].style.display = 'none';
    TABLE.changeGridTable();
  });
});
