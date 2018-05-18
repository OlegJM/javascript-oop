import Question from './question.js';
import { createInputElement } from './utils.js';

export default class QuestionOpen extends Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {string[]} answers Варианты ответов
     * @param {string} correctAnswer Текст правильного ответа
     */
    constructor({ type, text, answers, correctAnswer }) {
        super(type, text);
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

    createInput() {
        return createInputElement({
            type: 'text',
            className: 'form-control'
        });
    }
}
