const longestCommonPrefix = (strs: string[]): string => {
  const sorted = strs.sort((a, b) => a.length - b.length)
  let [commonPrefix] = sorted
  for (let i = 1; i < sorted.length; i++) {
    let newPrefix = ''

    for (let j = 1; j <= sorted[i].length; j++) {
      if (commonPrefix.startsWith(sorted[i].slice(0, j))) {
        newPrefix = sorted[i].slice(0, j)
      } else {
        commonPrefix = newPrefix
      }
    }

    if (!commonPrefix) break
    newPrefix = ''
  }

  return commonPrefix
}

describe('Longest Common Prefix', () => {
  it('should correctly find the longest common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    expect(
      longestCommonPrefix(['aaron paul', 'aaron rodgers', 'aaron burr'])
    ).toBe('aaron ')
    expect(longestCommonPrefix(['ab', 'a'])).toBe('a')
  })

  it('should return an empty string if there is no common prefix', () => {
    expect(longestCommonPrefix(['aca', 'cba'])).toBe('')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
    expect(longestCommonPrefix(['dog', 'racecar', 'racecar'])).toBe('')
    expect(longestCommonPrefix(['racecar', 'racecar', 'dog'])).toBe('')
  })
})
