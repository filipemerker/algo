const isValidParenthesis = (str: string): boolean => {
  let hasPairs = true
  let hasPairsMatch = /\(\)|\[\]|\{\}/g

  while (hasPairs) {
    if (hasPairsMatch.test(str)) {
      str = str.replace(hasPairsMatch, '')
    } else {
      hasPairs = false
    }
  }

  return !str.length
}

describe('isValidParenthesis', () => {
  it('should identify if the parenthesis are correctly opening and closing', () => {
    expect(isValidParenthesis('()')).toBe(true)
    expect(isValidParenthesis('()[]{}')).toBe(true)
    expect(isValidParenthesis('(]')).toBe(false)
    expect(isValidParenthesis('([)]')).toBe(false)
    expect(isValidParenthesis('{[]}')).toBe(true)
    expect(isValidParenthesis('[([]])')).toBe(false)
    expect(isValidParenthesis('(()())()')).toBe(true)
    expect(isValidParenthesis('(()()()')).toBe(false)
    expect(isValidParenthesis(')(')).toBe(false)
  })
})
