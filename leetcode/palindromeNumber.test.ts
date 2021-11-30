const isPalindrome = (number: number): boolean => {
  if (number < 0) return false

  const characters = `${number}`.split('')
  const middle = ~~(characters.length / 2)

  for (let i = 0; i < middle; i++) {
    if (characters[i] !== characters[characters.length - 1 - i]) {
      return false
    }
  }

  return true
}

describe('Bubble sort', () => {
  it('should sort an unserted array', () => {
    expect(isPalindrome(121)).toBe(true)
    expect(isPalindrome(1221)).toBe(true)
    expect(isPalindrome(-121)).toBe(false)
    expect(isPalindrome(10)).toBe(false)
    expect(isPalindrome(-101)).toBe(false)
    expect(isPalindrome(1210121)).toBe(true)
  })
})
