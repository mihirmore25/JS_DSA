// Find the min value in given array.
let arr = [2, -1, -22, 9, 99, 34];
let minVal = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) {
        minVal = arr[i];
    }
}

console.log(`Min val in arr is: ${minVal}`);

// Find multiple of both 3 and 5 from 1 to 1000 and their total sum?
let multiples = [];
let totalSum = 0;
for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
    }
}

for (let j = 0; j < multiples.length; j++) {
    totalSum += multiples[j];
}

console.log(totalSum);


// Fizz & Buzz & FizzBuzz problem
// If multiple of 3 then log "Fizz" OR if multiple of 5 then "Buzz"
// If multiple of both 3 & 5 then log "FizzBuzz"
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
