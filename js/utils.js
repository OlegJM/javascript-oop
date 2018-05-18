
export const createInputElement = ({ type = 'radio', name = 'answer', id = '', value = '', className = '' }) => {
    const input = document.createElement('input');
    input.type = type;
    input.setAttribute('name', name);
    input.className = className;
    input.id = id;
    input.value = value;
    return input;
};

export const createLabelElement = (id, text) => {
    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.setAttribute('for', id);
    label.textContent = text;
    return label;
};

export const createInputWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-check';
    return wrapper;
};
