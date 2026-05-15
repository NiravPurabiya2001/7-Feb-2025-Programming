console.log("--- Variables and Data Types ---");
let str = "Hello";
let num = 42;
let bool = true;
let empty = null;
let notAssigned;

console.log(str, typeof str);
console.log(num, typeof num);
console.log(bool, typeof bool);
console.log(empty, typeof empty); // Object (JS quirk)
console.log(notAssigned, typeof notAssigned);

console.log("\n--- Operators ---");
let a = 10, b = 5;
console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);
console.log("Equal?", a == b);
console.log("Greater?", a > b);
console.log("Logical AND:", a > 5 && b < 10);

console.log("\n--- Control Flow (Switch) ---");
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Other day");
}

console.log("\n--- Loops ---");
console.log("For loop 1 to 10:");
for(let i=1; i<=10; i++) console.log(i);

console.log("While loop sum even 1-20:");
let sumEven = 0; let w = 1;
while(w <= 20) {
    if(w % 2 === 0) sumEven += w;
    w++;
}
console.log(sumEven);

// Do-while task (commented out to prevent infinite prompt loop on load)
/*
let inputNum;
do {
    inputNum = parseInt(prompt("Enter a number greater than 10:"));
} while (inputNum <= 10);
*/

console.log("\n--- Functions ---");
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
function calculateSum(n1, n2) {
    return n1 + n2;
}
greetUser("John");
console.log("Sum:", calculateSum(5, 7));

console.log("\n--- Arrays ---");
let fruits = ["apple", "banana", "cherry"];
fruits.push("mango"); // add to end
fruits.shift(); // remove first
console.log(fruits);

let nums = [1, 2, 3, 4];
let sumArray = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Array sum:", sumArray);

console.log("\n--- Objects ---");
let car = { brand: "Toyota", model: "Corolla", year: 2015 };
console.log(car.brand, car.model);
car.year = 2020;
car.color = "Red";
console.log(car);

// --- DOM and Events ---
document.getElementById('alertBtn').addEventListener('click', function() {
    alert("Button clicked!");
});

document.getElementById('domBtn').addEventListener('click', function() {
    let p = document.getElementById('myParagraph');
    p.innerText = "JavaScript is fun!";
    p.style.color = "blue";
});

// --- Timing Events ---
setTimeout(() => {
    document.body.style.backgroundColor = "#e0f7fa";
    console.log("Background color changed after 5 seconds");
}, 5000);

setInterval(() => {
    let now = new Date();
    document.getElementById('clockDisplay').innerText = now.toLocaleTimeString();
}, 1000);

// --- Extra Control Flow & Error Handling linked to HTML buttons ---
function checkNumber() {
    let val = prompt("Enter a number:");
    let n = parseFloat(val);
    if(n > 0) alert("Positive");
    else if(n < 0) alert("Negative");
    else alert("Zero");
}

function divideByZeroError() {
    try {
        let x = 10;
        let y = 0;
        // JS doesn't naturally throw error on div by zero, it returns Infinity. 
        // We throw manually to demonstrate catch block.
        if(y === 0) throw new Error("Cannot divide by zero!");
        let result = x / y;
    } catch (error) {
        alert("Error caught: " + error.message);
    }
}
