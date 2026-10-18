////////// ---------  1. Variables - var, let and const  ------------////////////

if(true) {
    var a = 1;
    let b = 2;
}

console.log(a); // 1 , since it is declared with var, it is function scoped and accessible outside the block
console.log(b); // ReferenceError: b is not defined, since it is declared with let, it is block scoped and not accessible outside the block

const c = 3;
// c = 4; // TypeError: Assignment to constant variable, since it is declared with const, it is block scoped and not accessible outside the block
const arr = [1, 2, 3];
arr.push(4); // allowed, since we are not reassigning the variable, but modifying the array
console.log(arr); // [1, 2, 3, 4]

arr = [5, 6, 7]; // TypeError: Assignment to constant variable, since we are trying to reassign the variable

// similarly for objects, we can modify the properties of the object, but we cannot reassign the object itself
const obj = { name: "John" };
obj.name = "Jane"; // allowed
console.log(obj); // { name: "Jane" }

obj = { name: "Bob" }; // TypeError: Assignment to constant variable


////////// ---------  2. Primitive & Non-Primitive (Reference) Data Types  ------------////////////

// Primitive Data Types: string, number, boolean, undefined, null, symbol, bigInt
// Non-Primitive (Reference) Data Types: object, array, function

// Primitive Data Types are immutable, meaning their values cannot be changed. When we assign a primitive value to a variable, the variable holds the actual value. When we assign the value of one variable to another, a copy of the value is made. Changing the value of one variable does not affect the other.

let x = 10;
let y = x; // y is assigned a copy of the value of x
y = 20; // changing the value of y does not affect x
console.log(x); // 10
console.log(y); // 20

// Non-Primitive (Reference) Data Types are mutable, meaning their values can be changed. When we assign a non-primitive value to a variable, the variable holds a reference to the value in memory. When we assign the value of one variable to another, both variables refer to the same object in memory. Changing the value of one variable affects the other.

let obj1 = { name: "John" };
let obj2 = obj1; // obj2 is assigned a reference to the same object in memory as obj1
obj2.name = "Jane"; // changing the value of obj2 affects obj1
console.log(obj1.name); // "Jane"
console.log(obj2.name); // "Jane"   

// Type checking of primitive and non-primitive data types can be done using typeof operator. 
// For primitive data types, typeof returns the type of the value. 
// For non-primitive data types, typeof returns "object" for objects and arrays, and "function" for functions.
typeof 10; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (this is a known famous historical bug in JavaScript)
typeof Symbol("id"); // "symbol"
typeof BigInt(10); // "bigint"
typeof NaN; // "number" - NaN is a special value that represents "Not-a-Number". It is of type number

typeof func === "function"; // true - check if the variable is a function
typeof obj === "object"; // true - check if the variable is an object
typeof arr === "object"; // true - check if the variable is an array, but it is not a reliable way to check for arrays, since typeof returns "object" for arrays as well. Instead, we can use Array.isArray() method to check if a variable is an array.
Array.isArray(arr); // true - check if the variable is an array
arr.length, str.length, obj.keys.length // check the length of an array, string and object keys respectively



// 3. Type Conversion and Coercion
// Type Conversion is the process of converting a value from one data type to another. It can be done explicitly using built-in functions or methods, or implicitly by JavaScript when it encounters a value of a different type in an expression.

// Explicit Type Conversion
let num = 10;
let str = String(num); // converts number to string
console.log(str); // "10"
console.log(typeof str); // "string"

let str2 = "20";
let num2 = Number(str2); // converts string to number
console.log(num2); // 20
console.log(typeof num2); // "number"

// Implicit Type Coercion
let result1 = "The answer is " + 42; // number is coerced to string
console.log(result1); // "The answer is 42"

let result2 = 5 * "10"; // string is coerced to number
console.log(result2); // 50

let result3 = true + 1; // boolean is coerced to number (true -> 1)
console.log(result3); // 2

let result4 = null + 1; // null is coerced to number (null -> 0)
console.log(result4); // 1

let result5 = undefined + 1; // undefined is coerced to NaN
console.log(result5); // NaN    


/// Truthy and Falsy Values

// In JavaScript, values can be classified as truthy or falsy based on how they are evaluated in a boolean context. 
// Falsy values are values that evaluate to false when converted to a boolean. 
// The falsy values in JavaScript are: false, 0, -0, "", null, undefined, and NaN. 
// All other values are considered truthy.

// Math important utility methods
Math.abs(-5); // 5
Math.ceil(4.2); // 5
Math.floor(4.8); // 4
Math.round(4.5); // 5
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.random(); // random number between 0 and 1
Math.sqrt(16); // 4
Math.pow(2, 3); // 8

let min = Infinity;
let max = -Infinity;

const arr5 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < min) {
        min = arr5[i];
    }
    if (arr5[i] > max) {
        max = arr5[i];
    }
}

console.log(min); // 1
console.log(max); // 5