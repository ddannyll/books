const booksContainer = document.querySelector('#books-container') 

let myLibrary = []

function Book(title, author, pages, read) {
    this.name = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        str = `${this.name} by ${this.author}, ${this.pages} pages,\ `
        this.read ? str += 'has been read' : str += 'not read yet'
        return str
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function createBookElement(title, author, pages, read) {
    const bookCard = document.createElement('div')
    bookCard.className = 'book-card'
    
    const titleElem = document.createElement('h3')
    titleElem.innerText = title
    bookCard.appendChild(titleElem)
    
    const authorElem = document.createElement('p')
    authorElem.innerText = author
    bookCard.appendChild(authorElem)

    const pagesElem = document.createElement('p')
    pagesElem.innerText = pages + 'pages'
    bookCard.appendChild(pagesElem)

    const readElem = document.createElement('button') 
    read ? readElem.innerText = 'Unread' : readElem.innerText = 'Finish reading'
    bookCard.appendChild(readElem)
    
    const removeBook = document.createElement('button')
    removeBook.innerText = 'Remove'
    bookCard.appendChild(removeBook)

    return bookCard
}

function showLibrary() {
    for (let book of myLibrary) {
        const bookCard = createBookElement(book.name, book.author, book.pages, book.read)
        booksContainer.appendChild(bookCard)
    }
}


addBookToLibrary('title', 'author', 3, false)

addBookToLibrary('title', 'author2', 99, false)

addBookToLibrary('johns book', 'john', 99, true)

showLibrary()


