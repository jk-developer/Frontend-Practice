/////////// ---------  3. Array Methods  ------------////////////

// Array methods are built-in methods that can be used to manipulate arrays. Some of the commonly used array methods are:
// 1. push(x) - adds one or more elements to the end of an array and returns the new length of the array.
[1, 2, 3].push(4); // returns 4, the new length of the array [1, 2, 3, 4]

// 2. pop() - removes the last element from an array and returns that element.
[1, 2, 3].pop(); // returns 3, the last element of the array

// 3. shift() - removes the first element from an array and returns that element.
[1, 2, 3].shift(); // returns 1, the first element of the array

// 4. unshift(x) - adds one or more elements to the beginning of an array and returns the new length of the array.
[1, 2, 3].unshift(7); // returns 4, the new length of the array [7, 1, 2, 3]

// 5. splice(start, deleteCount, item1, item2, ...) - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
[1, 2, 3, 4].splice(1, 2, 5, 6); // returns [2, 3], the removed elements, and the array becomes [1,4,5,6]

// 6. slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
[1, 2, 3, 4].slice(1, 3); // returns [2, 3], a new array containing the selected elements

// 7. forEach((element, index, array) => ...) - executes a provided function once for each array element.
[1, 2, 3].forEach((element, index, array) => console.log(element)); // logs 1, 2, 3 to the console

// 8. map((element, index, array) => ...) - creates a new array populated with the results of calling a provided function on every element in the calling array.
[1, 2, 3].map((element, index, array) => element * 2); // returns [2, 4, 6]

// 9. filter((element, index, array) => ...) - creates a new array with all elements that pass the test implemented by the provided function.
[1, 2, 3, 4].filter((element, index, array) => element > 2); // returns [3, 4]

// 10. reduce((accumulator, element, index, array)) => ..., initialValue) - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
[1, 2, 3, 4].reduce((accumulator, element, index, array) => accumulator + element, 0); // returns 10

// 11. find((element, index, array) => ...) - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
[1, 2, 3, 4].find((element, index, array) => element > 2); // returns 3
// 12. findIndex((element, index, array) => ...) - returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
[1, 2, 3, 4].findIndex((element, index, array) => element > 2); // returns 2

// 13. some((element, index, array) => ...) - tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
[1, 2, 3, 4].some((element, index, array) => element > 2); // returns true

// 14. every((element, index, array) => ...) - tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
[1, 2, 3, 4].every((element, index, array) => element > 0); // returns true

// 15. includes(value) - determines whether an array includes a certain value among its entries, returning true or false as appropriate.
[1, 2, 3].includes(2); // returns true

// 16. indexOf(value) - returns the first index at which a given element can be found in the array, or -1 if it is not present.
[1, 2, 3].indexOf(2); // returns 1

// 17. lastIndexOf(value) - returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
[1, 2, 2, 3].lastIndexOf(2); // returns 2

// 18. sort(compareFunction) - sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
[10, 2, 3, 4].sort((a, b) => a - b); // returns [2, 3, 4, 10] // ascending order
[4, 5, 2, 9].sort((a, b) => b - a); // returns [9, 5, 4, 2] // descending order

// can we apply sort on array of strings? Yes, we can apply sort on strings. The default sort order is ascending lexicographical order.
["banana", "apple", "cherry"].sort(); // returns ["apple", "banana", "cherry"]

// How to sort single string? We can convert the string into an array of characters using split() method, then sort the array of characters using sort() method, and finally join the sorted array of characters back into a string using join() method.
"apple".split("").sort().join(""); // returns "aelpp" - sorts the characters of the string in ascending order

// sort() method can also be used to sort an array of objects based on a specific property of the object. 
// For example, we can sort an array of objects based on the age property of the object.
[{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Bob", age: 35 }].sort((a, b) => a.age - b.age); // returns [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 }] - sorts the array of objects in ascending order based on the age property

// 19. reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
[1, 2, 3].reverse(); // returns [3, 2, 1]

// 20. join(separator) - joins all elements of an array into a string and returns this string.
[1, 2, 3].join(", "); // returns "1, 2, 3"

// 21. concat(arr1, arr2, ...) - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
[1, 2].concat([3, 4]); // returns [1, 2, 3, 4]

// 22. flat(depth) - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
[1, 2, [3, 4]].flat(1); // returns [1, 2, 3, 4]
[1, 2, [3, [4, 5]]].flat(2); // returns [1, 2, 3, 4, 5]

// 23. flatMap(callback) - first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
[1, [2, 3]].flatMap(x => [x + 2]); // returns [3, 4, 5]
[1, [2, 3]].flatMap(x => x * 4); // returns [4, 8, 12]
// flatMap() performs a map() followed by one-level flattening. It does not recursively flatten nested arrays.
[1, 2, [3, [4, 5]]].flatMap(x => x * 4); [4, 8, NaN] // NaN because multiplying a nested array by 4 converts it to a string that can't be parsed as a number.

// 24. fill(targetValue) - changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
[1, 2, 3].fill(0); // returns [0, 0, 0]

// 25. concat(arr1, arr2, ...) - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
[1, 2].concat([3, 4]); // returns [1, 2, 3, 4]

// 26. Array.isArray() - determines whether the passed value is an Array.
Array.isArray([1, 2, 3]); // returns true
Array.isArray("hello"); // returns false

// 27. How to check for sparse array? 
// A sparse array is an array that has empty slots, meaning that it has some indices that do not have any values assigned to them. 
// We can check for sparse array by using the length property of the array and the number of elements in the array. 
// If the length of the array is greater than the number of elements in the array, then it is a sparse array.
// example of sparse array -
const sparseArray = [1, , 3];
console.log(sparseArray.length); // returns 3
console.log(sparseArray.filter(x => x !== undefined).length); // returns 2
console.log(sparseArray.length > sparseArray.filter(x => x !== undefined).length); // returns true, meaning that it is a sparse array

// 28. How to check for dense array?
// A dense array is an array that has no empty slots, meaning that all indices have values assigned to them. 
// We can check for dense array by using the length property of the array and the number of elements in the array.

// using in operator to check for sparse array
const arr = [1, , 3];
console.log(0 in arr); // returns true , here 0 is the index
console.log(1 in arr); // returns false, 1 is index, but it is empty slot
console.log(2 in arr); // returns true

// 30. Array Destructuring - is a feature in JavaScript that allows us to unpack values from arrays, or properties from objects, into distinct variables. It provides a concise way to extract data from arrays and objects.
// example of array destructuring -
const arr5 = [1, 2, 3];
const [a, b, c] = arr5; // a = 1, b = 2, c = 3
const [x, , z] = arr5; // x = 1, z = 3, we can skip elements by using commas
const [first, ...rest] = arr5; // first = 1, rest = [2, 3], we can use rest operator to get the remaining elements in an array
// creating a new array from existing array using destructuring
const arr6 = [4, 5, 6];
const newArr = [0, ...arr6, 7]; // newArr = [0, 4, 5, 6, 7], we can use spread operator to create a new array from existing array


// 31. what is array-like object? 
// An array-like object is an object that has a length property and indexed elements, 
// but does not have the built-in array methods.

// example of array-like object -
const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
console.log(arrayLike[0]); // returns "a"
console.log(arrayLike.length); // returns 3
console.log(Array.isArray(arrayLike)); // returns false, because it is not an array

// 27. Array.from() - creates a new, shallow-copied Array instance from an array-like or iterable object.
Array.from("hello"); // returns ["h", "e", "l", "l", "o"]
Array.from([1, 2, 3], x => x + 1); // returns [2, 3, 4]
Array.from("hello");
// ['h', 'e', 'l', 'l', 'o']

Array.from(new Set([1, 2, 2, 3]));
// [1, 2, 3]

// 1D array initialisatoin with given length
const arr1 = new Array(5); // creates an array of length 5 with empty slots [<5 empty items>]
const arr2 = new Array(5).fill(0); // creates an array of length 5 with all elements initialized to 0 [0, 0, 0, 0, 0]   
const arr3 = Array.from({ length: 3 }, (_, i) => i + 1); // creating an array of length 3 with values [1, 2, 3]
// [1, 2, 3]


// 28. Creating 2D array using Array.from()
const rows = 3;
const cols = 4;
// method 1
const twoDArray1 = Array.from({ length: rows }, () => new Array(cols).fill(0));
console.log(twoDArray1);
// method 2
const twoDArray2 = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

console.log(twoDArray2);
// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]    

// Biggest mistake - shared reference of inner array, if we use fill() method to create 2D array, then all the inner arrays will have the same reference, and changing one inner array will change all the inner arrays. So, we should use Array.from() method to create 2D array, as it creates a new array for each inner array.
const twoDArray3 = new Array(rows).fill(new Array(cols).fill(0));
console.log(twoDArray3);
// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]    

twoDArray3[0][0] = 1; // changing the first element of the first inner array
console.log(twoDArray3);
// [
//   [1, 0, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 0]
// ]    

// Why this happens? Because all the inner arrays have the same reference, so changing one inner array changes all the inner arrays.


// Must Note - Every array methods that take a callback function as an first argument, optional second argument - thisArg, and they also take three arguments for callback - currentValue(mandatory), index (optional), array(optional).
// Lists of such methods are - forEach, map, filter, some, every, find, findIndex, flatMap.
/*

Array callback methods generally pass:
(currentValue, index, array)

Methods supporting optional thisArg:
forEach, map, filter, some, every,
find, findIndex, flatMap

Exceptions:
reduce and reduceRight do NOT support thisArg.
Their callbacks receive:
(accumulator, currentValue, index, array)

For reduce/reduceRight, the optional second
argument is initialValue, not thisArg.
*/

// the callback function takes three arguments in order for callback - first argument always is currentValue(mandatory), second argument is index (optional), third argument is array(optional). 
// The currentValue is the current element being processed in the array, 
// the index is the index of the current element being processed in the array, 
// and the array is the array that forEach() was called upon.
// and they also take an optional second argument - thisArg, which is a value to use as this when executing callback.
// give example of thisArg -

const obj = { name: "John" };
[1, 2, 3].forEach(function(element) {
    console.log(element, this.name); // 1 John, 2 John, 3 John
}, obj);

// another example of thisArg -
const obj2 = { multiplier: 2 };
const numbers = [1, 2, 3];
const multipliedNumbers = numbers.map(function(element) {
    return element * this.multiplier; // this refers to obj2
}, obj2);
console.log(multipliedNumbers); // [2, 4, 6]


// and they also skip empty slots in sparse arrays, meaning that they do not call the callback function for empty slots.
// and they also do not mutate the original array, meaning that they do not change the original array, but instead return a new array.
// and they must have a return statement in the callback function, otherwise they will return undefined for that element.
// and they also have a time complexity of O(n), where n is the number of elements in the array.
// and they also have a space complexity of O(n), where n is the number of elements in the array, as they create a new array to store the results.


// Few DSA array templates 

// 1. Frequency array (26 letters) - to count the frequency of each letter in a string, 
// we can create an array of size 26 and initialize all elements to 0, then iterate through the string and increment the corresponding index in the frequency array based on the character's ASCII value.
const freq = new Array(26).fill(0);
const str = "hello";
for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - 97]++; // 97 is the ASCII value of 'a'
}
console.log(freq); // [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] - frequency of each letter in the string "hello"

// 2. Prefix sum array - to calculate the sum of elements in a subarray, we can create a prefix sum array where each element at index i represents the sum of elements from index 0 to i in the original array. Then, to get the sum of elements from index l to r, we can simply return prefixSum[r] - prefixSum[l - 1].

const n = 5;
const prefix = new Array(n).fill(0);
prefix[0] = arr[0];
for(let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
}

// 3. DP array - 1D
const dp = new Array(n).fill(-1); // initialize all elements to -1, which indicates that the value has not been computed yet

// 4. DP array - 2D
const dp2D = new Array.from({ length: n }, (_, i) => new Array(m).fill(-1)); // initialize all elements to -1, which indicates that the value has not been computed yet

// 5. Adjacency list - to represent a graph, we can create an array of size n, where each element is an array that contains the neighbors of the corresponding vertex.
const adjList = new Array(n).fill(0).map(() => []); // initialize all elements to empty arrays
for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    adjList[u].push(v);
    adjList[v].push(u); // for undirected graph
}