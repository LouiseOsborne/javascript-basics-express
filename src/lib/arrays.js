const getNthElement = (index, array) => {
  let newIndex = index;
  if (index >= array.length) {
    newIndex = index - array.length;
  }
  return array[newIndex];
};

const arrayToCSVString = array => {
  return array.join(",");
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(item => item.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(item => item.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(item => item.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(item => item % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array]; //Make a copy of the original array
  const modifiedArray = newArray.splice(index, 1); //removes the nth element
  return newArray; //returns new modified array without removed element
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(item => item.match(/^[aeiou]/i));
};

const removeSpaces = string => {
  const array= string.split(" ")
  array.filter(item => item.trim());
  string = array.join("");
  return string;
};

const sumNumbers = numbers => {
  let sum = 0;
  numbers.forEach(item => {sum += item});
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
