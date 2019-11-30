import * as model from "./search.model";
import * as view from "./search.view";
import * as index from "../../index"

const searchBooks = e => model.searchBooks(e);
const debounce = (f, d) => model.debounce(f, d);
const getBooks = () => model.getBooks(); 

const addSubmitListener = () => view.addSubmitListener();

const displayBooks = () => index.displayBooks();

export { searchBooks, debounce, addSubmitListener, getBooks, displayBooks };