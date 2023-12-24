document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  console.log("Submit clicked")
  
  addBookToLibrary();
  
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
}


//client

const table = document.getElementById("books-table")

function displayBook() {

  table.innerHTML = "";

  myLibrary.forEach((book, i) => {
    const row = document.createElement("tr")
    row.className = 'row-book'
    row.id = `book-${i}`

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
    
    table.appendChild(row)
  });
}


displayBook()