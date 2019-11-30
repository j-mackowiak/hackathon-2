
let recentList = [];

const addToUpcoming = e => {
    // if (recentList.find(element => element.title === e.)
    if (recentList.length < 3) {
        recentList.push(e);
    } else {
        recentList.shift();
        recentList.push(e);
    }
}

const getRecentList = () => recentList;

export { addToUpcoming, getRecentList }