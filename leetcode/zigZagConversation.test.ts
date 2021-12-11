const convert = (s: string, numRows: number): string => {
  let { length } = s
  if (length <= 1 || numRows <= 1 || numRows === length) return s
  if (numRows === 2) {
    return [
      ...s.split('').filter((_, i) => i % 2 === 0),
      ...s.split('').filter((_, i) => i % 2 !== 0)
    ].join('')
  }

  let matrix: string[][] = new Array(numRows).fill(undefined).map(() => [])

  let i: number = 0
  let j: number = 0
  let direction = 'zig'
  let characters = s.split('')

  while (characters.length) {
    if (direction === 'zig') {
      if (i < numRows) {
        matrix[i].push(characters.shift() as string)
        i++
      } else {
        direction = 'zag'
        j++
        i--
      }
    }

    if (direction === 'zag') {
      if (i > 0) {
        i--
        matrix[i].push(characters.shift() as string)

        j++
      } else {
        direction = 'zig'
        i++
      }
    }
  }

  return matrix.flat().join('')
}

describe('findNeedle', () => {
  it('should convert a string to a zigzag acoording to the number of lines', () => {
    expect(convert('A', 1)).toBe('A')
    expect(convert('PAYPALISHIRING', 2)).toBe('PYAIHRNAPLSIIG')
    expect(convert('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING')
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI')
  })
})
