import* as list from './list.model';
import* as view from './list.view';
import * as index from '../../index';
import * as recent from '../recent/recent.controller'

const getBooks =()=> index.getBooks();

const diplayBooks =() => view.displayBooks();

const addToUpcoming = e => recent.addToUpcoming(e);

export{getBooks, diplayBooks, addToUpcoming}