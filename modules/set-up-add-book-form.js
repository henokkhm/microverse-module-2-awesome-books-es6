import renderAllBooks from './render-books.js';

const form = document.getElementById('form');

const setupAddBookFormEventHandlers = (booksList) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = e.target.elements;
    const title = inputs.title.value;
    const author = inputs.author.value;
    booksList.addBook(title, author);
    renderAllBooks();
    e.target.reset();
  });
};

export default setupAddBookFormEventHandlers;
