
// ***************Variables and Datatype**************
// Variables
let variableName = value;
const constantName = value;

// Data Types
let number = 42;
let string = "Hello, World!";
let boolean = true;
let array = [1, 2, 3];
let object = { key: "value" };


// ***************Operators:**************

// Arithmetic Operators
let sum = 3 + 4;
let difference = 7 - 5;
let product = 2 * 6;
let quotient = 8 / 2;

// Comparison Operators
let isEqual = (x === y);
let isNotEqual = (x !== y);
let greaterThan = (a > b);
let lessThan = (a < b);

Control Flow:---------------------------
// Conditional Statements
if (condition) {
    // code to execute if condition is true
  } else if (anotherCondition) {
    // code to execute if anotherCondition is true
  } else {
    // code to execute if no conditions are true
  }
  
  // Loops
  for (let i = 0; i < 5; i++) {
    // code to repeat
  }
  
  while (condition) {
    // code to repeat while condition is true
  }
  

  Functions------------

  // Function Declaration
function functionName(parameter1, parameter2) {
    // code to execute
    return result; // optional
  }
  
  // Function Expression
  const add = function(x, y) {
    return x + y;
  };
  
  // Arrow Function
  const multiply = (a, b) => a * b;

  
  Arrays:----------------------
  // Array Declaration
let colors = ["red", "green", "blue"];

// Accessing Array Elements
let firstColor = colors[0];

// Array Methods
colors.push("yellow");   // Adds an element to the end
colors.pop();            // Removes the last element
let length = colors.length; // Returns the number of elements


Objects:------------------
// Object Declaration
let person = {
    name: "John",
    age: 30,
    isStudent: false
  };
  
  // Accessing Object Properties
  let personName = person.name;
  
  // Modifying Object Properties
  person.age = 31;
  
  // Object Methods
  Object.keys(person);      // Returns an array of keys
  Object.values(person);    // Returns an array of values

  
  Promises:----------------------
  // Promise
const myPromise = new Promise((resolve, reject) => {
    // asynchronous code
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
  
  myPromise.then((data) => {
    // code to execute on success
  }).catch((error) => {
    // code to execute on error
  });

  Async/Await:---------------
  // Async Function
async function fetchData() {
    try {
      let response = await fetch("https://api.example.com/data");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  
  Advanced Functions:---------------
// Higher-Order Function
const higherOrderFunction = (callback) => {
    // code
    callback();
  };
  
  // Closure
  const outerFunction = (x) => {
    return (y) => x + y;
  };
  const closureExample = outerFunction(5);
  console.log(closureExample(3)); // Output: 8

  ES6 Features:---------------------------------

  // Destructuring
const { prop1, prop2 } = myObject;

// Template Literals
const name = "John";
const greeting = `Hello, ${name}!`;

// Spread Operator
const newArray = [...oldArray, element];

// Rest Parameter
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

// Arrow Functions and 'this'
const myObject = {
  value: 42,
  getValue: function() {
    return () => this.value;
  }
};


Asynchronous Programming:---------------

// Callbacks
const fetchData = (url, callback) => {
    // asynchronous code
    callback(data);
  };
  
  // Promises
  const myPromise = new Promise((resolve, reject) => {
    // asynchronous code
    if (success) {
      resolve(data);
    } else {
      reject(error);
    }
  });
  
  myPromise.then((data) => {}).catch((error) => {});
  
  // Fetch API
  fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    Object-Oriented Programming (OOP):-------------------
    // Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Prototypes
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  const john = new Person("John", 30);
  john.greet();
  
  // Classes (ES6+)
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Bark, bark!");
    }
  }
  
  const myDog = new Dog("Buddy");
  myDog.makeSound();


Module System (ES6+):  -----------------------

// Exporting Module
export const myVariable = 42;
export function myFunction() { /* code */ }

// Importing Module
import { myVariable, myFunction } from './myModule';
