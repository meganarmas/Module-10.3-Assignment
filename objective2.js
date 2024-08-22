// Task 1: Obtaining String Length - 
// Create a string with some text content. - Use the `length` property to obtain the length of the string.

let message = "Hello, World!";
console.log("Length of message:", message.length);


// Task 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the `toLowerCase` method to convert the string to lowercase

let text = "Hello, World!"

let textUpper = text.toUpperCase();
console.log(textUpper);

let textlower = text.toLowerCase();
console.log(textlower);

// Task 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.

let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(16, 24);
console.log("Extracted substring:", substring)

// Task 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an array of words based on the space delimiter.

let splitSentence = "The quick brown fox";
let splitstring = splitSentence.split(" ");
console.log("Words:", splitstring);