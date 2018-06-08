import { createElement } from "./dom";

export default class View {
    constructor(model) {
        this.todos = model;

        this.bindEvents = this.bindEvents.bind(this);
        this.init();
    }

    init() {
        this.todoForm = document.getElementById('todo-form');
        this.addInput = document.getElementById('add-input');
        this.todoList = document.getElementById('todo-list');
        this.todoItems = document.querySelectorAll('.todo-item');

        this.todoForm.addEventListener('submit', this.addTodoItem);
        this.todoItems.forEach(item => bindEvents(item));
    }

    createTodoItem(title) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox' });
        const label = createElement('label', { className: 'title' }, title);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Изменить');
        const deleteButton = createElement('button', { className: 'delete' }, 'Удалить');
        const listItem = createElement('li', { className: 'todo-item' }, checkbox, label, editInput, editButton, deleteButton);

        this.bindEvents(listItem);

        return listItem;
    }

    bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');

        checkbox.addEventListener('change', this.toggleTodoItem);
        editButton.addEventListener('click', this.editTodoItem);
        deleteButton.addEventListener('click', this.deleteTodoItem);
    }

    toggleTodoItem({ target }) {
        const listItem = target.parentNode;
        listItem.classList.toggle('completed');
    }

    editTodoItem({ target }) {
        const listItem = target.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');

        if (isEditing) {
            title.innerText = editInput.value;
            target.innerText = 'Изменить';
        } else {
            editInput.value = title.innerText;
            target.innerText = 'Сохранить';
        }

        listItem.classList.toggle('editing');
    }

    deleteTodoItem({ target }) {
        const listItem = target.parentNode;
        this.todoList.removeChild(listItem);
    }
}