"""
Given an array of integers and a positive integer, determine the number of pairs where and + is divisible by.

Example



Three pairs meet the criteria:  and .

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

int n: the length of array
int ar[n]: an array of integers
int k: the integer divisor
Returns
- int: the number of pairs

Input Format

The first line contains  space-separated integers,  and .
The second line contains  space-separated integers, each a value of .

Constraints

Sample Input

STDIN Function
----- --------
6 3 n = 6, k = 3
1 3 2 6 1 2 ar = [1, 3, 2, 6, 1, 2]
Sample Output

 5
"""


def divisibleSumPairs(n, k, ar):
    freq = {}
    count = 0
    for num in ar:
        rem = num % k
        complement = (k - rem) % k
        if complement in freq:
            count += freq[complement]

        if rem in freq:
            freq[rem] += 1
        else:
            freq[rem] = 1

    return count

