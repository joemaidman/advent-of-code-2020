const fs = require("fs");

const TARGET = 2020;

// read and clean the data
const input = fs
  .readFileSync("./day-one/input.txt")
  .toString()
  .split("\n")
  .map((num) => +num);

let entries = [];

// just brute force it (again)
input.forEach((firstNum) => {
  input.forEach((secondNum) => {
    input.forEach((thirdNum) => {
      if (firstNum + secondNum + thirdNum === TARGET) {
        entries = [firstNum, secondNum, thirdNum];
      }
    });
  });
});

const result = entries[0] * entries[1] * entries[2];

console.log(
  `Result: ${result} using entries ${entries[0]}, ${entries[1]} and ${entries[2]}`
);
