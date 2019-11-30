import * as ctrl from './list.controller';
import { getBooks } from '../search/search.model';
import { thisExpression } from '@babel/types';


const displayBooks = () => {
    const listBooks = document.querySelector('#searchList ul');
    listBooks.innerHTML = '';
    
    const books = ctrl.getBooks();
    
    books.forEach(book => {

        const liBook = document.createElement('li');

        liBook.innerText = book.title;
        const id = book.cover_edition_key;
        
        liBook.dataset.id=id;

        listBooks.appendChild(liBook);

    });
    addliListener();
  
};
const addliListener =() =>{
    const liList = document.querySelectorAll('#searchList ul li');
   liList.forEach(el => el.addEventListener('click',sendToBook))
}
const sendToBook =(e)=> {
   const id = e.currentTarget.dataset.id
   
   fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`)
   .then(res=>res.json())
   .then(res=>console.log(res['OLID:'+id].title))
       
  const wrapper = document.querySelector('#display-book ul');
     wrapper.innerText = '';
    const onebook = document.createElement('li');
     onebook.innerText =res.title

   
    

}


export {displayBooks}