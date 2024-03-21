/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example
a=[1.2,3,4,3,2,1]

The unique element is . 4

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .
*/


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < a.length; i++) {
       console.log('I value', i);
       console.log('a[i] value', a[i]);
       console.log('result value', result);

        result = result^a[i]; // XOR

        console.log('result After ', result);
        console.log('-------------------');

        // 0 ^ 1 = 1
        // 1 ^ 1 = 0
        // 0 ^ 0 = 0
        // 1 ^ 0 = 1

        //XOR have the property that if you XOR a number with itself, you get 0.
        //its mean if we XOR all the elements of the array, we will be left with the element that occurs only once.
    }
    console.log('Result', result);
    return result;
}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}


