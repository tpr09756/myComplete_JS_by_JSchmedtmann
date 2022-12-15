'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio'; */

/* function logger() {
    console.log('My name is Tiago');
}
// calling
logger();

//////// FUNCTIONS
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(3, 2);
console.log(appleOrangeJuice) */


///////// FUNCTIONS
// function declaration
/* function calcAge(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge(1979);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1979);
console.log(age1, age2); */

// Arrow functions

/* const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1979);
console.log(age1, age2, age3)

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob')); */


///////////////////////////////////////
// Functions Calling Other Functions
/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitProcessor(2, 3))

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
   */

///////////////////////////////////////
// Introduction to Arrays
/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends);
// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift(); // First
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
 */

///////////////////////////////////////
// Introduction to Objects
/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  }; */
///////////////////////////////////////
// Dot vs. Bracket Notation
const tiago = {
    firstName: 'Tiago',
    lastName: 'Rodrigues',
    birthYear: 1979,
    job: 'teacher',
    friends: ['Pedro', 'Miguel', 'João'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - tiago.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${tiago.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};
/* console.log(tiago);
console.log(tiago.lastName);
console.log(tiago['lastName']);
const nameKey = 'Name';
console.log(tiago['first' + nameKey]);
console.log(tiago['last' + nameKey]);
// console.log(jonas.'last' + nameKey)
const interestedIn = prompt('What do you want to know about Tiago? Choose between firstName, lastName, age, job, and friends');
if (tiago[interestedIn]) {
    console.log(tiago[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
tiago.location = 'Portugal';
tiago['twitter'] = '@jonasschmedtman';
console.log(tiago); */

console.log(tiago.getSummary());