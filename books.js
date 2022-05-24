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

function addBookToLibrary() {
    let title = prompt('title?')
    let author = prompt('author?')
    let pages = +prompt('pages?')
    let read = Boolean(prompt('read?'))
    
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary()
