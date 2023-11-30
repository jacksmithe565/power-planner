/*
 * Filename: sophisticated_code.js
 * Content: Complex JavaScript code demonstrating various concepts
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Static method to compare the age of two people
  static compareAge(person1, person2) {
    return person1.age - person2.age;
  }
}

// Create objects using the Person class
const person1 = new Person("John Doe", 30);
const person2 = new Person("Jane Smith", 25);

// Call the greet method on the objects
person1.greet(); // Output:  Hello, my name is John Doe and I am 30 years old.
person2.greet(); // Output:  Hello, my name is Jane Smith and I am 25 years old.

// Inheritance example: Employee class extending Person
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`);
  }
}

// Create an object using the Employee class
const employee1 = new Employee("Mark Johnson", 35, "Software Engineer");

// Call the greet and introduce methods on the object
employee1.greet(); // Output: Hello, my name is Mark Johnson and I am 35 years old.
employee1.introduce(); // Output: Hello, my name is Mark Johnson, I am 35 years old and I work as a Software Engineer.

// Example of higher-order function: map
const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example of asynchronous programming: Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error);
  });

// Complex algorithm: Fibonacci sequence using recursion
const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibSeries = [];
for (let i = 0; i < 10; i++) {
  fibSeries.push(fibonacci(i));
}

console.log(fibSeries); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// ... continue with more sophisticated code ...
// ... remaining code goes here ...