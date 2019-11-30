import * as model from "./recent.model";
import * as view from "./recent.view";
import * as list from "../list/list.controller"

const addToUpcoming = e => model.addToUpcoming(e);
const getRecentList = () => model.getRecentList();

const displayRecent = () => view.displayRecent();

const sendToBook = e => list.sendToBook(e);

// const addRecentListener = () => {
//     const liList = document.querySelectorAll('#recentList ul li');
//     liList.forEach(el => el.addEventListener('click', list.sendToBook))
// }

export { addToUpcoming, displayRecent, getRecentList, sendToBook }