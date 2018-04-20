class Queue {
    /**
     * Создает очередь, опционально принимая элементы для добавления
     * @param {...*} [items] Добавляемые элементы
     */
    constructor(...items) {
        this.items = items;
    }

    /**
     * Возвращает количество элементов в очереди
     * @returns {number}
     */
    get size() {
        return this.items.length;
    }

    /**
     * Возвращает `true` если очередь пустая, в противном случае возвращает `false`
     * @returns {boolean}
     */
    get isEmpty() {
        return this.size === 0;
    }

    /**
     * Возвращает первый элемент в очереди
     * @returns {*}
     */
    get front() {
        return this.items[0];
    }

    /**
     * Возвращает последний элемент в очереди
     * @returns {*}
     */
    get back() {
        return this.items[this.size - 1];
    }

    /**
     * Добавляет элемент в очередь
     * @param {*} item
     */
    enqueue(item) {
        this.items.push(item);
    }

    /**
     * Удаляет первый элемент из очереди и возвращает его
     * @returns {*}
     */
    dequeue() {
        return this.items.shift();
    }
}

module.exports = Queue;
