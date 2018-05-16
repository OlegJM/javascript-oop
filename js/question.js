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
        if (answer.length === 0) {
            return false;
        }

        let result = false;

        switch (this.type) {
            case 'multiple':
                if (this.correctAnswer.length === answer.length) {
                    result = answer.every(item => this.correctAnswer.includes(item));
                }
                break;
            case 'single':
                result = answer[0] === this.correctAnswer;
                break;
            case 'open':
                result = answer.toLowerCase() === this.correctAnswer.toLowerCase();
                break;
            default:
                throw new Error('Неизвестный тип ответа');
        }

        return result;
    }

    renderAnswer(id, text) {
        const label = document.createElement('label');
        return `<label>${text}</label>`;
    }
}
