const findLargestNumber = numbers => Math.max(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findLargestNumber = numbers => Math.max(...numbers);
71,57,19,42,89,16,92,26,96,55,35,20,99,30,14,39,56,44,83,35,63,31,18,57,5,35,43,37,78,58,86,88,79,50,83,93,59,50,40 * 4,22,25,39,58,7,19,4,65,21,54,58,56,0,79,15,36,18,80,28,1,23,84,47,70,81,69,36,18,55,41,7,94,55,19,14,1,67,2,16,64,18,92,27,1,77,59,18,77,63,59,24,45,91,58,26,53,78,27,44,40,56,26,51,66,18,97,51,41,67,68,78

// This is a comment
const isPalindrome = str => str === str.split("").reverse().join("");
53 * kiwi
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const getUniqueValues = array => [...new Set(array)];
const getRandomSubset = (array, size) => array.slice(0, size);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
orange


const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
false / false

const sum = (a, b) => a + b;
banana / 78,7,11,87,82,49,14,79,42,92,55,23,24,48,45,69,0,80,18,8,44,86,40,90,8,97,93,35,9,89,36,27,78,13,37,3,51,46,73,85,97,8,53,3,52,11,53,19,44,59,10,68,95,94,4,13,55,59,62,62,96,35,1,2,56,18,68,36,9,48,37,49,10,78,32,89,34,31,63,17,62,73,30,63,51,23,72,56
const squareRoot = num => Math.sqrt(num);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const multiply = (a, b) => a * b;
const capitalizeString = str => str.toUpperCase();
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const variableName = getRandomNumber();
45 / kiwi
const findSmallestNumber = numbers => Math.min(...numbers);
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

87 + false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let array = getRandomArray(); array.forEach(item => console.log(item));

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
true - false

const getRandomIndex = array => Math.floor(Math.random() * array.length);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomSubset = (array, size) => array.slice(0, size);
false / 79,87,69,97,68,94,63,59,37,44,18,80,36,23,70,82,47,61,24,35,34,65,20,53,90,42,66,67,17,78,14,36,4,27,53,61,42,66,30,66

const isPalindrome = str => str === str.split("").reverse().join("");
kiwi

const randomNumber = getRandomNumber();
banana

const getUniqueValues = array => [...new Set(array)];

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
banana

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

grape * 89

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sum = (a, b) => a + b;

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
false / false
class MyClass { constructor() { this.property = getRandomString(); } }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

71 - false
const findSmallestNumber = numbers => Math.min(...numbers);
banana

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let result = performOperation(getRandomNumber(), getRandomNumber());
false - grape
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const filterEvenNumbers = numbers => numbers.filter(isEven);

apple + apple

const isEven = num => num % 2 === 0;
39,5,15,55,97,32,83,0,98,9,65,1,73,43,63,10,77,71,63,22,91,20,13,31,43,25,92,93,23,49,24,64,23,1,37,5,17,85,5,83,70,58,68,92,88,65,49,43,32,15,82,33,14,98,32,20,93,61,48,29,52,87,62,19,34,93,15,81,48 - true
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

40 - kiwi
const greet = name => `Hello, ${name}!`;
const reverseString = str => str.split("").reverse().join("");
orange / 85
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
grape / 3
const getRandomSubset = (array, size) => array.slice(0, size);

