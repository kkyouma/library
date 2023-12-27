const form = document.querySelector('form')
const submitDelete = document.getElementById('delete-book')
const submitAdd = document.getElementById('add-book')

submitAdd.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Add book clicked");
  addBookToLibrary();
});

submitDelete.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Delete book clicked");
  const bookToDelete = Number(document.getElementsByName('delete-id')[0].value)
  deleteBook(bookToDelete)
});




//data
const myLibrary = [
  { 
    id: "0",
    title: "titulo ejemplo",
    author: "autor ejemplo",
    pages: "101",
    read: "90"
  },{
    id: "1",
    title: "titulo ejemplo 2",
    author: "autor ejemplo 2",
    pages: "102",
    read: "91"
  }
];

function Book(id, title, author, pages, read) {
  this.id = id
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.state = state //read - unread
}

let bookId = 2;

function addBookToLibrary() {
  const title = document.getElementsByName('title')[0].value;
  const author = document.getElementsByName('author')[0].value;
  const pages = document.getElementsByName('pages')[0].value;
  const read = document.getElementsByName('read')[0].value;

  const book = new Book(bookId, title, author, pages, read)
  myLibrary.push(book)

  bookId++;

  displayBook()
  cleanInputs()
}

function deleteBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id)
  if (index !== -1) {
    myLibrary.splice(index, 1)
    displayBook()
    cleanInputs()
  } else if (index === -1) {
    console.log("Ingrese un id valido")
  }
}

//client

const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
document.documentElement.className = preferredTheme;

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.classList.contains("dark") ? "light" : "dark";
  root.classList = newTheme;
  const iconTheme = `${newTheme}_mode`

  document.getElementById('theme_btn').textContent = iconTheme;
}
document.querySelector('.theme-toggle').addEventListener('click', setTheme);



const tableBody = document.getElementById('body-table')

function displayBook() {

  tableBody.innerHTML = "";

  myLibrary.forEach((book) => {
    const row = document.createElement("tr")
    row.className = 'row-book'
    row.id = `book-${book.id}`

    const idCell = document.createElement("td")
    idCell.textContent = book.id
    row.appendChild(idCell)
    
    const titleCell = document.createElement("td")
    titleCell.textContent = book.title
    row.appendChild(titleCell)
    
    const authorCell = document.createElement("td")
    authorCell.textContent = book.author
    row.appendChild(authorCell)
    
    const pagesCell = document.createElement("td")
    pagesCell.textContent = book.pages
    row.appendChild(pagesCell)
    
    const readCell = document.createElement("td")
    readCell.textContent = book.read
    row.appendChild(readCell)

    createDeleteButton(book)
    const deleteRow = createDeleteButton(book);
    row.appendChild(deleteRow);
    
    tableBody.appendChild(row)
  });
}
displayBook()


function createDeleteButton(book) {
  const deleteRow = document.createElement("td")
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete row"

  deleteBtn.setAttribute('value', `${book.id}`)
  deleteBtn.classList.add('DeleteBtn')


  deleteRow.appendChild(deleteBtn)

  return deleteRow
}


function cleanInputs() {
  const allInputs = document.getElementsByClassName('input-library')

  Array.from(allInputs).forEach ((input) => {
    input.value = ''
  })
}

const toggleDialog = document.getElementById('toggle-dialog');
const closeDialog = document.getElementById('close-dialog')
const dialog = document.getElementById('form-dialog')

toggleDialog.addEventListener ('click', () => {
  dialog.showModal();
});

closeDialog.addEventListener('click', () => {
  dialog.close()
});


