import * as model from "./recent.model";
import * as view from "./recent.view";
import * as list from "../list/list.controller"

const addToUpcoming = e => model.addToUpcoming(e);
const getRecentList = () => model.getRecentList();

const displayRecent = () => view.displayRecent();

const sendToBook = e => list.sendToBook(e);

export { addToUpcoming, displayRecent, getRecentList, sendToBook }