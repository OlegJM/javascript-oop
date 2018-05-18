export default class App {
    /**
     * @param {HTMLElement} element
     * @param {Quiz} quiz
     */
    constructor(element, quiz) {
        this.element = element;
        this.quiz = quiz;
        this.currentQuestion = null;

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
        this.formNode.addEventListener('submit', this.handleSubmitForm.bind(this));
    }

    /**
     * Обрабатывает событие отправки формы
     *
     * @param {Event} event
     */
    handleSubmitForm(event) {
        event.preventDefault();
        const answer = event.target.answer;
        let result;

        switch (this.currentQuestion.type) {
            case 'multiple':
            case 'single':
                result = [];
                answer.forEach((item) => {
                    if (item.checked) {
                        result.push(Number(item.value));
                    }
                });
                break;
            case 'open':
                result = answer.value;
                break;
            default:
                return;
        }

        this.quiz.checkAnswer(result);
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
        let input;

        switch (this.currentQuestion.type) {
            case 'single':
            case 'multiple':
                this.currentQuestion.answers.forEach((answer, index) => {
                    input = this.currentQuestion.createInput(index, answer);
                    this.createAnswerNode(input);
                });
                break;
            case 'open':
                input = this.currentQuestion.createInput();
                this.createAnswerNode(input);
                break;
            default:
                break;
        }
    }

    createAnswerNode(node) {
        const element = document.createElement('li');
        element.className = 'list-group-item';
        element.appendChild(node);
        this.answersNode.appendChild(element);
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
        this.formNode.remove();
        this.scoreNode.innerHTML = `Правильных ответов: ${this.quiz.results}`;
    }
}