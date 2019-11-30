import * as ctrl from './list.controller';

const displayBooks = () => {
    const listBooks = document.querySelector('#searchList ul');
    listBooks.innerHTML = '';

    const books = ctrl.getBooks();

    books.forEach(book => {
        const id = book.cover_edition_key;
        if (id) {
            const liBook = document.createElement('li');

            liBook.innerText = book.title;
            liBook.dataset.id = id;

            listBooks.appendChild(liBook);
        }
    });

    if (books.length) addliListener();
};

const addliListener = () => {
    const liList = document.querySelectorAll('#searchList ul li');
    liList.forEach(el => el.addEventListener('click', sendToBook))
}

const displayDetails = (book) => {
    const wrapper = document.querySelector('#display-book');
    wrapper.innerHTML = "";
    const listb = document.createElement('p');
    listb.innerText = book.title;
    wrapper.appendChild(listb);

}

const sendToBook = (e) => {
    const id = e.currentTarget.dataset.id

    fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${id}&format=json&jscmd=data`)
        .then(res => res.json())
        .then(res => {
            const objPlus = res['OLID:' + id];
            objPlus.id = id;

            displayDetails(objPlus);

            ctrl.addToUpcoming(objPlus);
            ctrl.displayRecent();
        });
}

export { displayBooks, sendToBook }