
const form = document.querySelector('form');
const addBookBtn = document.querySelector('#addBookBtn');
const listOfBooks = document.querySelector('.books-list');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const localBooks = localStorage.getItem('localLibrary');

const library = (() => {
  let listOfBook;
  if (localBooks === null) {
    listOfBook = [];
  } else {
    listOfBook = JSON.parse(localBooks);
    for (let i=0;i<listOfBook.length; i +=1) {
      //listOfBook = JSON.parse(window.localStorage.getItem('listOfBook'));
      listOfBooks.innerHTML += `
      <div class="book"}>
      <p class="bookAuthor">${listOfBook[i].author}</p>
      <h2 class="bookTitle">${listOfBook[i].title}</h2>
      <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${listOfBook[i].title}" class="removeBookBtn">Remove</button>
      </div>`
    }  
  }
  //const listOfBook = [];
  const addBook = (title, author) => {
    listOfBook.push({title: `${title}`, author: `${author}`});
  }

  const removeBook = keyWord => {
    index = listOfBook.findIndex(x => x.title === keyWord)
    listOfBook.splice(index, 1);
  }

  const storeBook = () => {
    window.localStorage.setItem('localLibrary', JSON.stringify(listOfBook));
  }

  const removeStorage = () => {
    let newLocalStorage = localBooks.filter(function(value, index, localBooks) {
      return newLocalStorage;
    })
  }

  return {listOfBook, addBook, removeBook, storeBook, removeStorage}
})();

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  library.addBook(bookTitle.value, bookAuthor.value);  
  listOfBooks.innerHTML += `
  <div class="book"}>
    <h2 class="bookTitle">${library.listOfBook[library.listOfBook.length - 1].title}</h2>
    <p class="bookAuthor">${library.listOfBook[library.listOfBook.length - 1].author}</p>
    <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${library.listOfBook[library.listOfBook.length - 1].title}" class="removeBookBtn">Remove</button>
  </div>`;

  const removeBookBtns = document.querySelectorAll('.removeBookBtn');
  removeBookBtns.forEach(button => {
  button.addEventListener('click', ()=>{
    library.removeBook(button.value);
  })});

  library.storeBook();
  form.reset();
});








