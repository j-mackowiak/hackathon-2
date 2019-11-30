import * as ctrl from "./recent.controller"
let recentList = [];

const addToUpcoming = e => {
    if (!recentList.find(element => element.id === e.id)) {
        if (recentList.length < 3) {
            recentList.push(e);
        } else {
            recentList.shift();
            recentList.push(e);
        }
        ctrl.addRecentListener();
    }
}

const getRecentList = () => recentList;

export { addToUpcoming, getRecentList }