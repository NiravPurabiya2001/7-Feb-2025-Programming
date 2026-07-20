function checkNumber(num) {
  if (num > 0) {
    return `${num} is a POSITIVE number`;
  } else if (num < 0) {
    return `${num} is a NEGATIVE number`;
  } else {
    return `${num} is ZERO`;
  }
}
console.log("──── if-else: Positive/Negative/Zero ────────────");
console.log(checkNumber(15));
console.log(checkNumber(-7));
console.log(checkNumber(0));
console.log(checkNumber(-0.5));
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number. Please enter 1–7.";
  }
}
console.log("\n──── switch: Day of the Week ────────────────────");
for (let i = 1; i <= 7; i++) {
  console.log(`Day ${i} → ${getDayName(i)}`);
}
console.log(`Day 8 → ${getDayName(8)}`);
function getGrade(score) {
  if (score >= 90)      return "A (Excellent)";
  else if (score >= 80) return "B (Good)";
  else if (score >= 70) return "C (Average)";
  else if (score >= 60) return "D (Below Average)";
  else                  return "F (Fail)";
}
console.log("\n──── Bonus: Grade Classification ────────────────");
[95, 82, 74, 61, 45].forEach(score => {
  console.log(`Score ${score} → Grade: ${getGrade(score)}`);
});
