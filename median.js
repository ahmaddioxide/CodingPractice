"use strict";

const fs = require("fs");

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
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function insertionSort(arr) {
  // Start iterating from the second element of the array.
  for (let i = 1; i < arr.length; i++) {
    // 'current' is the element to be inserted in its correct place.
    let current = arr[i];

    // 'j' will help us traverse backwards from the 'i'th position.
    let j = i - 1;

    // Keep moving elements of arr[0..i-1] that are greater than 'current'
    // one position ahead of their current position.
    // The loop continues until we find the right spot for 'current' or reach the beginning of the array.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Move the element one position up.
      j--; // Move one position back in the array.
    }

    // Place 'current' in its correct position so that the elements before it are less than 'current'.
    arr[j + 1] = current;
  }

  // Return the sorted array.
  return arr;
}
function findMedian(arr) {
  var length = arr.length;
  var middleElementNumber = length / 2;
  middleElementNumber = parseInt(middleElementNumber);

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 1; j < arr.length; j++) {
  //       if (arr[j - 1] > arr[i]) {
  //         let temp = arr[j - 1];
  //         arr[j - 1] = arr[i];
  //         arr[i] = temp;
  //       }
  //     }
  //   }
  arr = insertionSort(arr);

  return arr[middleElementNumber];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = findMedian(arr);

  ws.write(result + "\n");

  ws.end();
}
