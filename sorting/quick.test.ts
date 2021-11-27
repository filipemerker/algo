import numbers from '../data/numbers.json'

const quickSort = (items: number[]) => {
  const list = [...items]

  const sort = (list: number[]): number[] => {
    if (list.length < 2) {
      return list
    }

    const pivot = list.pop() as number
    const left = []
    const right = []

    while (list.length) {
      if (list[0] > pivot) {
        right.push(list.shift())
      } else {
        left.push(list.shift())
      }
    }

    return [...sort(left as number[]), pivot, ...sort(right as number[])]
  }

  return sort(list)
}

describe('Quick sort', () => {
  it('should sort an unserted array', () => {
    expect(quickSort(numbers)).toEqual([...numbers].sort((a, b) => a - b))
  })
})
