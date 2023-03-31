let myLibrary = [];

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

const HP = new Book('Harry Potter', 'J.K.', 594, "read");
console.log(HP.info());
