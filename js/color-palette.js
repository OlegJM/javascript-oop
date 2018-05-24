import { getColorAsString } from './utils.js';

export default class ColorPalette {
    constructor({ element, colors }) {
        this.element = element;
        this.colors = colors;
        this._currentColor = { red: 0, green: 0, blue: 0 };

        this.createColorElement = this.createColorElement.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.init();
    }

    init() {
        this.createPalette();
    }

    createPalette() {
        this.colors.forEach(this.createColorElement);
    }

    createColorElement(color) {
        const element = document.createElement('li');
        element.className = 'color-palette__color';
        element.style.backgroundColor = getColorAsString(color);
        element.addEventListener('click', this.handleChangeColor);
        this.element.appendChild(element);
    }

    currentColor() {
        return getColorAsString(this._currentColor);
    }

    handleChangeColor(e) {
        console.log(e);
    }

    addNewColor(color) {
        this.createColorElement(color);
    }
}
