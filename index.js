import defaultDisplay from './modules/pageNavigation.js';
import Book from './modules/books.js';
import currentDate from './modules/currentDate.js';

const newBook = new Book();

const booksForm = document.querySelector('.new-book-form');
booksForm.addEventListener('submit', (event) => newBook.AddBooks(event));

const books = document.querySelector('.books');
books.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') newBook.removeBook(e.target.id);
});

const dateContainer = document.querySelector('.date-container');
dateContainer.innerHTML = currentDate;

window.addEventListener('load', () => {
  defaultDisplay();
  newBook.getBooks();
});
