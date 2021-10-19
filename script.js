const form = document.querySelector('form');
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
    for (let i = 0; i < listOfBook.length; i += 1) {
      listOfBooks.innerHTML += `
      <div class="book"}>  
      <h2 class="bookTitle">${listOfBook[i].title}</h2>
      <p class="bookAuthor">${listOfBook[i].author}</p>
      <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${listOfBook[i].title}" class="removeBookBtn">Remove</button>
      </div>`;

      const removeBookBtns = document.querySelectorAll('.removeBookBtn');
      removeBookBtns.forEach((button) => {
        button.addEventListener('click', () => {
          library.removeBook(button.value);
        });
      });
    }
  }
  const addBook = (title, author) => {
    listOfBook.push({ title: `${title}`, author: `${author}` });
    window.localStorage.setItem('localLibrary', JSON.stringify(listOfBook));
  };

  const updateStorage = () => {
    localStorage.clear();
    localStorage.setItem('localLibrary', JSON.stringify(listOfBook));
  };

  const removeBook = (keyWord) => {
    const index = listOfBook.findIndex((x) => x.title === keyWord);
    listOfBook.splice(index, 1);
    updateStorage();
  };

  return { listOfBook, addBook, removeBook };
})();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  library.addBook(bookTitle.value, bookAuthor.value);
  listOfBooks.innerHTML += `
  <div class="book"}>
    <h2 class="bookTitle">${library.listOfBook[library.listOfBook.length - 1].title}</h2>
    <p class="bookAuthor">${library.listOfBook[library.listOfBook.length - 1].author}</p>
    <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${library.listOfBook[library.listOfBook.length - 1].title}" class="removeBookBtn">Remove</button>
  </div>`;

  const removeBookBtns = document.querySelectorAll('.removeBookBtn');
  removeBookBtns.forEach((button) => {
    button.addEventListener('click', () => {
      library.removeBook(button.value);
    });
  });
  form.reset();
});
