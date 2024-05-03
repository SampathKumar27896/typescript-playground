> Write a function, persistence, that takes in a positive parameter num
> and returns its multiplicative persistence, which is the number of
> times you must multiply the digits in num until you reach a single
> digit.

For example (Input --> Output):

**39** --> **3** (because 3 _ 9 = 27, 2 _ 7 = 14, 1 _ 4 = 4 and we stop at 4 because 4 is a one digit number)
**999** --> **4** (because 9 _ 9 _ 9 = 729, 7 _ 2 _ 9 = 126, 1 _ 2 _ 6 = 12, 1 _ 2 = 2 and we stop at 2 because 2 is a one digit number )
**4** --> **0** (because 4 is already a one-digit number)
