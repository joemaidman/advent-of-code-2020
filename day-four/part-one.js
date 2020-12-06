const fs = require("fs");

const REQUIRED_FIELDS = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl"];

// read and clean the data
const passports = fs
  .readFileSync("./day-four/input.txt")
  .toString()
  // look for 2 line breaks to denote a new passport
  .split("\n\n")
  // replace all line breaks with a space i.e. one passport on one line
  .map((data) => data.replace(/\n/g, " "))
  // split the passport string an array of key value strings
  .map((data) => data.split(" "))
  // construct each passport object
  .map((data) => {
    const result = {};
    data
      // remove any empty entries
      .filter((d) => d !== "")
      .map((inner) => {
        const [key, value] = inner.trim().split(":");
        result[key] = value.toString();
      });
    return result;
  });

let invalidCount = 0;

passports.forEach((passport) => {
  REQUIRED_FIELDS.map((field) => {
    if (!passport[field]) {
      invalidCount++;
    }
  });
});

const validCount = passports.length - invalidCount;

console.log(`Result: ${validCount} valid passports`);
