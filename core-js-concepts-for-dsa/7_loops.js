/////////// ------------   Ways of Iterations in JavaScript. ------------ ///////////

// There are several ways to iterate over arrays and objects in JavaScript. Some of the most commonly used methods are:
// for, for...of, for...in, forEach(), map(), filter(), reduce(), some(), every(), find(), findIndex(), flatMap(), and for...of loop with Object.entries() or Object.keys() or Object.values().
// 1. for loop - is a traditional way of iterating over arrays and objects. It uses a counter variable to keep track of the current index or key.
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. for...of loop - is a modern way of iterating over arrays and other iterable objects. It uses the for...of syntax to iterate over the values of an array or other iterable object.
for (const value of arr) {
    console.log(value);
}

// 3. for...in loop - is used to iterate over the properties of an object. It uses the for...in syntax to iterate over the keys of an object.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

// 4. forEach() method - is an array method that takes a callback function as an argument and executes it for each element of the array.
arr.forEach((value, index, array) => {
    console.log(value);
});

// 5. map() method - is an array method that takes a callback function as an argument and returns a new array with the results of calling the callback function on each element of the original array.
const newArr = arr.map((value, index, array) => {
    return value * 2;
});
console.log(newArr);

// 6. filter() method - is an array method that takes a callback function as an argument and returns a new array with all the elements that pass the test implemented by the callback function.
const filteredArr = arr.filter((value, index, array) => {
    return value > 2;
});
console.log(filteredArr);

// 7. reduce() method - is an array method that takes a callback function as an argument and reduces the array to a single value by executing the callback function on each element of the array.
const sum = arr.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// 8. some() method - is an array method that takes a callback function as an argument and returns true if at least one element in the array passes the test implemented by the callback function.
const hasEvenNumber = arr.some((value, index, array) => {
    return value % 2 === 0;
});
console.log(hasEvenNumber);

// 9. every() method - is an array method that takes a callback function as an argument and returns true if all elements in the array pass the test implemented by the callback function.
const allPositiveNumbers = arr.every((value, index, array) => {
    return value > 0;
});
console.log(allPositiveNumbers);

// 10. find() method - is an array method that takes a callback function as an argument and returns the first element in the array that passes the test implemented by the callback function.
const firstEvenNumber = arr.find((value, index, array) => {
    return value % 2 === 0;
});
console.log(firstEvenNumber);

// 11. findIndex() method - is an array method that takes a callback function as an argument and returns the index of the first element in the array that passes the test implemented by the callback function.
const firstEvenNumberIndex = arr.findIndex((value, index, array) => {
    return value % 2 === 0;
});
console.log(firstEvenNumberIndex);

// 12. flatMap() method - is an array method that takes a callback function as an argument and returns a new array with the results of calling the callback function on each element of the original array, and then flattening the result by one level.
const flatMappedArr = arr.flatMap((value, index, array) => {
    return [value, value * 2];
});
console.log(flatMappedArr);

// 13. for...of loop with Object.entries() - is a modern way of iterating over the properties of an object. It uses the for...of syntax to iterate over the key-value pairs of an object.
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

// 14. for...of loop with Object.keys() - is a modern way of iterating over the properties of an object. It uses the for...of syntax to iterate over the keys of an object.
for (const key of Object.keys(obj)) {
    console.log(`${key}: ${obj[key]}`);
}

// 15. for...of loop with Object.values() - is a modern way of iterating over the properties of an object. It uses the for...of syntax to iterate over the values of an object.
for (const value of Object.values(obj)) {
    console.log(value);
}
