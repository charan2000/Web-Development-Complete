// jshint version:6


const superheroes = require('superheroes');
const superVillans = require("supervillains")
 
var superheroName = superheroes.random();
var supervillainName = superVillans.random();

console.log(` ${superheroName} fights with ${supervillainName} today`);