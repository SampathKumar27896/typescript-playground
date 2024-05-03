/**
 *  **Example 1:**

    **Input:** nums = [2,7,11,15], target = 9
    **Output:** [0,1]
    **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].

    **Example 2:**

    **Input:** nums = [3,2,4], target = 6
    **Output:** [1,2]

    **Example 3:**

    **Input:** nums = [3,3], target = 6
    **Output:** [0,1]
 */

/** Method 1: Brute force 
 *  Time Complexity: O(n^2) (For each element of the array, you will iterate the whole array from i+1)
 *  Space Complexity: O(1)
*/
const twoSumBruteForce = (nums: number[], target: number): number[] => {

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [-1, -1];
}

/** Method 1: Using Map 
 *  Time Complexity: O(n) (You traverse only one time the entire array)
 *  Space Complexity: O(n) (Worst case you will store all the elements in the Map datastructure for reference)
 *  Two addends make up a target here in this problem ex: 2 + 1 = 3, Here first addend is 2 and second is 1
 *  If we subtract the first addend from the target we will get second addend
 *  If second addend is found on the addendMap then we can return the indexes of the two addends
 *  Or else we will set the first addend and its index on the addendMap
 *
*/
const twoSumMap = (nums: number[], target: number): number[] => {

    const addendMap = new Map<number, number>();
    let secondAddend = 0, firstAddend = 0;
    for(let i = 0; i < nums.length; i++) {
        firstAddend = nums[i];
        secondAddend = target - firstAddend;
        if(addendMap.has(secondAddend)) {
            return [i, addendMap.get(secondAddend)!];
        } else {
            addendMap.set(firstAddend, i);
        }
    }
    return [-1, -1];
}

export { twoSumBruteForce, twoSumMap };