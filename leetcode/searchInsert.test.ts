function searchInsert(nums: number[], target: number): number {
  const { length } = nums

  if (nums[0] > target) return 0
  if (nums[length - 1] < target) return length

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i
    } else if (nums[i] <= target && nums[i + 1] >= target) {
      return i + 1
    }
  }

  return nums.length
}

describe('findNeedle', () => {
  it('should return the index of the item if it is present', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    expect(searchInsert([1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 90, 100], 90)).toBe(10)
  })
  it.only('should return the estimated index by array order if the item ought to be there', () => {
    //expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0)
    expect(searchInsert([1], 0)).toBe(0)
  })
})
