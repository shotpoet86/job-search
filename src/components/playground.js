/*
export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
};
export const multiply = (num1, num2) => num1 * num2;

const myArray = [2, 3, 4, 5, 6, 7];
export const total = myArray.map((result) => result * 2);
*/
const num = [1, 2, 3, 4, 5, 6, 7];
const total = num.map((num) => num * num);
console.log(total);
console.log(num);
const t = [...total];
console.log(t);
