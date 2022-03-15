const nums = [2, 7, 11, 15, 6],
  target = 8

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(nums[i], i)
  }
}

console.log('twoSum', twoSum(nums, target))
