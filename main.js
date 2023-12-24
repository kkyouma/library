const myLibrary = [
  {
    title: "titulo ejemplo",
    author: "autor ejemplo",
    pages: "101",
    read: "90"
  },{
    title: "titulo ejemplo 2",
    author: "autor ejemplo 2",
    pages: "102",
    read: "91"
  }
];

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  console.log("Submit clicked")
  
  addBookToLibrary();
  
  //data
  
});
  
  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  // const title = this.elements['title'].value;
  // const author = this.elements['author'].value;
  
  const submit = document.getElementById('submit-book');
  

function addBookToLibrary() {
  let title = document.getElementsByName('title')[0].value;
  let author = document.getElementsByName('author')[0].value;
  let pages = document.getElementsByName('pages')[0].value;
  let read = document.getElementsByName('read')[0].value;

  let book = new Book(title, author, pages, read)
  myLibrary.push(book)

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
    
    const titleCell = document.createElement("td")
    titleCell.textContent = book.title
    row.appendChild(titleCell)
    console.log(book.title)
    
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