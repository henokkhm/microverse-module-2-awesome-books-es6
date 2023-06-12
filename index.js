import './modules/single-page-app-navigation.js';
import BooksList from './modules/BookList.js';
import renderAllBooks from './modules/render-books.js';
import initializeAddBookFormEventHandlers from './modules/initialize-add-book-form-event-handlers.js';
import initializeBookListEventHandlers from './modules/initialize-book-list-event-handlers.js';

const awesomeBooks = new BooksList();

initializeBookListEventHandlers(awesomeBooks);
initializeAddBookFormEventHandlers(awesomeBooks);

window.addEventListener('load', renderAllBooks(awesomeBooks.books));
