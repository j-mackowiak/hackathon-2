import * as ctrl from "./search.controller";

const addSubmitListener = () => {
    const inputText = document.querySelector('form input');
    inputText.addEventListener('keyup', ctrl.debounce(ctrl.searchBooks, 1000));
}

export { addSubmitListener };