const { Console } = require("console");
const fs = require("fs");

const TREE = "#";

const SLOPES = [
  {
    eastingsMove: 1,
    northingsMove: 1,
  },
  {
    eastingsMove: 3,
    northingsMove: 1,
  },
  {
    eastingsMove: 5,
    northingsMove: 1,
  },
  {
    eastingsMove: 7,
    northingsMove: 1,
  },
  {
    eastingsMove: 1,
    northingsMove: 2,
  },
];

// read and clean the data
const map = fs
  .readFileSync("./day-three/input.txt")
  .toString()
  .split("\n")
  .map((line) => line.repeat(100));

const treeCounts = [];

SLOPES.forEach(({ eastingsMove, northingsMove }) => {
  let currentEastings = 0;
  let currentLine = 0;

  let treeCount = 0;
  while (currentLine < map.length - 1) {
    currentEastings += eastingsMove;
    currentLine += northingsMove;
    if (map[currentLine][currentEastings] === TREE) {
      treeCount++;
    }
  }
  treeCounts.push(treeCount);
});

const result = treeCounts.reduce((acc, count) => acc * count);
console.log(`Result: ${result} trees encountered`);
