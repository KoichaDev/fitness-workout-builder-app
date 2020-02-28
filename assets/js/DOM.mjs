// Facade Patterns

class Dom {
  getClass = selector => document.querySelector(selector);
  getClassAll = selector => document.querySelectorAll(selector);
  getID = id => document.getElementById(id);
  getTagName = element => document.getElementsByTagName(element);
}

export { Dom };
