

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//using a hash table


var twoSum = function(nums, target) {

    //create a hash table
    //that stores the complement of the current number
    //complement = target - current number
    //if the complement exists in the hash table
    let hash = {};
    for(let curr = 0; curr < nums.length; curr++){
        let num = nums[curr];
        let complement = target - num;
        //if the complement exists in the hash table
        if(complement in hash){
            //return the index of the complement and the current index
            return [hash[complement], curr];
        }
        //else, add the current number to the hash table
        // and continue
        hash[num] = curr;

    }
    //if no solution is found, return an empty array
    return [];
    
};