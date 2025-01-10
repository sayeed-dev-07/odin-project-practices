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

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(`My name is ${this.name}`);
    }
}
const player1 = new Player('alex', 'X');
const player2 = new Player('shorif', 'O');
console.log(player1.name);
console.log(player1.marker);
player1.sayName();


Player.prototype.sayMyMarker = function() {
    console.log(`My marker is ${this.marker}`);
};
player1.sayMyMarker();
player2.sayMyMarker();
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

// prototypal inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Student(name, level) {
    this.name = name;
    this.level = level;
}

Student.prototype.className = function(){
    console.log(`I'm a ${this.level} student`);
}
Object.setPrototypeOf(Student.prototype, Person.prototype);

let student1 = new Student('sayeed', '8th');
let student2 = new Student('shorif', '10th');

student1.className();
student1.greet();

student2.className();
student2.greet();


let array = new Array();

// constructor method example

function Hero(name, level){
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('sayeed', '9th')
console.log(hero1);

Hero.prototype.greet = function(){
    return `Hello im ${this.name} and im ${this.level}'s hero!` 
}

console.log(hero1.greet());

function warrior(name, level, weapon){
    Hero.call(this, name, level);
    this.weapon = weapon;

}
warrior.prototype.attack = function(){
    return `The warrior attacks with ${this.weapon}`
}

function healer(name, level, portion){
 Hero.call(this, name, level);
 this.portion = portion;
}

healer.prototype.heal = function(){
    return `The healer heals with ${this.portion} portion`
}

const hero3 = new warrior('Bjorn', 1, 'axe');
const hero4 = new healer('Kanin', 1, 'cure');

console.log(hero3);
console.log(hero4);

console.log(hero3.attack());
console.log(hero4.heal());