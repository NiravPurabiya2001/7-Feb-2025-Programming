// Lab 03 – JavaScript Operators
// Run: node 03_operators.js

const a = 15;
const b = 4;

// ── Arithmetic Operators ───────────────────────────────────────────────────
console.log("──── Arithmetic Operators ───────────────────────");
console.log(`${a} + ${b} = ${a + b}`);   // Addition:       19
console.log(`${a} - ${b} = ${a - b}`);   // Subtraction:    11
console.log(`${a} * ${b} = ${a * b}`);   // Multiplication: 60
console.log(`${a} / ${b} = ${a / b}`);   // Division:       3.75
console.log(`${a} % ${b} = ${a % b}`);   // Modulus:        3
console.log(`${a} ** ${b} = ${a ** b}`); // Exponentiation: 50625

// ── Assignment Operators ───────────────────────────────────────────────────
console.log("\n──── Assignment Operators ────────────────────────");
let x = 10;
console.log("Initial x =", x);
x += 5;  console.log("x += 5  →", x);   // 15
x -= 3;  console.log("x -= 3  →", x);   // 12
x *= 2;  console.log("x *= 2  →", x);   // 24
x /= 4;  console.log("x /= 4  →", x);   // 6
x **= 2; console.log("x **= 2 →", x);   // 36
x %= 10; console.log("x %= 10 →", x);   // 6

// ── Comparison Operators ───────────────────────────────────────────────────
console.log("\n──── Comparison Operators ────────────────────────");
console.log(`${a} == ${b}   →`, a == b);    // false
console.log(`${a} != ${b}   →`, a != b);    // true
console.log(`${a} > ${b}    →`, a > b);     // true
console.log(`${a} < ${b}    →`, a < b);     // false
console.log(`${a} >= 15     →`, a >= 15);   // true
console.log(`${b} <= 4      →`, b <= 4);    // true

// Strict vs loose equality
console.log(`\n"5" == 5  (loose) →`, "5" == 5);   // true (type coerced)
console.log(`"5" === 5 (strict) →`, "5" === 5);   // false (different types)
console.log(`null == undefined  →`, null == undefined);   // true
console.log(`null === undefined →`, null === undefined);  // false

// ── Logical Operators ──────────────────────────────────────────────────────
console.log("\n──── Logical Operators ───────────────────────────");
const p = a > 10;   // true  (15 > 10)
const q = b < 5;    // true  (4 < 5)

console.log(`a > 10 → ${p}`);
console.log(`b < 5  → ${q}`);
console.log(`(a > 10) && (b < 5) → ${p && q}`);  // true AND true  = true
console.log(`(a > 10) || (b > 5) → ${p || !q}`); // true OR false  = true
console.log(`!(a > 10)           → ${!p}`);       // NOT true       = false
