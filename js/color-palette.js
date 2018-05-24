import { getColorAsString } from './utils.js';

export default class ColorPalette {
    constructor({ element, colors }) {
        this.element = element;
        this.colors = colors;
        this.currentColor = { red: 0, green: 0, blue: 0 };
        this.currentColorStyle = getColorAsString(this.currentColor);

        this.createColorElement = this.createColorElement.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);

        this.init();
    }

    init() {
        this.createPalette();
    }

    createPalette() {
        this.colors.forEach(this.createColorElement);
    }

    createColorElement(color, index) {
        const element = document.createElement('li');
        element.className = 'color-palette__color';
        element.style.backgroundColor = getColorAsString(color);
        element.dataset.id = index;
        element.addEventListener('click', this.handleChangeColor);
        this.element.appendChild(element);
    }

    handleChangeColor({ target }) {
        const colorNodes = document.querySelectorAll('.color-palette__color');
        colorNodes.forEach((item) => {
           item.classList.remove('selected');
        });
        target.classList.add('selected');
        this.currentColorStyle = target.style.backgroundColor;
    }

    addNewColor(color) {
        this.colors = [...this.colors, color];
        this.createColorElement(color);
    }
}
