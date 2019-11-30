const debounce = (func, delay) => {
    let inDebounce;
    return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
    }
};

   
const searchBooks = () => {
    const inputText = document.querySelector('form input');

    const arr = [];

    fetch("https://openlibrary.org/search.json?title=" + inputText.value.replace(/\s/g, "+"))
    .then(res => res.json())
    .then(json => {
        for(let i=0; i<6; i++) {
        arr.push(json.docs[i]);
        }
    });
    
    return arr;
}

export { searchBooks, debounce };