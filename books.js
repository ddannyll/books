function Book(title, author, pages, read) {
    this.name = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => {
        str = `${this.title} by ${this.author}, ${this.pages} pages,\ `
        this.read ? str += 'has been read' : str += 'not read yet'
        return str
    }
}


let theHobbit = new Book('The Hobbit', 'J.K.R Tolkein', 295, false)
console.log(theHobbit.info())
theHobbit.author = 'ME'
console.log(theHobbit.info())
console.log(theHobbit.author)
console.log(theHobbit.constructor)
console.log(theHobbit.constructor.prototype)