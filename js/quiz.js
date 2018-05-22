import QuestionMultiple from './question-multiple.js';
import QuestionSingle from './question-single.js';
import QuestionOpen from './question-open.js';

export default class Quiz {
    /**
     * @param {string} title
     * @param {Question[]} questions
     */
    constructor(title, questions) {
        this.title = title;
        this.currentIndex = -1;
        this.questionCount = questions.length;
        this.results = 0;

        this.init(questions);
    }

    init(questions) {
        this.questions = questions.map((q) => {
            let question;
            switch (q.type) {
                case 'multiple':
                    question = new QuestionMultiple(q);
                    break;
                case 'single':
                    question = new QuestionSingle(q);
                    break;
                case 'open':
                    question = new QuestionOpen(q);
                    break;
                default:
                    break;
            }

            return question;
        });
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
