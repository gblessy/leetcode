/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const differenceIndexes = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in differenceIndexes) {
      return [differenceIndexes[nums[i]], i];
    } else {
      const difference = target - nums[i];
      differenceIndexes[difference] = i;
    }
  }
  return [];
};

console.log(twoSum([2, 7, 5, 6, 4, 3], 9), "0,1");
