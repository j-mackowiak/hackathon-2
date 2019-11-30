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
    if(books.length)addLiListener();
};

const addLiListener = () => {
    const liList = document.querySelectorAll('#searchList ul li');
    liList.forEach(li => li.addEventListener('click', toBook));
}

const toBook = () => {
    const books = ctrl.getBooks();
    ctrl.addToUpcoming(book);
}



export {displayBooks}