const twoSum = (nums, target) => {
  for (let j = 1; j <= nums.length; j++) {
    for (let i = 0; i <= nums.length; i++) {
      if (nums[j] + nums[i] === target && j !== i) {
       return [i,j]
      }
    }
  }
  return []
};

console.log(twoSum([2,3,5,7], 9)) // [0,3]
console.log(twoSum([2,3,5,7], 8)) // [1,2]
console.log(twoSum([2,3,5,7], 10)) // [1,3]
console.log(twoSum([2,7], 11)) // []
