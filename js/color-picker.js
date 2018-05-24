import { getColorAsString } from './utils.js';

const baseClass = 'color-picker';
const colors = [
  'red',
  'green',
  'blue'
];

export default class ColorPicker {
    constructor({ element, handleAddColor = () => {} }) {
        this.element = element;

        this.closeBtn = null;
        this.addBtn = null;

        this.handleAddColor = handleAddColor;

        this.currentColor = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.init();
    }

    init() {
        this.closeBtn = this.element.querySelector('.color-picker__close-button');
        this.closeBtn.addEventListener('click', this.close.bind(this));

        this.addBtn = this.element.querySelector('.color-picker__add-button');
        this.addBtn.addEventListener('click', () => this.handleAddColor(this.currentColor));

        this.colorPreview = this.element.querySelector('.color-picker__preview');

        colors.forEach((color) => {
            const colorSlider = this.element.querySelector(`#${color}`);
            colorSlider.addEventListener('input', this.handleChangeColor.bind(this));
        });

        this.updateColorPreview();
    }

    open() {
        this.element.classList.add('open');
    }

    close() {
        this.element.classList.remove('open');
    }

    handleChangeColor({ target: { id, value } }) {
        this.currentColor[id] = value;

        this.updateColorPreview();
    }

    handleAddColor() {

    }

    updateColorPreview() {
        this.colorPreview.style.backgroundColor = getColorAsString(this.currentColor);
    }
}