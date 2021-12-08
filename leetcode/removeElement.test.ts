function removeElement(nums: number[], val: number): number {
  let i = 0

  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }

  return nums.length
}

describe('removeElement', () => {
  it('should remove all occurences of a particular number', () => {
    let nums = [1, 2, 3, 3, 3, 4]

    expect(removeElement(nums, 3)).toBe(3)
    expect(nums).toEqual([1, 2, 4])
  })
  it('should remove all occurences of a particular number', () => {
    let nums = [0, 1, 2, 2, 3, 0, 4, 2]

    expect(removeElement(nums, 2)).toBe(5)
    expect(nums).toEqual([0, 1, 3, 0, 4])
  })
})
