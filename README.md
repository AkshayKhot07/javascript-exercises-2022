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

---

### Factorial of a number

Recursive approach

```
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

```

Iterative Approach

```
function facIterative(n) {
  let answer = 1;
  if (n === 0 || n === 1) {
    return answer;
  } else {
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
}
console.log(facIterative(5));

```

---

### Fibonacci Sequence

Iterative approach

```
let fib = [0, 1];
for (let i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

```

Recursive approach

```
function fibRecursive(n) {
  if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else {
    return fibRecursive(n - 2) + fibRecursive(n - 1);
  }
}
console.log(fibRecursive(10)); // 55

```

---

### Prime Numbers

```
function primeNumber(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumber(15)); // false

function getPrimes(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (primeNumber(i)) {
      arr.push(i);
    }
  }
  console.log(arr);
}
getPrimes(50); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

```

---

### Palindrome

```
function palindrome(string) {
  const str = string;
  const strReverse = str.split("").reverse().join("");
  console.log(str);
  console.log(strReverse);
  if (str === strReverse) {
    console.log("It is a plaindrome");
  } else {
    console.log("Not a plaindrome");
  }
}
palindrome("motion"); //Not a plaindrome

palindrome("peep"); //It is a plaindrome

```

---

### Anagram

```
function isAnagram(string1, string2) {
  const normalize = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };

  return normalize(string1) === normalize(string2);
}

console.log(isAnagram("Night", "Thing")); // true
console.log(isAnagram("Statue of Liberty", "Built to stay free")); // true
console.log(isAnagram("Night", "Light")); // false
```

---

### FizzBuzz

```
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

```

---

### Remove Duplicates

```
function removeDuplicate() {
  const arr = [1, 4, 5, 7, 4, "a", "d", 1, 8, 2, 2, "a", "d"];
  const uniqueArr = [...new Set(arr)];
  console.log(uniqueArr);
}

removeDuplicate();

```

---

### Find Min and Max

```
//Math methods
let arr = [100, 43, 2, 5, 7, 98];
function minMax(array) {
  return {
    min: Math.min(...array),
    max: Math.max(...array),
  };
}
console.log(minMax(arr));

//Array sort method
let arr2 = [506, 43, 1, 5, 719, 98];
function getMinMax(array) {
  const sortedArray = array.sort((a, b) => a - b);

  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
  };
}
console.log(getMinMax(arr2));

```
