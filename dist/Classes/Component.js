export class Componente {
    element;
    constructor(element) {
        this.element = element;
    }
    replaceElementWithTemplate(template) {
        this.element.innerHTML = template;
    }
    deleteElement() {
        this.element.parentNode.removeChild(this.element);
    }
    addElement(element) {
        this.element.appendChild(element);
    }
}
