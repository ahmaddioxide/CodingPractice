/*
Given five positive integers, 
find the minimum and maximum values that can be calculated by 
summing exactly four of the five integers. 
Then print the respective minimum and maximum values as a single line of two space-separated long integers.


Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample output

10 14
*/

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[i]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  var minSum = 0;
  var maxSum = 0;

  // console.log(arr)

  for (let i = 0; i < 4; i++) {
    minSum += arr[i];
  }

  for (let i = arr.length; i > arr.length - 4; i--) {
    // console.log(i);
    maxSum += arr[i - 1];
  }

  console.log(minSum, maxSum);
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
