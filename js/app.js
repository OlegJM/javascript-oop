export default class App {
    /**
     * @param {HTMLElement} element
     * @param {Quiz} quiz
     */
    constructor(element, quiz) {
        this.element = element;
        this.quiz = quiz;
        this.currentQuestion = null;

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.init();
    }

    /**
     * Инициализирует объект.
     *
     * Получает доступ к DOM-элементам, устанавливает заголовок и подписывается на событие при выборе ответа.
     */
    init() {
        this.progressNode = this.element.querySelector('#progress');
        this.titleNode = this.element.querySelector('#title');
        this.scoreNode = this.element.querySelector('#score');
        this.questionNode = this.element.querySelector('#question');
        this.formNode = this.element.querySelector('#form');
        this.answersNode = this.element.querySelector('#answers');

        this.titleNode.innerText = this.quiz.title;
        this.formNode.addEventListener('submit', this.handleSubmitForm);
    }

    // /**
    //  * Обрабатывает событие при выборе ответа.
    //  *
    //  * @param {Event} event
    //  */
    // handleAnswerButtonClick(event) {
    //     const id = Number(event.target.dataset.id);
    //
    //     this.quiz.checkAnswer(id);
    //     this.displayNext();
    // }

  /**
   * Обрабатывает событие отправки формы
   *
   * @param {Event} event
   */
  handleSubmitForm(event) {
        event.preventDefault();
        console.log(event);
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
            const answerElement = document.createElement('li');
            answerElement.className = 'list-group-item';
            answerElement.dataset.id = `${index}`;
            answerElement.innerHTML = answer;
            this.answersNode.appendChild(answerElement);
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
        this.titleNode.remove();
        this.questionNode.remove();
        this.answersNode.remove();
        this.progressNode.remove();
        this.scoreNode.innerHTML = `Правильных ответов: ${this.quiz.results}`;
    }
}