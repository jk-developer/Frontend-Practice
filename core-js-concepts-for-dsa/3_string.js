///////// 4. String Methods //////////

// Strings are a sequence of characters used to represent text. In JavaScript, 
// strings are immutable, meaning that once a string is created, it cannot be changed. 
// However, we can create new strings based on existing ones using various string methods.
// give immutable example
const originalStr = "Hello";
// originalStr[0] = "h"; // This will not change the string
// console.log(originalStr); // Output: "Hello"

// But can we change a string variable?
// Yes! You can reassign the variable, but you cannot mutate the existing string.

let str = "hello";
str = "Hello";
console.log(str); // "Hello"
// Here, str now refers to a different string value. The original string "hello" wasn't modified.
// String methods also return new strings

// 0. str[index] - returns the character at the specified index in a string. The index starts from 0.
const str5 = "Hello, World!";
console.log(str5[0]); // returns "H"
console.log(str5[7]); // returns "W"

// 1. length - returns the length of the string.
const str1 = "Hello, World!";
console.log(str1.length); // returns 13

// 2. toString() - returns a string representing the specified object.
const num = 123;
console.log(num.toString()); // returns "123"
console.log(String(num)); // returns "123"

// 3. String to number conversion - we can convert a string to a number using the Number() function or the parseInt() and parseFloat() functions.
const strNum = "123.45";
console.log(Number(strNum)); // returns 123.45
console.log(parseInt(strNum)); // returns 123
console.log(parseFloat(strNum)); // returns 123.45


// 3. String concatenation - is the process of combining two or more strings into one string. In JavaScript, we can concatenate strings using the + operator or the concat() method.
const str21 = "Hello";
const str3 = "World";
console.log(str21 + " " + str3); // returns "Hello World"
console.log(str2.concat(" ", str3)); // returns "Hello World"

// 4. Template literals - are a way to create strings in JavaScript that allow for embedded expressions and multi-line strings. They are enclosed by backticks (`) instead of single or double quotes.
const name = "John";
const age = 30;
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // returns "My name is John and I am 30 years old."

// 5. Escape sequences - are special characters that are used to represent certain characters in a string. They are preceded by a backslash (\).
const str45 = "Hello\nWorld!";
console.log(str45); 
// returns "Hello
//          World!"

// 7. Iterating over strings - we can iterate over the characters of a string using a for loop or the for...of loop.
const str7 = "Hello";
for (let i = 0; i < str7.length; i++) {
  console.log(str7[i]); // logs each character of the string
}

for (const char of str7) {
  console.log(char); // logs each character of the string
}

// 1. charAt(index) - returns the character at the specified index in a string.
const str4 = "Hello, World!";
console.log(str4.charAt(0)); // returns "H"
console.log(str4.charAt(7)); // returns "W"

// 2. charCodeAt(index) - returns the Unicode of the character at the specified index in a string.
console.log(str4.charCodeAt(0)); // returns 72
console.log(str4.charCodeAt(7)); // returns 87

// 3. concat(str1, str2, ...) - is used to join two or more strings. This method does not change the existing strings, but instead returns a new string.
const str17 = "Hello";
const str2 = "World";
console.log(str17.concat(", ", str2, "!")); // returns "Hello, World!"

// 4. includes(searchString) - determines whether one string may be found within another string, returning true or false as appropriate.
console.log(str4.includes("Hello")); // returns true
console.log(str4.includes("hello")); // returns false

// 5. indexOf(searchValue) - returns the index of the first occurrence of the specified value in a string. Returns -1 if the value is not found.
console.log(str4.indexOf("World")); // returns 7
console.log(str4.indexOf("world")); // returns -1

// 6. lastIndexOf(searchValue) - returns the index of the last occurrence of the specified value in a string. Returns -1 if the value is not found.
console.log(str4.lastIndexOf("o")); // returns 8
console.log(str4.lastIndexOf("O")); // returns -1

// 7. match(regexp) - retrieves the matches when matching a string against a regular expression.
const regex = /o/g;
console.log(str4.match(regex)); // returns ["o", "o"]

// 8. repeat(count) - constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log(str4.repeat(2)); // returns "Hello, World!Hello, World!"

// 9. replace(searchValue, newValue) - returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
console.log(str4.replace("World", "JavaScript")); // returns "Hello, JavaScript!"

// 10. search(regexp) - executes a search for a match between a regular expression and this String object.
console.log(str4.search(/World/)); // returns 7
console.log(str4.search(/world/)); // returns -1

// 11. slice(beginIndex, endIndex) - extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(str4.slice(0, 5)); // returns "Hello"
console.log(str4.slice(7)); // returns "World!"

// 12. split(separator) - divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
console.log(str4.split(", ")); // returns ["Hello", "World!"]

// 13. startsWith(searchString) - determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log(str4.startsWith("Hello")); // returns true
console.log(str4.startsWith("World")); // returns false

// 14. substring(indexStart, indexEnd) - returns the part of the string between the start and end indexes, or to the end of the string.
console.log(str4.substring(0, 5)); // returns "Hello"
console.log(str4.substring(7)); // returns "World!"

// 15. toLowerCase() - returns the calling string value converted to lower case.
console.log(str4.toLowerCase()); // returns "hello, world!"

// 16. toUpperCase() - returns the calling string value converted to upper case.
console.log(str4.toUpperCase()); // returns "HELLO, WORLD!"

// 17. trim() - removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
const strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // returns "Hello, World!"

// 18. valueOf() - returns the primitive value of a String object.
const strObj = new String("Hello, World!");
console.log(strObj.valueOf()); // returns "Hello, World!"   

