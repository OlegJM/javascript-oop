import { createInputElement, createLabelElement, createInputWrapper } from './utils.js';

export default class InputWithLabel {
    constructor({ type = 'checkbox', id = '', labelText = '' }) {
        this.init(type, id, labelText);
    }

    init(type, id, text) {
        this.element = createInputWrapper();
        const input = createInputElement({
            type: type,
            className: 'form-check-input',
            id,
            value: id
        });

        const label = createLabelElement(id, text);
        this.element.appendChild(input);
        this.element.appendChild(label);
        return this.element;
    }
}
