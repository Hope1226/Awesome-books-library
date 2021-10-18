//const { count } = require("console");

const form = document.querySelector('form');
const addBookBtn = document.querySelector('#addBookBtn');
const listOfBooks = document.querySelector('.books-list');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const deleteBtn = document.querySelectorAll('.removeBookBtn');

const library = (()=> {
  const listOfBook = [];
  const addBook = (title, author) => {
    listOfBook.push({title: `${title}`, author: `${author}`});
  }
  const removeBook = index => {
    listOfBook.splice(index, 1);
  }

  return {listOfBook, addBook, removeBook}
})();

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  library.addBook(bookTitle.value, bookAuthor.value);  
  listOfBooks.innerHTML += `
  <div class="book">
    <h2 class="bookTitle">${library.listOfBook[library.listOfBook.length - 1].title}</h2>
    <p class="bookAuthor">${library.listOfBook[library.listOfBook.length - 1].author}</p>
    <button type="button" onclick="library.removeBook(0)" class="removeBookBtn">Remove</button>
  </div>`
  form.reset();
  
});

// deleteBtn.addEventListener('click', (event) => {
//   library.removeBook(0);
// });







