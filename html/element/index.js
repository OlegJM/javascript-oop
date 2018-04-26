const EventEmitter = require('../event-emitter');

class Element extends EventEmitter {
    /**
     * @param {{ tag: string, id: string, className: string }} args
     */
    constructor({ tag, id, className = '' }) {
        super();
        this.tag = tag;
        this.id = id;
        this._classNames = [];
        this.addClass(className);
    }

    /**
     * Возвращает строку с названиями CSS классов.
     * 
     * @returns {string}
     */
    get className() {
        return this._classNames.join(' ');
    }

    /**
     * Добавляет CSS класс.
     * 
     * @param {string} className 
     */
    addClass(className) {
        const tmpClassName = className.trim();

        if (!this.hasClass(tmpClassName) && tmpClassName !== '') {
          this._classNames.push(className);
        }
    }

    /**
     * Удаляет CSS класс.
     * 
     * @param {string} className 
     */
    removeClass(className) {
      this._classNames = this._classNames.filter(name => name !== className);
    }

    /**
     * Возращает `true` или `false` в зависимости от начилия CSS класса.
     * 
     * @param {string} className
     * @returns {boolean}
     */
    hasClass(className) {
      return this._classNames.some(name => name === className);
    }

    /**
     * Добавляет или удаляет CSS класс в зависимости от его наличия.
     * 
     * @param {string} className 
     */
    toggleClass(className) {
      this.hasClass(className)
        ? this.removeClass(className)
        : this.addClass(className);
    }
}

module.exports = Element;