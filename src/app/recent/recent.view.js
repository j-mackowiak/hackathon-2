import * as ctrl from "./recent.controller";

const displayRecent = () => {
    const listRecent = document.querySelector('#recentList ul');
    listRecent.innerHTML = '';

    const recentBooks = ctrl.getRecentList();

    recentBooks.forEach(book => {
        const liBook = document.createElement('li');
        liBook.innerText = book.title;
        listRecent.appendChild(liBook);
    });
};



export { displayRecent }