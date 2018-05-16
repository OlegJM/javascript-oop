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
        const answers = event.target.answer;
        const result = [];
        answers.forEach((answer) => {
            if (answer.checked) {
              result.push(Number(answer.value));
            }
        });
        // console.log(result, ...answers);
        this.quiz.checkAnswer(result);
        // this.displayNext();
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
            answerElement.appendChild(this.renderCheckbox(index, answer));
            this.answersNode.appendChild(answerElement);
        });
    }

    renderCheckbox(value, text) {
        const wrapper = document.createElement('div');
        wrapper.className = 'form-check';

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.textContent = text;
        label.setAttribute('for', value);

        const input = document.createElement('input');
        input.className = 'form-check-input';
        input.setAttribute('name', 'answer');
        input.value = value;
        input.id = value;
        input.type = 'checkbox';

        wrapper.appendChild(input);
        wrapper.appendChild(label);
        return wrapper;
    }

    renderTextInput(id) {
        const input = document.createElement('input');
        input.setAttribute('name', 'answer');
        input.value = id;
        input.type = 'text';
        return input;
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