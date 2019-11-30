import* as view from './list.view';
import * as index from '../../index';
import * as recent from '../recent/recent.controller'

const getBooks =()=> index.getBooks();

const diplayBooks =() => view.displayBooks();
const sendToBook = e => view.sendToBook(e); 

const addToUpcoming = e => recent.addToUpcoming(e);
const displayRecent = () => recent.displayRecent();

export{getBooks, diplayBooks, sendToBook, addToUpcoming, displayRecent}