import * as search from "./app/search/search.controller";
import*as list from './app/list/list.controller'

const getBooks = () => search.getBooks();

const displayBooks = () => list.diplayBooks();

search.addSubmitListener();

export { getBooks, displayBooks }