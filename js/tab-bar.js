export default class TabBar {
    /**
     * Создает объект.
     * @param {{ element: HTMLElement, tabs: Tab[], onChange: Function }} args
     */
    constructor({ element, tabs, onChange = () => {} }) {
        this._tabs = tabs;
        this.onChange = onChange;

        this.init(element);
    }

    /**
     * Инициализирует объект.
     * Устанавливает обработчик для обработки активации вкладки.
     * @private
     */
    init(element) {
        this._element = element;
        this.tabs.forEach(tab => tab.onActivate = this.handleActivate.bind(this));
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() {
        return this._element;
    }

    /**
     * Возвращает массив вкладок.
     * @returns {Tab[]}
     */
    get tabs() {
        return this._tabs;
    }

    /**
     * Возвращает активную вкладку.
     * @returns {Tab}
     */
    get activeTab() {
        return this.tabs[this.activeTabIndex];
    }

    /**
     * Возвращает индекс активной вкладки.
     * @returns {number}
     */
    get activeTabIndex() {
        return this.tabs.findIndex(tab => tab.isActive === true);
    }

    /**
     * Вызывается при активации вкладки.
     * Делает все вкладки кроме активной неактивными.
     * Вызывает функцию обратно вызова, отправляя туда активную вкладку.
     * @private
     * @param {Tab} activeTab 
     */
    handleActivate(activeTab) {
        this.tabs.forEach(tab => tab.isActive = tab.id === activeTab.id);
        this.onChange(activeTab);
    }
}