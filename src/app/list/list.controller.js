import* as list from './list.model';
import* as view from './list.view';
import * as index from '../../index';

const getBooks =()=> index.getBooks();
const diplayBooks =() => view.displayBooks();

export{getBooks,diplayBooks}