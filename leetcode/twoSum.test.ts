const twoSum = (items: number[], target: number): any[] => {
  let response: any[] = []

  for (let i = 0, lengthI = items.length; i < lengthI; i++) {
    for (let j = i + 1, lengthJ = items.length; j < lengthJ; j++) {
      if (items[i] + items[j] === target) {
        response = [i, j]
        break
      }
    }

    if (response.length) {
      break
    }
  }

  return response
}

describe('Bubble sort', () => {
  it('should sort an unserted array', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
})
