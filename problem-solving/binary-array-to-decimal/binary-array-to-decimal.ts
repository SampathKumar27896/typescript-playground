/**
 * Function to convert the binary numbers present in the array to equivalent decimal number
 * @param array number[]
 * @returns numer
 * Time Complexity: O(n), Space Complexity: O(1)
 */
export default function binaryArrayToDecimal(array: number[]): number {
  let result = 0;
  for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    if (array[i] === 1) {
      result = result + Math.pow(2, j);
    }
  }
  return result;
}
