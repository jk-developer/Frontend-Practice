//-------- 1. map method of array --------//

const data = [
    {
        name: "Jitendra Kumar",
        age: 28
    },
    {
        name: "Narender Kumar",
        age: 22
    },
    {
        name: "Ranjan Kumar",
        age: 26
    },
    {
        name: "Neha",
        age: 27
    },
    {
        name: "Satvik",
        age: 2
    },
    {
        name: "Shiva",
        age: 1
    }
]

const mappedData = data.map((d) => {
    return {
        ...d,
        canVote: d.age > 18 ? true : false
    }
})

// console.log(mappedData);

/*Interview points:
- callback.call(thisArg, value, index, arr) preserves the callback signature and thisArg.
- if (i in arr) skips holes and preserves them in the output.
- Object(this) allows array-like objects, not just arrays.
*/

Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this); 
  const len = arr.length;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }

  return result;
};

const customMapData = data.myMap((d) => {
    return {
        ...d,
        canVote: d.age > 18 ? true : false
    }
})

// console.log(customMapData)


//--------- 2. filter ----------///

const filteredData = data.filter((d) => {
    return d.age > 18;
})

console.log(filteredData)

/*

Interview points:
- Unlike map, filter returns a dense array containing only the matching elements.
- The callback's return value is evaluated for truthiness.
- Sparse array holes are skipped; thisArg is supported.

*/

Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const len = arr.length;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (i in arr) {
      const value = arr[i];

      if (callback.call(thisArg, value, i, arr)) {
        result.push(value);
      }
    }
  }

  return result;
};


const customFilteredData = data.myFilter((d) => {
    return d.age > 18;
})

console.log(customFilteredData)


//--------- 3. reduce method polyfill ----------///

const sumOfAllAges = data.reduce((acc, d ) => {
    return acc + d.age
}, 0)

console.log(sumOfAllAges)


/*

Interview points:
- Use arguments.length >= 2 to distinguish an omitted initial value from an explicitly provided undefined.
- Without an initial value, the first existing element becomes the accumulator.
- An empty array with no initial value must throw a TypeError.
- Skip sparse-array holes and pass (accumulator, currentValue, index, array) to the callback.
- Unlike map and filter, reduce does not accept a thisArg.

*/
Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const len = arr.length;
  let i = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // Find the first existing element.
    while (i < len && !(i in arr)) {
      i++;
    }

    if (i >= len) {
      throw new TypeError(
        "Reduce of empty array with no initial value"
      );
    }

    accumulator = arr[i++];
  }

  for (; i < len; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};



const customSumOfAllAges = data.myReduce((acc, d ) => {
    return acc + d.age
}, 0)

const appendNames = data.myReduce((acc, d) => {
    return acc + d.name
}, "")

// console.log(appendNames)

// console.log(customSumOfAllAges)


//// ----------- 4. flat method polyfill -----------////

// flat(depth) — flattens nested arrays up to the specified depth.



Array.prototype.myFlat = function (depth = 1) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  const arr = Object(this);
  const result = [];
  const maxDepth = Math.max(Number(depth) || 0, 0);

  function flatten(items, currentDepth) {
    for (let i = 0; i < items.length; i++) {
      if (!(i in items)) continue;

      const value = items[i];

      if (Array.isArray(value) && currentDepth > 0) {
        flatten(value, currentDepth - 1);
      } else {
        result.push(value);
      }
    }
  }

  flatten(arr, Math.floor(maxDepth));
  return result;
};


const flattenRes1 = [1, [2, [3, 4]]].myFlat();
console.log(flattenRes1)

const flattenRes2 = [1, [2, [3, 4]]].myFlat(2);
console.log(flattenRes2)


/////-------  flatMap polyfill method ------ ///////
// - flatMap applies a callback to each existing element and flattens the returned arrays by one level only.


Array.prototype.myFlatMap = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError("Cannot read properties of null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = Object(this);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) continue;

    const mapped = callback.call(thisArg, arr[i], i, arr);

    if (Array.isArray(mapped)) {
      for (let j = 0; j < mapped.length; j++) {
        if (j in mapped) {
          result.push(mapped[j]);
        }
      }
    } else {
      result.push(mapped);
    }
  }

  return result;
};

// example 1 
const sentences = ["Hello world", "JavaScript is fun"];

// Using map() gives a nested array:
const mapped = sentences.map(str => str.split(" "));
console.log(mapped); 
// Output: [["Hello", "world"], ["JavaScript", "is", "fun"]]

// Using flatMap() gives a flat array:
const flatMapped = sentences.myFlatMap(str => str.split(" "));
console.log(flatMapped); 
// Output: ["Hello", "world", "JavaScript", "is", "fun"]

// real word use case 

const posts = [
  { id: 1, tags: ["js", "coding"] },
  { id: 2, tags: ["webdev", "js"] }
];

const allTags = posts.myFlatMap(post => post.tags);
console.log(allTags); 
// Output: ["js", "coding", "webdev", "js"]

