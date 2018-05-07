export default class App {
    /**
     * @param {HTMLElement} element
     * @param {Quiz} quiz
     */
    constructor(element, quiz) {
        this.element = element;
        this.quiz = quiz;
        this.currentQuestion = null;

        this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
        this.init();
    }

    /**
     * Инициализирует объект.
     *
     * Получает доступ к DOM-элементам, устанавливает заголовок и подписывается на событие при выборе ответа.
     */
    init() {
        this.progressNode = document.getElementById('progress');
        this.titleNode = document.getElementById('title');
        this.scoreNode = document.getElementById('score');
        this.questionNode = document.getElementById('question');
        this.answersNode = document.getElementById('answers');

        this.titleNode.innerText = this.quiz.title;
    }

    /**
     * Обрабатывает событие при выборе ответа.
     *
     * @param {Event} event
     */
    handleAnswerButtonClick(event) {
        this.quiz.checkAnswer(event);
        this.displayNext();
    }

    /**
     * Отображает следующий вопрос или отображает результат если тест заверешен.
     */
    displayNext() {
        if (this.quiz.hasEnded) {
            return this.displayScore();
        }

        this.quiz.currentIndex += 1;
        this.currentQuestion = this.quiz.currentQuestion;
        this.displayQuestion();
        this.displayAnswers();
        this.displayProgress();
    }

    /**
     * Отображает вопрос.
     */
    displayQuestion() {
        this.questionNode.innerHTML = this.currentQuestion.text;
    }

    /**
     * Отображает ответы.
     */
    displayAnswers() {
        this.answersNode.innerHTML = '';
        this.currentQuestion.answers.forEach((answer, index) => {
            const answerEl = document.createElement('li');
            answerEl.className = 'list-group-item list-group-item-action';
            answerEl.innerText = answer;
            answerEl.addEventListener('click', () => this.handleAnswerButtonClick(index));
            this.answersNode.appendChild(answerEl);
        });
    }

    /**
     * Отображает прогресс ('Вопрос 1 из 5').
     */
    displayProgress() {
        this.progressNode.innerText = `Вопрос ${this.quiz.currentIndex + 1} из ${this.quiz.questionCount}`;
    }

    /**
     * Отображает результат теста.
     */
    displayScore() {
        this.questionNode.parentNode.removeChild(this.questionNode);
        this.answersNode.parentNode.removeChild(this.answersNode);
        this.progressNode.parentNode.removeChild(this.progressNode);
        this.scoreNode.innerHTML = `Правильных ответов: ${this.quiz.results} из ${this.quiz.questionCount}`;
    }
}