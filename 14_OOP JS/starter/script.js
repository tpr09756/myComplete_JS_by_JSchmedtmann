'use strict';
/* 
/////////////////////
// constructor function

const Person = function (firstName, birthYear) {
  //console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never do this
  //this.calcAge = function () {
  //  console.log(2037 - birthYear);
  // };
};

const tiago = new Person('Tiago', 1979);
console.log(tiago);

// 1 new empty object created
// 2 function is called, this = {}
// 3 {} linked to prototype
// 4 function automatically return {}

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

tiago.calcAge();
console.log(tiago.__proto__);
console.log(Person.prototype.isPrototypeOf(tiago));

//.PrototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(tiago.species);

console.log(tiago.hasOwnProperty('firstName'));
console.log(tiago.hasOwnProperty('species'));

console.log(tiago.__proto__);
console.log(tiago.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique);
 */
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);


bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate(); 
*/
