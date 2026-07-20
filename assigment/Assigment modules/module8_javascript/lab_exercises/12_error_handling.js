// Lab 12 – JavaScript Error Handling
// Run: node 12_error_handling.js

// ── Task: Division by Zero with try-catch ──────────────────────────────────
function divideNumbers(a, b) {
  try {
    console.log(`Attempting to divide ${a} by ${b}...`);
    
    // In JavaScript, division by zero returns Infinity, which is not an Error object.
    // To properly demonstrate try-catch, we manually throw an error.
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError("Both arguments must be numbers");
    }
    
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    
    const result = a / b;
    console.log(`Success! The result is: ${result}`);
    return result;
    
  } catch (error) {
    // This block runs if an error was thrown in the try block
    console.error("❌ Error caught!");
    console.error(`   Name: ${error.name}`);
    console.error(`   Message: ${error.message}`);
    
  } finally {
    // This block always runs regardless of success or failure
    console.log("   [Finally block] Operation finished.\n");
  }
}

// ── Test Cases ─────────────────────────────────────────────────────────────
console.log("──── Test 1: Normal Division ──────────────");
divideNumbers(10, 2);

console.log("──── Test 2: Division by Zero ─────────────");
divideNumbers(15, 0);

console.log("──── Test 3: Invalid Input Types ──────────");
divideNumbers("hello", 5);

// ── Another Example: JSON Parsing Error ────────────────────────────────────
console.log("──── Test 4: JSON Parse Error ─────────────");
function parseUserData(jsonString) {
  try {
    console.log("Attempting to parse JSON...");
    const user = JSON.parse(jsonString);
    console.log("Parsed User:", user.name);
  } catch (err) {
    console.error("❌ Failed to parse JSON. Invalid format!");
    console.error("   Details:", err.message);
  }
}

// Valid JSON
parseUserData('{"name": "Alice", "age": 25}');

// Invalid JSON (missing quotes)
console.log("\nTrying invalid JSON:");
parseUserData('{name: "Alice", age: 25}');
