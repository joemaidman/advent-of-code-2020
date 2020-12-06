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
    const [policyMin, policyMax] = range.split("-");
    return {
      policyMin: +policyMin,
      policyMax: +policyMax,
      policyCharacter,
      password,
    };
  });

let validPasswords = [];

input.forEach(({ policyCharacter, policyMin, policyMax, password }) => {
  const countPolicyCharacter = Array.from(password).filter(
    (char) => char === policyCharacter
  ).length;
  if (countPolicyCharacter <= policyMax && countPolicyCharacter >= policyMin) {
    validPasswords.push(password);
  }
});

console.log(`Result: ${validPasswords.length} valid passwords found`);
