import numbers from '../data/numbers.json'

const bubbleSort = (items: number[]) => {
  const list = [...items]
  let swapped = true

  while (swapped) {
    swapped = false

    for (let i = 0, l = list.length; i < l; i++) {
      if (list[i] > list[i + 1]) {
        ;[list[i], list[i + 1]] = [list[i + 1], list[i]]

        swapped = true
      }
    }
  }

  return list
}

describe('Bubble sort', () => {
  it('should sort an unserted array', () => {
    expect(bubbleSort(numbers)).toEqual([...numbers].sort((a, b) => a - b))
  })
})
