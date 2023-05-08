let myLibrary = [];
const addBookForm = document.querySelector('.add-form form');
const bookCards = document.querySelector('.book-cards');
const addBookBtn = document.querySelector('.add-book');
const overlay = document.querySelector('.overlay');

addBookBtn.onclick = displayForm;
overlay.onclick = removeOverlay;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `The book ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayForm() {
  addBookForm.classList.add('active');
  overlay.classList.add('active');
}

function removeOverlay() {
  addBookForm.classList.remove('active');
  overlay.classList.remove('active');
}

function displayBook(newBook) {
  let read = 'checked';
  if (newBook.read === null) read = '';

  bookCards.innerHTML += `<div class=card> 
                            <div class=title>${newBook.title}</div> 
                            <div class=author>${newBook.author}</div>
                            <div class=pages>${newBook.pages} pages</div>
                            <div class=read>
                                <label for=read>Read?</label>
                                <input type=checkbox name=read id=toggle ${read}/>
                            </div>
                          </div>`
}

document.querySelector('.add-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const read = formData.get('read');

  const newBook = new Book(name, author, pages, read);
  removeOverlay();
  addBookToLibrary(newBook);
  displayBook(newBook);
});