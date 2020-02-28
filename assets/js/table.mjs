import { Dom } from './DOM.mjs';

const DOM = new Dom();
class Table {
  changeGridTable = () => {
    DOM.getTagName('body')[0].style.margin = '0';
    DOM.getTagName('body')[0].style.display = 'grid';
    DOM.getTagName('body')[0].style.gridTemplateColumns = '1fr';
    DOM.getTagName('body')[0].style.gridTemplateRows = '1fr';
    DOM.getTagName('body')[0].style.gridColumnGap = '0px';
    DOM.getTagName('body')[0].style.gridRowGap = '0px';
    DOM.getTagName('body')[0].style.gridTemplateAreas = '"main"';
  };
}

export { Table };
