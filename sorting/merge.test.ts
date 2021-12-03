import numbers from '../data/numbers.json'

const mergeSort = (items: number[]) => {
  const list = [...items]
  const merge = (left: number[], right: number[]) => {
    const mergedList = []

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        mergedList.push(left.shift())
      } else {
        mergedList.push(right.shift())
      }
    }

    return [...mergedList, ...left, ...right] as number[]
  }
  const sort = (list: number[]): number[] => {
    if (list.length === 1) {
      return list
    }

    const half = ~~(list.length / 2)
    const left = list.slice(0, half)
    const right = list.slice(half)

    return merge(sort(left), sort(right))
  }

  return sort(list)
}

describe('Merge sort', () => {
  it('should sort an unserted array', () => {
    expect(mergeSort(numbers)).toEqual([...numbers].sort((a, b) => a - b))
  })
})
