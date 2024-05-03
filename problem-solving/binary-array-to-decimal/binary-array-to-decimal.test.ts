import binaryArrayToDecimal from "./binary-array-to-decimal";

/**
 * Sample test cases
 * 0, 0, 0, 1 ==> 1
 * 0, 0, 1, 0 ==> 2
 * 0, 1, 0, 1 ==> 5
 * 1, 0, 0, 1, 0 ==> 18
 * 0, 0, 0, 1, 0, 1 ==> 5
 * 0, 1, 1, 0 ==> 6
 * 1, 1, 1, 1 ==> 15
 * 1, 0, 1, 1 ==> 11
 */
describe("Test Binary Array To Decimal", () => {
  test("Test [0, 0, 0, 1] should give 1", () => {
    expect(binaryArrayToDecimal([0, 0, 0, 1])).toBe(1);
  });

  test("Test [0, 0, 1, 0] should give 2", () => {
    expect(binaryArrayToDecimal([0, 0, 1, 0])).toBe(2);
  });

  test("Test [0, 1, 0, 1] should give 5", () => {
    expect(binaryArrayToDecimal([0, 1, 0, 1])).toBe(5);
  });

  test("Test [1, 0, 0, 1, 0] should give 18", () => {
    expect(binaryArrayToDecimal([1, 0, 0, 1, 0])).toBe(18);
  });

  test("Test [0, 0, 0, 1, 0, 1] should give 5", () => {
    expect(binaryArrayToDecimal([0, 0, 0, 1, 0, 1])).toBe(5);
  });

  test("Test [0, 1, 1, 0] should give 6", () => {
    expect(binaryArrayToDecimal([0, 1, 1, 0])).toBe(6);
  });

  test("Test [1, 1, 1, 1] should give 15", () => {
    expect(binaryArrayToDecimal([1, 1, 1, 1])).toBe(15);
  });

  test("Test [1, 0, 1, 1] should give 11", () => {
    expect(binaryArrayToDecimal([1, 0, 1, 1])).toBe(11);
  });
});
