const form = document.querySelector('form');
const listOfBooks = document.querySelector('.books-list');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const localBooks = localStorage.getItem('localLibrary');

class Library {
  constructor (name) {
    this.name = name;
     this.listOfBook;
  }
  
  setLocalInfo () {
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
  }

  addBook = (title, author) => {
    this.listOfBook.push({ title: `${title}`, author: `${author}` });
    window.localStorage.setItem('localLibrary', JSON.stringify(listOfBook));
  };

  updateStorage = () => {
    localStorage.clear();
    localStorage.setItem('localLibrary', JSON.stringify(listOfBook));
  };

  removeBook = (keyWord) => {
    const index = this.listOfBook.findIndex((x) => x.title === keyWord);
    this.listOfBook.splice(index, 1);
    this.updateStorage();
  };
}

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
