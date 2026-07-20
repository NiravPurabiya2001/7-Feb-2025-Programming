// Lab 08 – Objects
// Run: node 08_objects.js

// ── Create the car object ──────────────────────────────────────────────────
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log("──── Initial Car Object ──────────────────────────");
console.log(car);

// ── Access properties ──────────────────────────────────────────────────────
console.log("\n──── Accessing Properties ────────────────────────");

// Dot notation
console.log("Brand (dot notation)  :", car.brand);
console.log("Model (dot notation)  :", car.model);

// Bracket notation
console.log("Year (bracket notation):", car["year"]);

// Dynamic key access
const prop = "brand";
console.log(`Dynamic key '${prop}':`, car[prop]);

// ── Update a property ──────────────────────────────────────────────────────
console.log("\n──── Updating Properties ─────────────────────────");
car.year = 2024;
console.log("Updated year to 2024:", car.year);

// ── Add a new property ─────────────────────────────────────────────────────
console.log("\n──── Adding New Properties ───────────────────────");
car.color = "Midnight Blue";
car.mileage = 25000;
car.isElectric = false;
console.log("Car after additions:", car);

// ── Delete a property ──────────────────────────────────────────────────────
delete car.mileage;
console.log("\nAfter deleting mileage:", car);

// ── Object methods ─────────────────────────────────────────────────────────
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  // Method inside object
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  introduce() {
    return `Hi, I'm ${this.getFullName()} and I'm ${this.age} years old.`;
  }
};

console.log("\n──── Object Methods ──────────────────────────────");
console.log("Full name :", person.getFullName());
console.log("Introduce :", person.introduce());

// ── Iterating over object properties ──────────────────────────────────────
console.log("\n──── Iterating with for...in ─────────────────────");
for (const key in car) {
  console.log(`  ${key}: ${car[key]}`);
}

// Object.keys(), Object.values(), Object.entries()
console.log("\nObject.keys()   :", Object.keys(car));
console.log("Object.values() :", Object.values(car));
console.log("Object.entries():", Object.entries(car));

// ── Destructuring ──────────────────────────────────────────────────────────
console.log("\n──── Object Destructuring ────────────────────────");
const { brand, model, color } = car;
console.log(`Destructured → brand: ${brand}, model: ${model}, color: ${color}`);

// ── Spread operator ────────────────────────────────────────────────────────
const updatedCar = { ...car, year: 2025, trim: "Sport" };
console.log("\nNew car (spread):", updatedCar);
