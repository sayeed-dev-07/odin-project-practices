// Factory Functions and the Module Pattern

// 1. Scoopfuls of scopes

let globalAge = 34;

function printingAge(age) {
    var varAge = 21;
    if (age > 1) {
        const constAge = age * 2;
        console.log(constAge);
    }

    console.log(constAge);
}


printingAge(globalAge)
console.log(varAge);


// Closures 

function makeAdding(firstNumber) {
    const first = firstNumber;
    return function addAgain(secondNumber) {
        const second = first + secondNumber;
        return second;
    }
}

const add5 = makeAdding(10);
console.log(add5(5));


// factory function 


const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;

console.log(zerothEle);
console.log(firstEle);


function addNum(value) {
    let num = value;

    let getNum = () => { return num; }
    let increaseNum = () => { return num++; }

    return { num, getNum, increaseNum }
}

let five  = addNum(5);
five.increaseNum()
five.increaseNum()
five.increaseNum()
console.log(five.getNum());
console.log(five.num);
console.log({num : five.num, anotherNum : five.getNum()});


// IIFE exercise

const Formatter = (function() {
    let timesRun = 0;
  
    const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
    const setTimesRun = () => { 
      log("Setting times run");
      timesRun++;
    }
  
    const makeUppercase = (text) => {
      log("Making uppercase");
      setTimesRun();
      return text.toUpperCase();
    };
    const getTImesRun  = ()=> timesRun;
  
    return {
      makeUppercase,
      getTImesRun,
    }
  })();

console.log(Formatter.makeUppercase('sayeed'));
console.log(Formatter.makeUppercase('sayeed'));
console.log(Formatter.getTImesRun());


