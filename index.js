import './modules/single-page-app-navigation.js';
import BooksList from './modules/BookList.js';
import renderAllBooks from './modules/render-books.js';
import setupAddBookFormEventHandlers from './modules/set-up-add-book-form.js';

const awesomeBooks = new BooksList();

setupAddBookFormEventHandlers(awesomeBooks);

const booksListContainer = document.querySelector('#books');

booksListContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const id = e.target.dataset.bookId;
    awesomeBooks.removeBook(id);
    booksListContainer.innerHTML = '';
    renderAllBooks(awesomeBooks.books);
  }
});

window.addEventListener('load', renderAllBooks(awesomeBooks.books));
