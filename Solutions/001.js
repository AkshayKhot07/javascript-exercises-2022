"use strict";

let nums = [1, 2, 3, 4, 6, 9, 90, 89, 77, 54, 77];

function containsDuplicate(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate(nums));
