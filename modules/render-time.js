import { luxon } from './dependencies/luxon.js';

const dateDiv = document.getElementById('date');
const copyrightYear = document.getElementById('copyright-year');

// Set copyright date on footer
copyrightYear.innerText = luxon.DateTime.now().year;

// Update the time under the header every second
setInterval(() => {
  dateDiv.innerText = luxon.DateTime.now().toFormat('LLLL L yyyy, h:mm:ss a');
}, 1000);