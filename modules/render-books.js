const booksListContainer = document.querySelector('#books');

const generateSingleBookHTML = (book) => {
  const li = document.createElement('li');
  const bookDetails = document.createElement('span');
  const removeBtn = document.createElement('button');

  li.classList.add('book');
  bookDetails.classList.add('book-details');
  removeBtn.classList.add('btn', 'remove-btn');

  bookDetails.innerText = `"${book.title}" by ${book.author}`;
  removeBtn.innerText = 'Remove';
  removeBtn.setAttribute('data-book-id', book.id);

  li.appendChild(bookDetails);
  li.appendChild(removeBtn);
  return li;
};

const renderAllBooks = (books) => {
  if (!books.length) {
    const noBooks = document.createElement('div');
    noBooks.classList.add('no-books-msg');
    noBooks.innerText = 'You have not added any books';
    booksListContainer.innerHTML = '';
    booksListContainer.appendChild(noBooks);
  } else {
    booksListContainer.innerHTML = '';
    books.forEach((book) => {
      booksListContainer.appendChild(generateSingleBookHTML(book));
    });
  }
};

export default renderAllBooks;