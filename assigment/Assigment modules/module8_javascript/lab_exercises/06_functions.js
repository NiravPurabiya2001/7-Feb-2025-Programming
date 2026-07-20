function greetUser(name) {
  const message = `Hello, ${name}! Welcome to JavaScript Functions.`;
  console.log(message);
  return message; 
}
console.log("──── Task 1: greetUser ───────────────────────────");
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");
function calculateSum(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log("\n──── Task 2: calculateSum ────────────────────────");
console.log(`calculateSum(10, 25) = ${calculateSum(10, 25)}`);
console.log(`calculateSum(-5, 15) = ${calculateSum(-5, 15)}`);
console.log(`calculateSum(3.5, 2.5) = ${calculateSum(3.5, 2.5)}`);
const multiply = function(a, b) {
  return a * b;
};
const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
};
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("\n──── Bonus Functions ─────────────────────────────");
console.log("multiply(6, 7) =", multiply(6, 7));
console.log("divide(20, 4)  =", divide(20, 4));
console.log("power(3)       =", power(3));        
console.log("power(2, 8)    =", power(2, 8));     
console.log("sumAll(1,2,3,4,5) =", sumAll(1, 2, 3, 4, 5));  
function applyOperation(a, b, operation) {
  return operation(a, b);
}
console.log("\n──── Higher-Order Function ───────────────────────");
console.log("applyOperation(10, 5, calculateSum)   =", applyOperation(10, 5, calculateSum));
console.log("applyOperation(10, 5, multiply)        =", applyOperation(10, 5, multiply));
