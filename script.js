let myLibrary = [];
const addBookForm = document.querySelector('.add-form form');
const addBookBtn = document.querySelector('.add-book');
const overlay = document.querySelector('.overlay');

addBookBtn.onclick = displayForm;
overlay.onclick = removeOverlay;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `The book ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
}

function addBookToLibrary() {
}

function displayForm() {
  addBookForm.classList.add('active');
  overlay.classList.add('active');
}

function removeOverlay() {
  addBookForm.classList.remove('active');
  overlay.classList.remove('active');
}

const HP = new Book('Harry Potter', 'J.K.', 594, "read");
console.log(HP.info());
