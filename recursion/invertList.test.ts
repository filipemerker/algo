/*
  ________
 |        |
[1, 2, 3, 4]
 |________|

*/

const invertList = (items: number[]): number[] => {
  if (items.length < 2) {
    return items
  }

  const left = items.shift()
  const right = items.pop()

  return [right as number, ...invertList(items), left as number]
}

describe('Factorial', () => {
  it('should sequentelly multiply all numbers up to the threshold', () => {
    expect(invertList([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1
    ])
    expect(invertList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ])
  })
})
