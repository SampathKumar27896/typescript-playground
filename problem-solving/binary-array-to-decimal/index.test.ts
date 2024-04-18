import binaryArrayToDecimal from './index';


test("binaryArrayToDecimal  return 0", () => {
    expect(binaryArrayToDecimal([])).toBe(0);
})