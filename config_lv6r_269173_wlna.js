const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const randomNumber = getRandomNumber();
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const sum = (a, b) => a + b;
const capitalizeString = str => str.toUpperCase();
const capitalizeString = str => str.toUpperCase();
47 + 97
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const randomNumber = getRandomNumber();
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const isPalindrome = str => str === str.split("").reverse().join("");
