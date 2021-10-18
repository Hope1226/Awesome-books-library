const form = document.querySelector('form');
const addBookBtn = document.querySelector('#addBookBtn');
const listOfBooks = document.querySelector('.books-list');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');

const library = (()=> {
  const listOfBook = [];
  const addBook = (title, author) => {
    listOfBook.push({title: `${title}`, author: `${author}`});
  }

  return {listOfBook, addBook}
})();

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  library.addBook(bookTitle.value, bookAuthor.value);  
  listOfBooks.innerHTML += `
  <div class="book">
    <h2 class="bookTitle">${library.listOfBook[library.listOfBook.length - 1].title}</h2>
    <p class="bookAuthor">${library.listOfBook[library.listOfBook.length - 1].author}</p>
    <button type="button" id="removeBookBtn">Remove</button>
  </div>`
  form.reset();
});





