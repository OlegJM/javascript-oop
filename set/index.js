class Set {
  /**
   * Создает сет, опционально принимая элементы для добавления
   * @param {...*} [items] Добавляемые элементы
   */
  constructor(...items) {
    this.items = [];

    items.forEach(item => {
      this.add(item);
    });
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
    if (!this.has(item)) {
      this.items.push(item);
    }
  }

  /**
   * Проверяет наличие элемента в сете
   * @param {*} item
   * @returns {boolean}
   */
  has(item) {
    return this.values.includes(item);
  }

  /**
   * Удаляет элемент из сета и возвращает `true` если элемент удален и `false` если нет
   * @param {*} item
   * @returns {boolean}
   */
  remove(item) {
    const index = this.values.indexOf(item);

    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }

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
    this.items = new Set(...this.values, ...set.values).values;
    return this;
  }

  /**
   * Возращает сет состоящий из элементов которые присутствуют в обоих сетах
   * @param {Set} set
   * @returns {Set}
   */
  intersection(set) {
    const unionArray = new Set(...this.values, ...set.values);

    this.items = unionArray.values.filter(
      item => this.has(item) && set.has(item)
    );

    return this;
  }

  /**
   * Возращает сет состоящий из элементов присутствующих в первом сете, и отсутствующих во втором
   * @param {Set} set
   * @returns {Set}
   */
  difference(set) {
    const unionArray = new Set(...this.values, ...set.values);

    this.items = unionArray.values.filter(
      item => this.has(item) && !set.has(item)
    );

    return this;
  }

  /**
   * Возвращает `true` если сет содержит в себе все элементы из друого сета
   * @param {Set} set
   * @returns {boolean}
   */
  isSubset(set) {
    if (this.size > set.size) return false;

    return this.values.reduce((curr, item) => {
      if (curr === false) return false;
      return set.has(item);
    }, true);
  }
}

module.exports = Set;
