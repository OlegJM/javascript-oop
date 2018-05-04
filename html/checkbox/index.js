const Input = require('../input/');

class Checkbox extends Input {
    /**
     * @param {{ tag: string, id: string, className: string, type: string, name: string, disabled: boolean, required: boolean, checked: boolean }} args 
     */
    constructor({ checked = false, ...args }) {
        super({ value: checked, ...args });
    }

    /**
     * `get` - Возвращает значение элемента.
     * 
     * `set` - Устанавливает значение элемента и сообщает слушателям о событии `change`.
     * 
     * @returns {boolean}
     */
    get checked() {
        return this.value;
    }

    set checked(value) {
        this.value = value;
        this.emit('change', this.value);
    }

    /**
     * Проверяет валидность значения
     * @returns {boolean}
     */
    get isValid() {
        return super.isValid && typeof this.checked === 'boolean';
    }
}

module.exports = Checkbox;