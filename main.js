//data

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

function Book(title, author, pages, read) {

}

// const title = this.elements['title'].value;
// const author = this.elements['author'].value;

const submit = document.getElementById('submit-book');

submit.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
}


//client

const table = document.getElementById("books-table")

function displayBook() {
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