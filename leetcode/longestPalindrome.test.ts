const isValidPalindrome = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}

const findLongestPalindromeFromCenter = ({
  left,
  right,
  str
}: {
  left: number
  right: number
  str: string
}) => {
  let isPalindrome = true
  let palindrome = str.slice(left, right + 1)
  while (isPalindrome) {
    left--
    right++

    if ((!str[left] && !str[right]) || str[left] !== str[right])
      isPalindrome = false
    else {
      palindrome = str.slice(left, right + 1)
    }
  }

  return palindrome
}
function longestPalindrome(str: string): string {
  const [firstCharacter] = str
  const palindromes = new Set([firstCharacter])

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      palindromes.add(
        findLongestPalindromeFromCenter({
          left: i - 1,
          right: i,
          str
        })
      )
    }
    if (str[i - 1] === str[i + 1]) {
      palindromes.add(
        findLongestPalindromeFromCenter({
          left: i - 1,
          right: i + 1,
          str
        })
      )
    }
  }

  return [...palindromes].sort((a, b) => b.length - a.length)[0]
}

describe('isValidPalindrome', () => {
  it('should return if a string is a valid palindrome', () => {
    expect(isValidPalindrome('123454321')).toBe(true)
    expect(isValidPalindrome('asddsa')).toBe(true)
    expect(isValidPalindrome('asdfgfds')).toBe(false)
    expect(isValidPalindrome('123456')).toBe(false)
  })
})

describe('shortestPalindrome', () => {
  it('should return the shortest palindrome by adding characters in front of it', () => {
    expect(longestPalindrome('bb')).toBe('bb')
    expect(longestPalindrome('9991215121999ll')).toBe('9991215121999')
    expect(longestPalindrome('a')).toBe('a')
    expect(longestPalindrome('ac')).toBe('a')
    expect(longestPalindrome('asahgjkllkj')).toBe('jkllkj')
    expect(longestPalindrome('asahgjkllj')).toBe('asa')
    expect(longestPalindrome('babad')).toBe('bab')
  })
})
