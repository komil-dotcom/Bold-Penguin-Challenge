const prompt = require("prompt-sync")();
const { primeNumbersGenerator } = require("./prime_num_gen");

// take input from the user
let initialValue = parseInt(prompt("Enter starting number: "));
let lastValue = parseInt(prompt("Enter Ending number: "));

primeNumbersGenerator(initialValue, lastValue);
