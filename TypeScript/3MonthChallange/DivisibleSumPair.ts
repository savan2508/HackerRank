/**
 * Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .
 *
 * Example
 *
 *
 *
 * Three pairs meet the criteria:  and .
 *
 * Function Description
 *
 * Complete the divisibleSumPairs function in the editor below.
 *
 * divisibleSumPairs has the following parameter(s):
 *
 * int n: the length of array
 * int ar[n]: an array of integers
 * int k: the integer divisor
 * Returns
 * - int: the number of pairs
 *
 * Input Format
 *
 * The first line contains  space-separated integers,  and .
 * The second line contains  space-separated integers, each a value of .
 *
 * Constraints
 *
 * Sample Input
 *
 * STDIN Function
 * ----- --------
 * 6 3 n = 6, k = 3
 * 1 3 2 6 1 2 ar = [1, 3, 2, 6, 1, 2]
 * Sample Output
 *
 *
 * Explanation 5
 *
 * Here are the valid pairs when :
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  const freq: { [key: number]: number } = {};
  let count = 0;
  ar.forEach((int) => {
    const remainder = int % k;
    const complement = (k - remainder) % k;
    if (complement in freq) {
      count += freq[complement];
    }
    if (remainder in freq) {
      freq[remainder]++;
    } else {
      freq[remainder] = 1;
    }
  });
  return count;
}

const n = 6;
const k = 5;
// const ar = [1, 3, 2, 6, 1, 2];
const ar = [1, 2, 3, 4, 5, 6];

console.log(divisibleSumPairs(n, k, ar));
