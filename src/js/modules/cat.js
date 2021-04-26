export default class Cat {
    constructor(elementId) {
        this.elementId = elementId;
        this.listentClick(this.elementId);
    }

    listentClick = (elementId) => {
        $(elementId).click(() => {
            // eslint-disable-next-line no-console
            console.log('Okie');
        });
    }
}
