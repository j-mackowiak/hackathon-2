import* as list from './list.model';
import* as view from './list.view'

const getBooks =()=> list.getBooks();
const diplayBooks =() => view.displayBooks();

export{getBooks,diplayBooks}