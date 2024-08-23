const myLibrary = [];

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let info = `${this.title} by ${this.author}, ${this.pages} pages, `;
        if (this.read) info += `read`;
        else info += `not read yet`;
        return info;
    }
    this.index;
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

function deleteLibrary() {
    let books = document.getElementsByClassName("book");
    while(books[0]) {
        books[0].parentNode.removeChild(books[0]);
    }
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const library = document.getElementById("library");
        const book = document.createElement("div");
        book.className = "book";
        book.textContent = myLibrary[i].info();
        myLibrary[i].index = i;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(i,1);
            deleteLibrary();
            displayLibrary();
        });
        book.appendChild(deleteButton);
        library.appendChild(book);
    }
}

const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener("click", () => {
    const newBookDialog = document.getElementById("newBookForm");
    newBookDialog.show();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "295");
const harryPotter1 = new Book("Harry Potter 1", "J.R.R. Tolkein", "295", "true");
const harryPotter2 = new Book("Harry Potter 2", "J.K. Rowling", "167");

addBooktoLibrary(theHobbit);
addBooktoLibrary(harryPotter1);
addBooktoLibrary(harryPotter2);

displayLibrary();

console.log(myLibrary[2].info());