const fs = require("fs");

const TARGET = 2020;

// read and clean the data
const input = fs
  .readFileSync("./day-one/input.txt")
  .toString()
  .split("\n")
  .map((num) => +num);

let entries = [];

// just brute force it
input.forEach((outerNum) => {
  input.forEach((innerNum) => {
    if (outerNum === innerNum) return;
    if (outerNum + innerNum === TARGET) {
      entries = [outerNum, innerNum];
    }
  });
});

const result = entries[0] * entries[1];

console.log(`Result: ${result} using entries ${entries[0]} and ${entries[1]}`);
