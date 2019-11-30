import * as ctrl from './list.controller';
const displayBooks = () => {
    const listBooks = document.querySelector('#searchList ul');
    listBooks.innerHTML = '';
    
    const books = ctrl.getBooks();
    
    books.forEach(book => {
        const liBook = document.createElement('li');
        liBook.innerText = book.title;
        listBooks.appendChild(liBook);
    });
  
};

export {displayBooks}