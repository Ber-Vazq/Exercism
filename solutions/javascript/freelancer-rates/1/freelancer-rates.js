// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  let day = 8;
  return ratePerHour * day;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let hoursInBudget = budget/ratePerHour;
  let days = Math.floor(hoursInBudget/8);
  return days
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let monthsInProject = Math.floor(numDays/22);
  console.log('there are this many months in the project: ' + monthsInProject);
  let extraDays = numDays % 22;
  console.log('there are this many extra days in the project: ' + extraDays);
  let discountPercentage = 1.00 - discount;
  console.log('this is the discounted percentage(1 means there is no discount): ' + discountPercentage);
  let monthlyPrice = discountPercentage*((monthsInProject*22)*(ratePerHour*8));
  console.log('this is the monthly price after the discount is applied: ' + monthlyPrice);
  /*the discounted price multiplies (the months in the project which is multiplied by the amount of days worked in a month) which is then multiplied by the daily rate of the freelancer)*/
  let dailyPrice = extraDays*(ratePerHour * 8);
  /* dailyPrice is the regular dayRate from above */
  console.log('this is the daily price with no discount(discount only applied to full months of work): ' + dailyPrice);
  let fullPrice = Math.ceil(monthlyPrice + dailyPrice);
  console.log('this is the full price of the project: ' + fullPrice);
  return fullPrice;
}
