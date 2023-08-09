// var generateName = require("sillyname");

import superheroes from "superheroes"
import generateName from "sillyname"
var sillyName = generateName();
var name = superheroes.random()

console.log(`My name is ${sillyName}.`);
console.log(`My name is ${name}.`);

//then enter the terminal node index.js and see created names