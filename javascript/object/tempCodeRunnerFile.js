
let bookMaker = function book(title, author, read, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read === true) {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages,  already readed!`);
        } else {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages,  not yet readed!`);
        }
    }
}

const book1 = new bookMaker('The Hobbit', 'J.R.R. Tolkien', false, 295);
book1.info();