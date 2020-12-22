  export default function createElement(tagOfElem, contentOfElem, attributeOfElem) {
    const htmlElem = document.createElement(tagOfElem);
  
    htmlElem.textContent = contentOfElem;
  
    for (let item in attributeOfElem) {
      htmlElem.setAttribute(item, attributeOfElem[item]);
    }
  
    return htmlElem;
  };

