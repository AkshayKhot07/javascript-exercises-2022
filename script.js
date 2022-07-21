"use strict";

//Iterative approach
let fib = [0, 1];
for (let i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Recursive approach
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

/*
//Factorial of a Number

//Recursive approach
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));

//Iterative Approach
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


const add = (a, b, ...args) =>
  [a, b, ...args].reduce((acc, n) => {
    return acc + n;
  }, 0);

console.log(add(1, 2, 50));

let nums = [1, 5, 2, 6];
let total = 0;
for (let value of nums) {
  total += value;
}
console.log(total);


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


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);


function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));


function sumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

function sumToRec(number) {
  if (number === 1) {
    return 1;
  } else {
    return number + sumToRec(number - 1);
  }
}

console.log(sumToRec(100));

function sumToArth(number) {
  return (number * (number + 1)) / 2;
}

console.log(sumToArth(100));


let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

console.log(Object.values(company));

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
console.log(sumSalaries(company));


function pow(number, raiseto) {
  if (raiseto === 1) {
    return number;
  } else {
    return number * pow(number, raiseto - 1);
  }
}

console.log(pow(2, 10));
*/
