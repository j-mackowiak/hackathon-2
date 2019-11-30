import*as list from './list.controller';
const displayBooks = () => {
    const listBooks = document.getElementById('js-books');
    listElement.innerHTML = '';
    const books = list.getBooks();
    books.forEach(books => {
        const libooks = document.createElement('li');
        listBooks.innerText = books.name;
        liElement.appendChild(listBooks);
        
    });
};

export {displayBooks}