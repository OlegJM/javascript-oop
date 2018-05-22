export default class Quiz {
    /**
     * @param {string} title 
     * @param {Question[]} questions
     */
    constructor(title, questions) {
        this.title = title;
        this.questions = questions;
        this.currentIndex = -1;
        this.questionCount = questions.length;
        this.results = 0;
    }

    nextQuestion() {
        if (!this.hasEnded) {
            this.currentIndex += 1;
        }

        return this.currentQuestion;
    }

    /**
     * Возвращает текущий вопрос.
     * 
     * @returns {Question}
     */
    get currentQuestion() {
        return this.questions[this.currentIndex];
    }

    /**
     * Возвращает `true/false` в зависимости от того закончился тест или нет.
     * 
     * @returns {boolean}
     */
    get hasEnded() {
        return this.currentIndex + 1 >= this.questionCount;
    }

    /**
     * Проверяет правильность ответа выбранного пользователем.
     * @param {*} answer 
     */
    checkAnswer(answer) {
        this.results += this.currentQuestion.isCorrectAnswer(answer);
    }
}