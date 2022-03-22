const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// let res = nums[0] // 储存结果，初始化为从0到1的子序列和
// let sum = 0 // 储存子序列和
// for (let i = 0, len = nums.length; i < len; i++) {
//   sum = 0 // 清零避免干扰后续内容
//   console.log('res', res)
//   for (let j = i; j < len; j++) {
//     // 计算以nums[i]开始以nums[j]结尾的子序列的和
//     sum += nums[j]
//     res = Math.max(sum, res) // 如果子序列和创造新高则储存
//   }
// }

var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (const num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    ans = Math.max(ans, sum)
  }
  return ans
}

console.log('maxSubArray(nums)', maxSubArray(nums))
