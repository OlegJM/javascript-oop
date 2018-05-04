const TextInput = require('../text-input');

class EmailInput extends TextInput {
    /**
     * @param {{ tag: string, id: string, className: string, type: string, name: string, disabled: boolean, required: boolean, value: string, minlength: string, maxlength: string }} args 
     */
    constructor(args) {
        super(args);
    }
    
    /**
     * Проверяет валидность значения
     * 
     * Email RegEx: `/^[a-zA-Z0-9'._%+-]+@[a-zA-Z0-9-][a-zA-Z0-9.-]*\.[a-zA-Z]{2,63}$/`
     * 
     * Для проверки можно использовать метод `regex.test(value)`
     * @returns {boolean}
     */
    get isValid() {
        const emailRegExp = /^[a-zA-Z0-9'._%+-]+@[a-zA-Z0-9-][a-zA-Z0-9.-]*\.[a-zA-Z]{2,63}$/;

        return super.isValid && emailRegExp.test(this.value);
    }
}

module.exports = EmailInput;