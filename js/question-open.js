import Question from './question.js';

export default class QuestionOpen extends Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {string[]} answers Варианты ответов
     * @param {string} correctAnswer Текст правильного ответа
     */
    constructor({ type, text, answers, correctAnswer }) {
        super(type, text);
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
        return super.isCorrectAnswer(answer) && answer.toLowerCase() === this.correctAnswer.toLowerCase();
    }

    renderAnswer(id, text) {
        const label = document.createElement('label');
        return `<label>${text}</label>`;
    }
}
