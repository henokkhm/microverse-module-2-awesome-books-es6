import renderAllBooks from './render-books.js';

const booksListContainer = document.querySelector('#books');

const initializeBookListEventHandlers = (booksList) => {
  booksListContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const id = e.target.dataset.bookId;
      booksList.removeBook(id);
      booksListContainer.innerHTML = '';
      renderAllBooks(booksList.books);
    }
  });
};

export default initializeBookListEventHandlers;
