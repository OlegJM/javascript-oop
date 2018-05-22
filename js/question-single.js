import Question from './question.js';
import Input from './input-w-label.js';

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

    createInput(id, labelText) {
        const input = new Input({ type: 'radio', id, labelText });
        return input.element;
    }
}
