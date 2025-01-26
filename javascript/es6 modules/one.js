export class Formatter{
    constructor(){
        this.run = 0;
    }
    setRun(){
        console.log('Sucessfull');
        this.run ++;
    }
    getRun(){
        console.log(`The run is ${this.run} times`);
    }
}

export default  'sayeed';