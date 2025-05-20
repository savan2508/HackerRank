/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where .
 */
function lonelyinteger(a: number[]): number {
  // Write your code here
  const isUnique: { [key: number]: boolean } = {};
  for (const int of a) {
    if (!(int in isUnique)) {
      isUnique[int] = true;
    } else {
      delete isUnique[int];
    }
  }
  return Number(Object.keys(isUnique)[0]);
}

const a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyinteger(a));
