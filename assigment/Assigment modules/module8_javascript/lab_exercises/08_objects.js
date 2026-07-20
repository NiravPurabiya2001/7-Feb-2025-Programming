let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log("──── Initial Car Object ──────────────────────────");
console.log(car);
console.log("\n──── Accessing Properties ────────────────────────");
console.log("Brand (dot notation)  :", car.brand);
console.log("Model (dot notation)  :", car.model);
console.log("Year (bracket notation):", car["year"]);
const prop = "brand";
console.log(`Dynamic key '${prop}':`, car[prop]);
console.log("\n──── Updating Properties ─────────────────────────");
car.year = 2024;
console.log("Updated year to 2024:", car.year);
console.log("\n──── Adding New Properties ───────────────────────");
car.color = "Midnight Blue";
car.mileage = 25000;
car.isElectric = false;
console.log("Car after additions:", car);
delete car.mileage;
console.log("\nAfter deleting mileage:", car);
const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
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
console.log("\n──── Iterating with for...in ─────────────────────");
for (const key in car) {
  console.log(`  ${key}: ${car[key]}`);
}
console.log("\nObject.keys()   :", Object.keys(car));
console.log("Object.values() :", Object.values(car));
console.log("Object.entries():", Object.entries(car));
console.log("\n──── Object Destructuring ────────────────────────");
const { brand, model, color } = car;
console.log(`Destructured → brand: ${brand}, model: ${model}, color: ${color}`);
const updatedCar = { ...car, year: 2025, trim: "Sport" };
console.log("\nNew car (spread):", updatedCar);
