////////// --------- 5. Objects in JavaScript  ------------////////////

// Objects are non-primitive data types that allow us to store collections of data in key-value pairs. They are mutable, meaning their values can be changed. Objects can be created using object literals, constructor functions, or the Object.create() method.

// 1. Object Literals - The most common way to create an object is by using object literals. We define an object by enclosing a comma-separated list of key-value pairs in curly braces {}.

const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};

console.log(person.name); // returns "John"
console.log(person["age"]); // returns 30

// 2. Constructor Functions - We can also create objects using constructor functions. A constructor function is a regular function that is used to create multiple instances of an object.

function Person(name, age, isEmployed) {
  this.name = name;
  this.age = age;
  this.isEmployed = isEmployed;
}

const person1 = new Person("Jane", 25, false);
console.log(person1.name); // returns "Jane"

// 3. Object.create() - We can create a new object that inherits from an existing object using the Object.create() method.

const animal = {
  type: "Mammal",
  sound: "Roar",
};

const lion = Object.create(animal);
lion.name = "Lion";
console.log(lion.type); // returns "Mammal"
console.log(lion.sound); // returns "Roar"

// 4. Object Methods - Objects can have methods, which are functions that are properties of the object.

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // returns 8
console.log(calculator.subtract(5, 3)); // returns 2

// 5. Object.keys(), Object.values(), Object.entries() - We can use these methods to get the keys, values, or key-value pairs of an object.

const keys = Object.keys(person);
console.log(keys); // returns ["name", "age", "isEmployed"]

const values = Object.values(person);
console.log(values); // returns ["John", 30, true]

const entries = Object.entries(person);
console.log(entries); // returns [["name", "John"], ["age", 30], ["isEmployed", true]]

// 6. Object Destructuring - We can extract values from an object and assign them to variables using destructuring.

const { name, age } = person;
console.log(name); // returns "John"
console.log(age); // returns 30

// 7. Spread Operator - We can use the spread operator to create a shallow copy of an object or to merge multiple objects.

const personCopy = { ...person };
console.log(personCopy); // returns { name: "John", age: 30, isEmployed: true }

const additionalInfo = { country: "USA", city: "New York" };
const mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson); // returns { name: "John", age: 30, isEmployed: true, country: "USA", city: "New York" } 

// 8. obj[key] vs obj.key - We can access the properties of an object using either dot notation or bracket notation. Dot notation is used when we know the property name, while bracket notation is used when the property name is dynamic or stored in a variable.

const propertyName = "age";
console.log(person.age); // returns 30
console.log(person[propertyName]); // returns 30 , when key is dynamic, we can use bracket notation to access the property value.

// 9. check whether a key exists in an object or not - we can use the "in" operator to check if a key exists in an object.
// method 1 - older way
console.log(person.hasOwnProperty("name")); // returns true
console.log(person.hasOwnProperty("height")); // returns false

// method 2 new way
Object.hasOwn(person, "name"); // returns true
Object.hasOwn(person, "height"); // returns false

// method 3
console.log("name" in person); // returns true
console.log("height" in person); // returns false


// Delete a key from an object - we can use the delete operator to remove a property from an object.
delete person.isEmployed;
delete person["age"];
delete obj[key]; // when key is dynamic, we can use bracket notation to delete the property from the object.
console.log(person); // returns { name: "John", age: 30 }

// Iterating over an object - we can use a for...in loop to iterate over the properties of an object.
// method 1 - for...in loop
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// method 2 - Object.keys() and forEach
Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// method 3 - Object.entries() and forEach
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// method 4  using for...of loop with Object.entries()
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Important Note
// Object keys are always strings or symbols. If we use a non-string value as a key, it will be converted to a string. For example, if we use a number as a key, it will be converted to a string.
// example
const obj = {};
obj[1] = "one"; // key is number, will be converted to string, so obj["1"] or obj[1] will both return "one"
obj[true] = "boolean"; // key is boolean, will be converted to string
obj[null] = "null"; // key is null, will be converted to string
console.log(obj); // returns { "1": "one", "true": "boolean", "null": "null" }


// Object vs Map in JavaScript - Objects and Maps are both used to store key-value pairs, but they have some differences. 
// Objects have a prototype and can have inherited properties, while Maps do not. 
// Maps can have keys of any type, while object keys are always strings or symbols. (without converting to string)
// Maps also maintain the order of their entries, while objects do not guarantee order.

const map = new Map();
map.set(1, "one"); // key is number
map.set(true, "boolean"); // key is boolean
map.set(null, "null"); // key is null
console.log(map); // returns Map(3) { 1 => 'one', true => 'boolean', null => 'null' }


// Biggest mistakes to avoid
// Using obj[key] truthiness to check existence

if (obj[key]) {
  // key exists
} else {
  // key does not exist
}

// This breaks when the stored value is falsy (e.g., 0, "", false, null, undefined). Instead, use the "in" operator or Object.hasOwn() method to check for key existence.
