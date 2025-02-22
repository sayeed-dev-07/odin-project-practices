import "./style.css"
import { greeting } from "./greeting.js";
import dataXml from "./data.xml";
import dataCsv from "./data.csv";

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

console.log(greeting);
console.log(dataXml);
console.log(dataCsv);
