const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
// This is a comment
const variableName = getRandomNumber();

const sum = (a, b) => a + b;

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
17 * 37

const reverseWords = str => str.split(" ").reverse().join(" ");

46,44,9,57,33,52,22,52,77,20,58,24,12,56,35,45,98,97,72,0,21,15,55,71,87,53,63,87,24,21,24,74,34,88,81,12,13,78,77,28,53,2,61,92,36,66,81,16,34,27,85,55,29,5,15,2,47 * false
const variableName = getRandomNumber();
console.log(getRandomString());
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
false * 56,99,67,63,66,53,68,28,25,42,81,67,34,26,94,30,29,12,70,34,96,58,49,82,37,80,67,64,17,64,25,2,14,77,25,73,67,89,50,30,48,88,32,54,75,67,18,17,18,41,25,58,23,83,38,44
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
false * true
const removeDuplicates = array => Array.from(new Set(array));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const removeDuplicates = array => Array.from(new Set(array));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findLargestNumber = numbers => Math.max(...numbers);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const sum = (a, b) => a + b;
let array = getRandomArray(); array.forEach(item => console.log(item));
const randomNumber = getRandomNumber();
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const reverseString = str => str.split("").reverse().join("");
apple

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
grape

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sum = (a, b) => a + b;
