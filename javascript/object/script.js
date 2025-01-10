const cat = {
    name:'rocky',
    age: 5,
    'bark': function(){
        console.log('vow vow');
    
    }
}
const sayeed = cat;
console.log(sayeed.age);

// here are codes of objects tutorial from fundation course of odin project

let sayeed1 = { name : 43};
let sayeed2 = sayeed1;
sayeed2.name = 30;
console.log(sayeed2.name);
console.log(sayeed1.name);



function objectCounter(obj) {

    obj.counter += 1;
    return obj.counter;
}
function primitiveCounter(count) {
    count += 1;
    return count;
}


let object = {counter: 0};
let primitive = 0;
console.log(objectCounter(object));
console.log(primitiveCounter(primitive));



// creating objects and also viewing its benefits

let playerOne = {
    name: 'sayeed',
    marker: 'X' 
}
let playerTwo = {
    name: 'shorif',
    marker: 'O' 
}

function printName(player) {
    console.log(player.name);
}

printName(playerOne);
printName(playerTwo);

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
  }
gameOver(playerOne);  


// oop construction lesson from odin project

function playerMaker(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(`My name is ${this.name}`);
    }
}
const player1 = new playerMaker('alex', 'X');
console.log(player1.name);
console.log(player1.marker);
player1.sayName();


// object exerices from odin project

let bookMaker = function book(title, author, read, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read === true) {
            return(`${this.title} by ${this.author}, ${this.pages} pages,  already readed!`);
        } else {
            console.log(`${this.title} by ${this.author}, ${this.pages} pages,  not yet readed!`);
        }
    }
}

const book1 = new bookMaker('The Hobbit', 'J.R.R. Tolkien', false, 295);
book1.info();