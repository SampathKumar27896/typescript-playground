import { twoSumBruteForce, twoSumMap } from './two-sum';

describe("Test twoSum using BruteForce method", () => {
    
    test("Test twoSumBruteForce using Array [2,7,11,15] and target = 9, expect: [0, 1]", () => {
        
        //Arrange
        let nums = [2, 7, 11, 15], target = 9, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumBruteForce(nums, target);

        //Assert
        expect(expectedSum).toContain(0);
        expect(expectedSum).toContain(1);
    });

    test("Test twoSumBruteForce using Array [3,2,4] and target = 6, expect: [1, 2]", () => {
        
        //Arrange
        let nums = [3,2,4], target = 6, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumBruteForce(nums, target);

        //Assert
        expect(expectedSum).toContain(1);
        expect(expectedSum).toContain(2);
    })

    test("Test twoSumBruteForce using Array [3, 3] and target = 6, expect: [0, 1]", () => {
        
        //Arrange
        let nums = [3,3], target = 6, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumBruteForce(nums, target);

        //Assert
        expect(expectedSum).toContain(0);
        expect(expectedSum).toContain(1);
    })
});

describe("Test twoSum using Map data structure", () => {
    
    test("Test twoSumBruteMap using Array [2,7,11,15] and target = 9, expect: [0, 1]", () => {
        
        //Arrange
        let nums = [2, 7, 11, 15], target = 9, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumMap(nums, target);

        //Assert
        expect(expectedSum).toContain(0);
        expect(expectedSum).toContain(1);
    });

    test("Test twoSumMap using Array [3,2,4] and target = 6, expect: [1, 2]", () => {
        
        //Arrange
        let nums = [3,2,4], target = 6, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumMap(nums, target);

        //Assert
        expect(expectedSum).toContain(1);
        expect(expectedSum).toContain(2);
    })

    test("Test twoSumMap using Array [3, 3] and target = 6, expect: [0, 1]", () => {
        
        //Arrange
        let nums = [3,3], target = 6, expectedSum: number[] = [];

        //Act
        expectedSum = twoSumMap(nums, target);

        //Assert
        expect(expectedSum).toContain(0);
        expect(expectedSum).toContain(1);
    })
});