export default class Input {
    constructor({ type = 'radio', name = 'answer', id, value = null }) {
        this.type = type;
        this.name = name;
        this.id = id;
        this.value = value;
    }
}
