/**
 *
 * @param number
 * @returns product the product of the digits of the given number
 */
const productOfDigits = (number) => {
    let product = 1;
    let digit = 1;
    while (number > 0) { // Time complexity O(m) where m denotes the number of digits
        digit = number % 10;
        product = product * digit;
        number = Math.floor(number / 10);
    }
    return product;
};
/**
 *
 * @param number
 * @returns a number the result of no of times we took the number to reduce to one digit
 * Time complexity log(n) * m
 */
const persistence = (number) => {
    let result, noOfIterations = 0;
    if (number < 10) {
        noOfIterations = 0;
    }
    else {
        do {
            noOfIterations++;
            result = productOfDigits(number);
            number = result;
        } while (result > 9); // Time complexity O(log(n)) Since the number is appx reduced to half each and every iteration
    }
    return noOfIterations;
};
export default persistence;
