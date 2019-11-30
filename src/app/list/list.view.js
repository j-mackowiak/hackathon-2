import * as ctrl from './list.controller';
import { getBooks } from '../search/search.model';
import { thisExpression } from '@babel/types';


const displayBooks = () => {
    const listBooks = document.querySelector('#searchList ul');
    listBooks.innerHTML = '';
    
    const books = ctrl.getBooks();
    
    books.forEach(book => {
        const id = book.cover_edition_key;
        if(id){
        const liBook = document.createElement('li');

        liBook.innerText = book.title;  
       liBook.dataset.id=id;

        listBooks.appendChild(liBook);
        }
    });
    addliListener();
  
};
const addliListener =() =>{
    const liList = document.querySelectorAll('#searchList ul li');
   liList.forEach(el => el.addEventListener('click',sendToBook))
}
const sendToBook =(e)=> {
   const id = e.currentTarget.dataset.id
   const wrapper = document.querySelector('#display-book');
   wrapper.innerHTML="";
   fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`)
   .then(res=>res.json())
   .then(res=>{
       console.log(res);
    const onebook = document.createElement('p');
     onebook.innerText =res['OLID:'+id].title;
     wrapper.appendChild(onebook);

   }
    // console.log(res['OLID:'+id].title)
   )
 

   
    

}


export {displayBooks}