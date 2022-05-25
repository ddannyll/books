const container = document.querySelector('.container')
const booksContainer = document.querySelector('.books-container') 
const addBookForm = document.querySelector('.add-book-form')
const addBookBtn = document.querySelector('.add-book')
const closeBookForm = document.querySelector('.close-book-form')

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

function createBookElement(title, author, pages, read, id) {
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


    // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
    // Read Switch Toggle
    const switchLabel = document.createElement('label')
    switchLabel.setAttribute('for', `switch-${id}`)
    switchLabel.className = 'switch'
    switchLabel.innerHTML = `<input class="switch-input" type="checkbox" id="switch-${id}"> 
                             <div class="switch-fill"><p>Unread</p><p>Read</p></div>`
    bookCard.appendChild(switchLabel)

    // -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

    const removeBook = document.createElement('button')
    removeBook.innerText = 'Remove'
    bookCard.appendChild(removeBook)

    return bookCard
}

function showLibrary() {
    // Reset books-container HTML
    let book = booksContainer.lastElementChild
    while (book) {
        booksContainer.removeChild(book)
        book = booksContainer.lastElementChild
    }

    // Add books to books-container HTML
    for (let i = 0; i < myLibrary.length; i++) {
        book = myLibrary[i]
        const bookCard = createBookElement(book.name, book.author, book.pages, book.read, i)
        booksContainer.appendChild(bookCard)

    }
}

function focusMain() {
    container.removeChild(container.querySelector('.dim'))
    addBookForm.classList.add('hidden')
}


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
// Event Listeners

addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let data = new FormData(e.target)
    let read = false
    if (data.get('read') === 'on') read = true
    addBookToLibrary(data.get('title'), data.get('author'), +data.get('pages'), read)
    showLibrary()
    focusMain()
})

addBookBtn.addEventListener('click', () => {
    const dim = document.createElement('div')
    dim.className = 'dim'
    container.appendChild(dim)
    addBookForm.classList.remove('hidden')
})

closeBookForm.addEventListener('click', focusMain)

addBookToLibrary('phat chronicles', 'visal ken', 420, true)


showLibrary()


