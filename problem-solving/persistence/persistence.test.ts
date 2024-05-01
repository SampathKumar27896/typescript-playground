import persistence from './persistence';
/**
 * Sample test cases
 * 999 --> 4
 * 39 --> 3
 * 4 --> 0
 */
describe("Test persistence and find the no of times we iterate to reduce the number to 1 digit", () => {
    test("Test 999 should give 4", () => {
        expect(persistence(999)).toBe(4);
    })

    test("Test 39 should give 3", () => {
        expect(persistence(39)).toBe(3);
    })

    test("Test 4 should give 0", () => {
        expect(persistence(4)).toBe(0);
    })
})