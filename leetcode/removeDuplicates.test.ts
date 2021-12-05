const removeDuplicates = (nums: number[]): number => {
  nums.splice(0, nums.length, ...new Set(nums))

  return nums.length
}

describe('removeDuplicates', () => {
  it('should remove duplicate values from an array and return the length of the new array', () => {
    let nums = [1, 2, 3, 3, 3, 4]

    expect(removeDuplicates(nums)).toBe(4)
    expect(nums).toEqual([1, 2, 3, 4])
  })

  it('should return an empty array if input is ampty', () => {
    let nums: number[] = []

    expect(removeDuplicates(nums)).toBe(0)
    expect(nums).toEqual([])
  })
})
