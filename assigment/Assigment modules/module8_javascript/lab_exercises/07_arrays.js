// Lab 07 – Arrays
// Run: node 07_arrays.js

// ── Task 1: Fruits Array ───────────────────────────────────────────────────
console.log("──── Task 1: Fruits Array Manipulation ──────────");

let fruits = ["apple", "banana", "cherry"];
console.log("Initial array:", fruits);

// Add a fruit to the END
fruits.push("mango");
console.log("After push('mango'):", fruits);

// Remove the FIRST fruit
const removedFirst = fruits.shift();
console.log(`After shift() – removed '${removedFirst}':`, fruits);

// Additional operations
fruits.unshift("strawberry");  // add to beginning
console.log("After unshift('strawberry'):", fruits);

const removedLast = fruits.pop();
console.log(`After pop() – removed '${removedLast}':`, fruits);

// Splice: remove 1 element at index 1
fruits.splice(1, 1);
console.log("After splice(1,1) – removed element at index 1:", fruits);

// ── Task 2: Sum of all elements in a number array ─────────────────────────
console.log("\n──── Task 2: Sum of Array Elements ──────────────");

const numbers = [10, 25, 5, 40, 15, 30, 8];
console.log("Numbers:", numbers);

// Method 1: Using reduce
const sumReduce = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum using reduce():", sumReduce);

// Method 2: Using for loop
let sumLoop = 0;
for (let num of numbers) {
  sumLoop += num;
}
console.log("Sum using for...of:", sumLoop);

// ── Bonus: Useful Array Methods ────────────────────────────────────────────
console.log("\n──── Bonus: Array Methods Demo ───────────────────");

const scores = [88, 72, 95, 60, 45, 78, 91];
console.log("Scores:", scores);

// filter – get scores above 75
const passing = scores.filter(score => score >= 75);
console.log("Passing (≥75):", passing);

// map – double each score (for bonus points demo)
const doubled = scores.map(score => score * 2);
console.log("Doubled:", doubled);

// find – first score above 90
const firstHigh = scores.find(score => score > 90);
console.log("First score > 90:", firstHigh);

// sort – ascending
const sorted = [...scores].sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);

// includes
console.log("includes 95:", scores.includes(95));
console.log("includes 100:", scores.includes(100));

// indexOf
console.log("indexOf 60:", scores.indexOf(60));

// every / some
console.log("Every score > 40:", scores.every(s => s > 40));
console.log("Some score > 90:", scores.some(s => s > 90));
