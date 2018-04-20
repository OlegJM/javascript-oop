class Set {
    /**
     * Создает сет, опционально принимая элементы для добавления
     * @param {...*} [items] Добавляемые элементы
     */
    constructor(...items) {
        this.items = items;
    }

    /**
     * Возвращает количество элементов в сете
     * @returns {number}
     */
    get size() {
        return this.items.length;
    }

    /**
     * Возвращает массив элементов сета
     * @returns {Array}
     */
    get values() {
        return this.items;
    }

    /**
     * Добавляет элемент в сет
     * @param {*} item
     */
    add(item) {
        if (this.has(item)) return;

        this.items.push(item);
    }

    /**
     * Проверяет наличие элемента в сете
     * @param {*} item
     * @returns {boolean}
     */
    has(item) {
        return this.items.includes(item);
    }

    /**
     * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
     * @param {*} item
     * @returns {boolean}
     */
    remove(item) {}

    /**
     * Удаляет все элементы в сете
     */
    clear() {
        this.items = [];
    }

    /**
     * Возращает сет состоящий из элементов двух сетов
     * @param {Set} set
     * @returns {Set}
     */
    union(set) {
        return this.items.concat(set);
    }

    /**
     * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
     * @param {Set} set
     * @returns {Set}
     */
    intersection() {}

    /**
     * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
     * @param {Set} set
     * @returns {Set}
     */
    difference() {}

    /**
     * Возвращает `true` если сет содержит в себе все элементы из друого сета
     * @param {Set} set
     * @returns {boolean}
     */
    isSubset() {}
}

module.exports = Set;
