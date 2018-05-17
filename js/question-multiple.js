import Question from './question.js';

export default class QuestionMultiple extends Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {number[]} answers Варианты ответов
     * @param {Array} correctAnswers Массив с правильными ответами
     */
    constructor({ type, text, answers, correctAnswers }) {
        super(type, text);
        this.answers = answers;
        this.correctAnswers = correctAnswers;
    }

    /**
     * Проверяет правильность ответа.
     * 
     * @param {number} answer
     * @returns {boolean}
     */
    isCorrectAnswer(answer) {
        if (!super.isCorrectAnswer(answer) && this.correctAnswers.length !== answer.length) return false;

        return answer.every(item => this.correctAnswers.includes(item));
    }

    renderAnswer(id, text) {
        const label = document.createElement('label');
        return `<label>${text}</label>`;
    }
}
