/**
 * Determines someone's age, given their date of birth.
 * @param {string} name
 * @param {number} yearOfBirth 
 * @param {number} currentYear
 * @return {string} explains how old the person is
 */
function ageCalculator(name, yearOfBirth, currentYear) {
  return `${name} is ${currentYear - yearOfBirth} years old.`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));