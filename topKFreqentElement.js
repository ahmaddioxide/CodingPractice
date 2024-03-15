/*
 Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    //creating map
    let map = new Map();
    //looping through the array and adding the elements to the map
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i], 1);
        }
    }
    // console.log(map);

    //using bucket sort
    let bucket = new Array(nums.length+1);
    for(let [key, value] of map.entries()){
        if(bucket[value] === undefined){
            bucket[value] = [key];
        }else{
            bucket[value].push(key);
        }
    }
    // console.log(bucket);

    //getting the k most frequent elements
    let result = [];
    // iterating through the bucket array from the end 

    for(let i=bucket.length-1; i>=0; i--){
        if(bucket[i] !== undefined){
            for(let j=0; j<bucket[i].length; j++){
                result.push(bucket[i][j]);
                if(result.length === k){
                    return result;
                }
            }
        }
    }
    return result;

};


console.log(topKFrequent([1,1,1,1,2,2,3,3,,4], 3)); // [1,2]
