# Javascript Coding Challenges 2022

### Problem 1

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

##### Example 1

Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false

[Solution](https://github.com/AkshayKhot07/javascript-exercises-2022/blob/main/Solutions/001.js)

---

### Sum of Numbers

```
const add = (a, b, ...args) =>
  [a, b, ...args].reduce((acc, n) => {
    return acc + n;
  }, 0);

console.log(add(1, 2, 50)); // 53

let nums = [1, 5, 2, 6];
let total = 0;
for (let value of nums) {
  total += value;
}
console.log(total); // 14

```
