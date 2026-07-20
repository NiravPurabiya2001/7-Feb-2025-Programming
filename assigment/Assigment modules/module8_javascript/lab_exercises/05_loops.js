// Lab 05 – Loops: for, while, do-while
// Run: node 05_loops.js

// ── Task 1: for loop – print numbers 1 to 10 ──────────────────────────────
console.log("──── Task 1: for loop – Numbers 1 to 10 ─────────");
for (let i = 1; i <= 10; i++) {
  process.stdout.write(i + (i < 10 ? ", " : "\n"));
}

// ── Task 2: while loop – sum of even numbers 1 to 20 ──────────────────────
console.log("\n──── Task 2: while loop – Sum of Even Numbers (1–20) ─────");
let i = 1;
let sumEven = 0;
const evens = [];

while (i <= 20) {
  if (i % 2 === 0) {
    sumEven += i;
    evens.push(i);
  }
  i++;
}

console.log("Even numbers:", evens.join(", "));
console.log("Sum of even numbers from 1 to 20:", sumEven);

// ── Task 3: do-while – ask user until input > 10 (simulated) ──────────────
console.log("\n──── Task 3: do-while – Input until > 10 (simulated) ────");
// In a browser this would use prompt(); here we simulate with an array of inputs.
const simulatedInputs = [3, 7, 5, 11]; // simulates user typing these values
let inputIndex = 0;

let userInput;
do {
  userInput = simulatedInputs[inputIndex++];
  console.log(`User entered: ${userInput}`);
  if (userInput <= 10) {
    console.log(`  → ${userInput} is not greater than 10. Please try again.`);
  }
} while (userInput <= 10);

console.log(`  ✔ Accepted! ${userInput} is greater than 10.`);

// ── Bonus: Multiplication table using nested for loops ────────────────────
console.log("\n──── Bonus: 5×5 Multiplication Table ────────────");
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= 5; col++) {
    line += String(row * col).padStart(4);
  }
  console.log(line);
}
