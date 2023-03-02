const { sum, diff, product } = require("./mathOperations");

describe("Testing math operations", () => {
  // Sum tests
  test("Adding 123 and 456 should return 579", () => {
    expect(sum(123, 456)).toBe(579);
  });

  test("Adding 0 to a number should return the number itself", () => {
    let number = 3;
    expect(sum(number, 0)).toBe(number);
  });

  // Diff tests
  test("Subtracting 741 from 852 should return 111", () => {
    expect(diff(852, 741)).toBe(111);
  });

  test("Subtracting 0 from a number should return the number itself", () => {
    let number = 3;
    expect(diff(number, 0)).toBe(number);
  });

  // Product tests
  test("Multiplying 23 with 12 should return 276", () => {
    expect(product(23, 12)).toBe(276);
  });

  test("Multiplying a number with 0 should return 0", () => {
    let number = 3;
    expect(product(number, 0)).toBe(0);
  });

  test("Multiplying a number with 1 should return the number itself", () => {
    let number = 289437;
    expect(product(number, 1)).toBe(number);
  });
});
