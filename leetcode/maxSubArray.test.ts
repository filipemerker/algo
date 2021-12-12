const maxSubArray = (nums: number[]): number => {
  let sum = nums[0],
    maxSum = nums[0]

  for (let i = 1; i < nums.length; ++i) {
    sum = Math.max(nums[i], sum + nums[i])
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum
}

describe('maxSubArray', () => {
  it('should return sum of the items in the sub array that has the highest value', () => {
    expect(maxSubArray([1])).toBe(1)
    expect(maxSubArray([-7, -8, -3])).toBe(-3)
    expect(maxSubArray([7, 8, 3])).toBe(18)
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
    expect(maxSubArray([-7, -8, -3, 1])).toBe(1)
  })
})
