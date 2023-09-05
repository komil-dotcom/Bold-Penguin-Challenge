const { primeNumbersGenerator } = require("./prime_num_gen");

test('Throws "Invalid Value Entered" Error when an input is not a number', () => {
  expect(() => {
    primeNumbersGenerator("Some String", 4);
  }).toThrow("Invalid Value Entered");
  expect(() => {
    primeNumbersGenerator("Some String", "Another String");
  }).toThrow("Invalid Value Entered");
  expect(() => {
    primeNumbersGenerator(5, "Some String");
  }).toThrow("Invalid Value Entered");
});

test('Throws "Invalid Value Entered" Error when an input is not a positve intiger', () => {
  expect(() => {
    primeNumbersGenerator(-1, 4);
  }).toThrow("Invalid Value Entered");
  expect(() => {
    primeNumbersGenerator(-1, -3);
  }).toThrow("Invalid Value Entered");
  expect(() => {
    primeNumbersGenerator(1, -3);
  }).toThrow("Invalid Value Entered");
  expect(() => {
    primeNumbersGenerator(0, 5);
  }).toThrow("Invalid Value Entered");
});

test("Returns Prime Numbers with Valid Values", () => {
  const consoleSpy = jest.spyOn(console, "log");
  primeNumbersGenerator(7900, 7920);
  expect(consoleSpy).toHaveBeenCalledWith([7901, 7907, 7919]);
});

test("Returns same Prime Numbers with inversed Valid Values", () => {
  const consoleSpy = jest.spyOn(console, "log");
  primeNumbersGenerator(7920, 7900);
  expect(consoleSpy).toHaveBeenCalledWith([7901, 7907, 7919]);
});
