import { Formatter } from "./one.js";
import { makeDouble } from "./two.js";
import Name from './one.js'
import moment from "moment";

let firstRun = new Formatter();
console.log(firstRun.run);
firstRun.setRun();
firstRun.setRun();
firstRun.setRun();
firstRun.setRun();
firstRun.setRun();
firstRun.setRun();
firstRun.getRun();
console.log(firstRun.run);

console.log(makeDouble(firstRun.run));
console.log(Name);

console.log(moment().format('LTS'));