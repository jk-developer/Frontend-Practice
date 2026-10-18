/////////// -------- 7. Set Collection in JavaScript ------------- ///////////

// Set is a collection of unique values. It can hold any value of any data type. 
// It is an iterable object, which means we can loop through its elements. 
// It is also an ordered collection, which means the order of the elements is preserved.

// Creating a Set
const set = new Set();

// Adding values to the Set
set.add(1);
set.add(2);
set.add(3);
set.add(2); // duplicate value, will not be added
set.add("hello");
set.add({ name: "John" });
set.add([1, 2, 3]);

// Getting the size of the Set
console.log(set.size); // returns 6

// Checking if a value exists in the Set
console.log(set.has(2)); // returns true
console.log(set.has(4)); // returns false

// Deleting a value from the Set
set.delete(2);
console.log(set.has(2)); // returns false

// Iterating over the Set using for...of loop
for (const value of set) {
  console.log(value);
}

// Iterating over the Set using forEach method
set.forEach((value) => {
  console.log(value);
});

// Clearing all values from the Set
set.clear();
console.log(set.size); // returns 0

// Set methods - add(), delete(), has(), clear(), forEach()