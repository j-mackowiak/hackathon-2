import * as ctrl from "./recent.controller";

const displayRecent = () => {
    const listRecent = document.querySelector('#recentList ul');
    listRecent.innerHTML = '';

    const recentBooks = ctrl.getRecentList();

    recentBooks.forEach(book => {
        const liBook = document.createElement('li');
        liBook.innerText = book.title;

        const id = book.cover_edition_key;
        liBook.dataset.id = id;

        listRecent.appendChild(liBook);
    });

    ctrl.addRecentListener();
};



export { displayRecent }