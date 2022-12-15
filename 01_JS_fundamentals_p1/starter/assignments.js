let country = 'Portugal';
let continent = 'Europe';
let population = 10;
let isIsland = false;
let language;

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

// LECTURE: let, const and var

// 1.Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'portuguese';

// 2.Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country2 = 'Uruguay';
const continent2 = 'South America';
const isIsland2 = false;

// 3.Try to change one of the changed variables now, and observe what happens
// isIsland2 = true; // TypeError: Assignment to constant variable.

///////////////////////////
// LECTURE: Basic Operators

// 1.If your country split in half, and each half would contain half the population, then how many people would live in each half?
const halfPopulation = population / 2;
console.log(halfPopulation);

// 2.Increase the populationof your country by 1 and log the result to the console
population += 1;
console.log(population);

// 2.Increase the populationof your country by 1 and log the result to the console
const finlandPopulation = 6;
console.log(population < finlandPopulation);

// 4.The average population of a country is 33 million people. Does your country have less people than the average country?
const avgPop = 33;
console.log(population < avgPop);

let description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);

//////////////////
// LECTURE: Strings and template literals

