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