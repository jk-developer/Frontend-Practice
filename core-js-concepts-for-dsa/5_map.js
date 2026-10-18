//////////// ------- 6. Map collection in JavaScript ------------- ////////////

// Map is a collection of key-value pairs where keys can be of any data type (primitive or non-primitive) and values can also be of any data type. 
// Map maintains the insertion order of the key-value pairs and allows us to iterate over the keys, values, or entries in the order they were added. 
// Map is an iterable object and can be used with for...of loop, forEach method, and other iterable methods.

/// // Creating a Map
const map = new Map();

// Adding key-value pairs to the Map
map.set("name", "John");
map.set("age", 30);
map.set(true, "boolean");
map.set(1, "number");
map.set(null, "null");
map.set(undefined, "undefined");
map.set({ key: "value" }, "object");
map.set([1, 2, 3], "array");

// Getting the size of the Map
console.log(map.size); // returns 9

// Getting the value of a key in the Map
console.log(map.get("name")); // returns "John"
console.log(map.get(1)); // returns "number"
console.log(map.get({ key: "value" })); // returns undefined because object reference is different

// Checking if a key exists in the Map
console.log(map.has("age")); // returns true
console.log(map.has("gender")); // returns false

// Deleting a key-value pair from the Map
map.delete("age");
console.log(map.has("age")); // returns false

// Iterating over the Map using for...of loop
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Iterating over the Map using forEach method
map.forEach((key, value) => {
  console.log(`${key}: ${value}`);
});

// Clearing all key-value pairs from the Map
map.clear();
console.log(map.size); // returns 0

// Map methods - set(), get(), has(), delete(), clear(), keys(), values(), entries(), forEach()