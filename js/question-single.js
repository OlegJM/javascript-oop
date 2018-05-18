import Question from './question.js';
import { createInputElement, createInputWrapper, createLabelElement } from './utils.js';

export default class QuestionSingle extends Question {
    /**
     * @param {string} type Тип вопроса
     * @param {string} text Текст вопроса
     * @param {string[]} answers Варианты ответов
     * @param {number} correctAnswer Индекс правильного ответа
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
        return super.isCorrectAnswer(answer) && answer[0] === this.correctAnswer;
    }

    createInput(id, text) {
        const wrapper = createInputWrapper();
        const input = createInputElement({
            type: 'radio',
            className: 'form-check-input',
            id,
            value: id
        });
        const label = createLabelElement(id, text);
        wrapper.appendChild(input);
        wrapper.appendChild(label);
        return wrapper;
    }
}
