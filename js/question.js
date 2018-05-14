export default class Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {string[]} answers Варианты ответов
     * @param {number} correctAnswer Индекс правильного ответа
     */
    constructor(type, text, answers, correctAnswer) {
        this.type = type;
        this.text = text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    /**
     * Проверяет правильность ответа.
     * 
     * @param {number} answer
     * @returns {boolean}
     */
    isCorrectAnswer(answer) {
        return answer === this.correctAnswer;
    }

    renderAnswer(id, text) {
        const label = document.createElement('label');
        return `<label>${text}</label>`;
    }
}