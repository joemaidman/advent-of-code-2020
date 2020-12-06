const fs = require("fs");

// read and clean the data
const input = fs
  .readFileSync("./day-two/input.txt")
  .toString()
  .split("\n")
  .map((val) => {
    let [policy, password] = val.split(":");
    password = password.trim();
    const [range, policyCharacter] = policy.split(" ");
    const [policyFirstPosition, policySecondPosition] = range.split("-");
    return {
      policyFirstPosition: +policyFirstPosition,
      policySecondPosition: +policySecondPosition,
      policyCharacter,
      password,
    };
  });

let validPasswords = [];

input.forEach(
  ({
    policyCharacter,
    policyFirstPosition,
    policySecondPosition,
    password,
  }) => {
    let count = 0;
    [policyFirstPosition, policySecondPosition].forEach((position) => {
      if (Array.from(password)[position - 1] === policyCharacter) {
        count++;
      }
    });
    if (count === 1) validPasswords.push(password);
  }
);

console.log(`Result: ${validPasswords.length} valid passwords found`);
