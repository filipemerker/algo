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

  const [left] = items.slice(0, 1)
  const [right] = items.slice(-1)
  const center = items.slice(1, -1)

  return [right as number, ...invertList(center), left as number]
}

describe('Invert List', () => {
  it('should invert a list of numbers', () => {
    expect(invertList([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      9, 8, 7, 6, 5, 4, 3, 2, 1
    ])
    expect(invertList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ])
  })
})
