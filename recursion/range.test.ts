var range = (start: number, end: number): number[] => {
  if (end - start === 3) {
    return [start + 1, end - 1]
  } else if (end - start === 2) {
    return [start + 1]
  } else {
    const list = range(start + 1, end - 1)
    list.unshift(start + 1)
    list.push(end - 1)

    return list
  }
}

it('Range', () => {
  expect(range(1, 9)).toEqual([2, 3, 4, 5, 6, 7, 8])
  expect(range(1, 10)).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
})
