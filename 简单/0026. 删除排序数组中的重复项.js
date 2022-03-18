// const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const arr = [1, 1, 2, 3]

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const size = nums.length
  if (size == 0) return 0
  let slowP = 0
  for (let fastP = 0; fastP < size; fastP++) {
    if (nums[fastP] !== nums[slowP]) {
      slowP++
      nums[slowP] = nums[fastP]
    }
  }
  console.log('nums', nums)
  return slowP + 1
}

console.log('removeDuplicates', removeDuplicates(arr))
