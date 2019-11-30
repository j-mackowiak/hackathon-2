
let recentList = [];

const addToUpcoming = e => {
    if (recentList.length < 3) {
        recentList.push(e);
    } else {
        recentList.shift();
        recentList.push(e);
    }
    console.log(!recentList.includes(e));
}


const getRecentList = () => recentList;

export { addToUpcoming, getRecentList }