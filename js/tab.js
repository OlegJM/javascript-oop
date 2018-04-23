const activeClassName = 'active';

export default class Tab {
    /**
     * Создает вкладку.
     * @param {{ element: HTMLElement, onActivate: Function }} args
     */
    constructor({ element, onActivate = () => {} }) {
        this.onActivate = onActivate;
        this.init(element);
    }

    /**
     * Инициализирует объект.
     * Устанавливает свойство акивности вкладки.
     * Устанавливает обработчик для обработки нажатия на элемент.
     * @private
     */
    init(element) {
        this.tabElement = element;
        this._active = this.isActive;
        this.tabElement.addEventListener('click', this.handleClick.bind(this));
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() {
        return this.tabElement;
    }

    /**
     * Возвращает ID вкладки.
     * ID вкладки берется из атрибута `hash` у элемента (`#panel-1` => `panel-1`)
     * @returns {string}
     */
    get id() {
        const hash = this.element.hash;
        return hash.substr(1);
    }

    /**
     * `get` - Возвращает `true` или `false` в зависимости от того активна вкладка или нет.
     * 
     * `set` - Устанавливает активность вкладки, добавляя или удаляя соответствующий класс
     * @returns {boolean}
     */
    get isActive() {
        return this.element.classList.contains(activeClassName);
    }

    set isActive(value) {
        this._active = value;

        this._active
            ? this.element.classList.add(activeClassName)
            : this.element.classList.remove(activeClassName);
    }

    /**
     * Вызывается при нажатии на вкладку.
     * 
     * Устанавливает активность вкладки.
     * Вызывает функцию обратно вызова, отправляя туда ссылку на текущий объект, т.е. саму вкладку.
     * @private
     * @param {Event} event 
     */
    handleClick(event) {
        this.isActive = true;
        this.onActivate(this);
    }
}