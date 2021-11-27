import numbers from '../data/numbers.json'

const bogoSort = (items: number[]) => {
  const list = [...items]
  let attempts = 0

  const isSorted = (list: number[]) => {
    let sorted = true

    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        sorted = false
        break
      }
    }

    return sorted
  }

  const shuffle = (list: number[]) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      return ([list[i], list[j]] = [list[j], list[i]])
    }
  }

  while (!isSorted(list)) {
    attempts++
    shuffle(list)
  }

  console.log(attempts)
  return list
}

describe('Test', () => {
  it('Bogo Sort', () => {
    expect(bogoSort(numbers)).toEqual([...numbers].sort((a, b) => a - b))
  })
})
