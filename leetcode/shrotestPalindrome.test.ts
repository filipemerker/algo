const isValidPalindrome = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

const reverse = (str: string): string => str.split('').reverse().join('')

const shrotestPalindrome = (str: string): string => {
  for (let i = str.length; i >= 0; i--) {
    if (isValidPalindrome(str.slice(0, i))) {
      return `${reverse(str.slice(i))}${str}`
    }
  }
  return `${reverse(str)}${str}`
}

describe('isValidPalindrome', () => {
  it('should return if a string is a valid palindrome', () => {
    expect(isValidPalindrome('123454321')).toBe(true)
    expect(isValidPalindrome('asddsa')).toBe(true)
    expect(isValidPalindrome('asdfgfds')).toBe(false)
    expect(isValidPalindrome('123456')).toBe(false)
  })
})

describe('shrotestPalindrome', () => {
  it('should return the shortest palindrome by adding characters in front of it', () => {
    expect(shrotestPalindrome('aasaa')).toBe('aasaa')
    expect(shrotestPalindrome('abcd')).toBe('dcbabcd')
    expect(shrotestPalindrome('aacecaaa')).toBe('aaacecaaa')
    expect(shrotestPalindrome('hello')).toBe('ollehello')
    expect(shrotestPalindrome('454321')).toBe('123454321')
  })
})
