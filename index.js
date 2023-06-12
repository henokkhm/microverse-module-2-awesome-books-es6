import './modules/single-page-app-navigation.js';
import BooksList from './modules/BookList.js';
import renderAllBooks from './modules/render-books.js';

const awesomeBooks = new BooksList();

// TEMPORARY
awesomeBooks.addBook("Alice's Adventures in Wonderland", 'Lewis Carroll');
awesomeBooks.addBook('Don Quixote', 'Miguel de Cervantes');
awesomeBooks.addBook('One Hundred Years of Solitude', 'Gabriel Garcia Marquez');
awesomeBooks.addBook('Moby Dick', 'Herman Melville');
awesomeBooks.addBook('War and Peace', 'Leo Tolstoy');
awesomeBooks.addBook('The Odyssey', 'Homer');
awesomeBooks.addBook('The Divine Comedy', 'Dante Alighieri');
awesomeBooks.addBook('The Catcher in the Rye', 'J. D. Salinger');
awesomeBooks.addBook('Pride and Prejudice', 'Jane Austen');
awesomeBooks.addBook('The Adventures of Huckleberry Finn', 'Mark Twain');

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
