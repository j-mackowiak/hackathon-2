import * as model from "./search.model";
import * as index from "../../index"

const searchBooks = e => model.searchBooks(e);
const debounce = (f, d) => model.debounce(f, d);
const getBooks = () => model.getBooks(); 

const addSubmitListener = () => {
    const inputText = document.querySelector('form input');
    inputText.addEventListener('keyup', debounce(model.searchBooks, 1000));
}

const displayBooks = () => index.displayBooks();

export { searchBooks, debounce, addSubmitListener, getBooks, displayBooks };