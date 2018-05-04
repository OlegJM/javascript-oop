export default class App {
    /**
     * @param {HTMLElement} element
     * @param {Quiz} quiz
     */
    constructor(element, quiz) {
        this.element = element;
        this.quiz = quiz;
        this.currentQuestion = null;
        this.questionIndex = -1;

        this.handleAnswerButtonClick = this.handleAnswerButtonClick.bind(this);
        this.init();
    }

    /**
     * Инициализирует объект.
     *
     * Получает доступ к DOM-элементам, устанавливает заголовок и подписывается на событие при выборе ответа.
     */
    init() {
        this.progress = document.getElementById('progress');
        this.title = document.getElementById('title');
        this.score = document.getElementById('score');
        this.question = document.getElementById('question');
        this.answers = document.getElementById('answers');

        this.title.innerText = this.quiz.title;
        console.log(this.quiz);
    }

    /**
     * Обрабатывает событие при выборе ответа.
     *
     * @param {Event} event
     */
    handleAnswerButtonClick(event) {
        this.quiz.checkAnswer(event);
        console.log(event);
    }

    /**
     * Отображает следующий вопрос или отображает результат если тест заверешен.
     */
    displayNext() {
        if (this.quiz.hasEnded) {
            return this.displayScore();
        }

        this.questionIndex += 1;
        this.currentQuestion = this.quiz.quiestions[this.questionIndex];
        this.displayQuestion();
        this.displayAnswers();
        this.displayProgress();
    }

    /**
     * Отображает вопрос.
     */
    displayQuestion() {
      this.question.innerText = this.currentQuestion.text;
    }

    /**
     * Отображает ответы.
     */
    displayAnswers() {
        this.currentQuestion.answers.forEach((answer, index) => {
          const answerEl = document.createElement('li');
          answerEl.className = 'list-group-item list-group-item-action';
          answerEl.innerText = answer;
          answerEl.addEventListener('click', () => this.handleAnswerButtonClick(index));
          this.answers.appendChild(answerEl);
      });
    }

    /**
     * Отображает прогресс ('Вопрос 1 из 5').
     */
    displayProgress() {

    }

    /**
     * Отображает результат теста.
     */
    displayScore() {

    }
}