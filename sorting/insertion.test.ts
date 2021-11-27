import numbers from '../data/numbers.json'

const insertionSort = (items: number[]) => {
  const list = [...items]

  for (let i = 0, length = list.length; i < length; i++) {
    for (let j = i; j >= 0; j--) {
      if (list[j] < list[j - 1]) {
        ;[list[j], list[j - 1]] = [list[j - 1], list[j]]
      }
    }
  }

  return list
}

describe('Insertion sort', () => {
  it('should sort an unserted array', () => {
    expect(insertionSort(numbers)).toEqual([...numbers].sort((a, b) => a - b))
  })
})
