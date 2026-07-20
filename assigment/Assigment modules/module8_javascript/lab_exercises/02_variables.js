// Lab 02 – Variables and Data Types
// Run: node 02_variables.js  OR open in browser console

// ── Declaring variables using var, let, const ──────────────────────────────

var myVar = "I am a var";         // function-scoped, can be re-declared
let myLet = "I am a let";        // block-scoped, can be reassigned
const myConst = "I am a const";  // block-scoped, cannot be reassigned

// ── Different Data Types ───────────────────────────────────────────────────

// 1. String
let firstName = "Alice";
let greeting = `Hello, ${firstName}!`; // template literal

// 2. Number (integer and float)
let age = 25;
let price = 99.99;

// 3. Boolean
let isLoggedIn = true;
let hasAccount = false;

// 4. Null (intentional empty value)
let selectedItem = null;

// 5. Undefined (declared but not assigned)
let futureValue;

// 6. Object
let user = { name: "Bob", role: "Developer", active: true };

// 7. Array (special type of object)
let colors = ["red", "green", "blue"];

// ── Log values and their types ─────────────────────────────────────────────

console.log("──── Variables ─────────────────────────────────");
console.log("myVar   :", myVar,   "| type:", typeof myVar);
console.log("myLet   :", myLet,   "| type:", typeof myLet);
console.log("myConst :", myConst, "| type:", typeof myConst);

console.log("\n──── Data Types ─────────────────────────────────");
console.log("firstName  :", firstName,  "| type:", typeof firstName);
console.log("age        :", age,        "| type:", typeof age);
console.log("price      :", price,      "| type:", typeof price);
console.log("isLoggedIn :", isLoggedIn, "| type:", typeof isLoggedIn);
console.log("hasAccount :", hasAccount, "| type:", typeof hasAccount);
console.log("selectedItem:", selectedItem, "| type:", typeof selectedItem);
console.log("futureValue:", futureValue,"| type:", typeof futureValue);
console.log("user       :", user,       "| type:", typeof user);
console.log("colors     :", colors,     "| type:", typeof colors);

// ── Observations ──────────────────────────────────────────────────────────
console.log("\n──── Special Cases ──────────────────────────────");
console.log("typeof null  :", typeof null);   // "object" – historical JS bug
console.log("typeof []    :", typeof []);     // "object" – arrays are objects
console.log("Array.isArray([]):", Array.isArray(colors)); // true – correct check for array
