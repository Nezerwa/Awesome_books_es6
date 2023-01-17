const books = document.querySelector('.books');
let booksList = JSON.parse(localStorage.getItem('book')) || [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  getBooks = () => {
    const storageData = localStorage.getItem('books');
    if (storageData === undefined || storageData === null) return;
    const storageBooks = JSON.parse(storageData);
    booksList = storageBooks;
    books.innerHTML = storageBooks
      .map(
        (book, index) => `<div class=" row ${index % 2 === 0 ? 'row-bg' : ''}">
                    <span>"${book.title}"by ${book.author}</span>
                    <button type="button" class="removeButton" id=${book.id}>Remove</button>
                </div>`,
      )
      .join('');
  };

  AddBooks = (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = Math.floor(Math.random() * 10000);
    const item = new Book(id, title, author);
    booksList = [...booksList, item];
    localStorage.setItem('books', JSON.stringify(booksList));
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    this.getBooks();
  };

  removeBook = (id) => {
    if (id === null) return;
    const newBooks = booksList.filter((book) => book.id.toString() !== id.toString());
    localStorage.setItem('books', JSON.stringify(newBooks));
    this.getBooks();
  };
}
export default Book;