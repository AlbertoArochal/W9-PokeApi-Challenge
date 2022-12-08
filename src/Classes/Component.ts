export class Componente {
    constructor(public element: HTMLElement) {}

    replaceElementWithTemplate(template: string) {
        this.element.innerHTML = template;
    }

    deleteElement() {
        this.element.parentNode!.removeChild(this.element);
    }

    addElement(element: HTMLElement) {
        this.element.appendChild(element);
    }
}
