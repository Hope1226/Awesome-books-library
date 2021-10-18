
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

  const removeBook = keyWord => {
    index = listOfBook.findIndex(x => x.title === keyWord)
    listOfBook.splice(index, 1);
  }


  return {listOfBook, addBook, removeBook}
})();

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  library.addBook(bookTitle.value, bookAuthor.value);  
  listOfBooks.innerHTML += `
  <div class="book"}>
    <h2 class="bookTitle">${library.listOfBook[library.listOfBook.length - 1].title}</h2>
    <p class="bookAuthor">${library.listOfBook[library.listOfBook.length - 1].author}</p>
    <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${library.listOfBook[library.listOfBook.length - 1].title}" class="removeBookBtn">Remove</button>
  </div>`

  const removeBookBtns = document.querySelectorAll('.removeBookBtn');
  removeBookBtns.forEach(button => {
  button.addEventListener('click', ()=>{
    library.removeBook(button.value);
  })});


  form.reset();
});








