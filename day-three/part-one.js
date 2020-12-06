const { Console } = require("console");
const fs = require("fs");

const TREE = "#";

const EASTINGS_MOVE = 3;
const NORTHINGS_MOVE = 1;

// read and clean the data
const map = fs
  .readFileSync("./day-three/input.txt")
  .toString()
  .split("\n")
  .map((line) => line.repeat(100));

let currentEastings = 0;
let currentLine = 0;

let treeCount = 0;
while (currentLine < map.length - 1) {
  currentEastings += EASTINGS_MOVE;
  currentLine += NORTHINGS_MOVE;
  if (map[currentLine][currentEastings] === TREE) {
    treeCount++;
  }
}

console.log(`Result: ${treeCount} trees encountered`);
