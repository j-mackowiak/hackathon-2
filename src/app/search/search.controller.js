import * as model from "./search.model";
import * as view from "./search.view";

const searchBooks = e => model.searchBooks(e);
const debounce = (f, d) => model.debounce(f, d);

const addSubmitListener = () => view.addSubmitListener();

export { searchBooks, debounce, addSubmitListener };