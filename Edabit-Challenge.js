// Practice set - 1 => Getting all nested and non-nested array length
const arr = [1, [2, [3, [4, [5, 6]]]]];

const getLength = (arr) => {
  let count = 0;
  for (let value of arr) {
    Array.isArray(value) ? (count += getLength(value)) : count++;
  }
  return count;
};

console.log(getLength(arr));

// Practise set -2 =>
const arrayofMultiples = (num, length) => {
  let result = [];

  for (let i = 0; i <= length - 1; i++) {
    result[i] = num * (i + 1); // it is done to put array result from result[0]
  }
  return result;
};

console.log(arrayofMultiples(10, 10));

// Practice set - 3
const concat = (a, b, c) => {
  let arrayConat = a.concat(b, c);
  return arrayConat;
};

let result = concat([1, 2, 3], [4, 5], [6, 7]);
console.log(result);

// Practice set - 4 => Convert an object into array
// There is also Object.keys(obj1) which return keys and Object.values to return left-side value
let obj1 = {
  Name: "Hari",
  Age: 32,
  Address: "Nepal",
  Contact: 98000000,
};

const objtoArray = (obj1) => {
  let entries = Object.entries(obj1);
  return entries;
};
console.log(objtoArray(obj1));

// Practice set 3
// let arr1 = [1, [2, [3, 8]]];
// let arr2 = [4, 5, 6];
// let combinedArray = arr1.concat(arr2);
// console.log(combinedArray);
// console.log("   ");

// const concatArray = (combinedArray) => {
//   let newA = [];
//   combinedArray.forEach((value, index) => {
//     if (Array.isArray(value)) {
//       concatArray(value);
//     }
//     // console.log("gap");
//     console.log(value);
//   });
//   return newA;
// };

// console.log(concatArray(combinedArray));
