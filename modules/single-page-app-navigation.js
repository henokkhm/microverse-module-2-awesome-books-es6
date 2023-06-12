const navLinks = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('#nav-links');
const pages = document.querySelectorAll('.page');
let currentPage = 'book-list-page';

const updatePage = () => {
  pages.forEach((page) => {
    if (page.id === currentPage) {
      page.classList.add('current');
    } else {
      page.classList.remove('current');
    }
  });

  navLinks.forEach((navLink) => {
    if (navLink.dataset.linksTo === currentPage) {
      navLink.classList.add('current');
    } else {
      navLink.classList.remove('current');
    }
  });
};

// Call updatePage() whenever a link in the nav element is clicked
navContainer.addEventListener('click', (e) => {
  const target = e.target.dataset.linksTo;
  if (target) {
    currentPage = target;
    updatePage();
  }
});

// Call updatePage() when the document loads
updatePage();
