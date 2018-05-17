export default class Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     */
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }

    /**
     * Проверяет правильность ответа.
     *
     * @param {number|number[]|string} answer
     * @returns {boolean}
     */
    isCorrectAnswer(answer) {
        return answer.length !== 0;
    }
}
