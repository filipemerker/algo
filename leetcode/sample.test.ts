const findNeedle = (haystack: string, needle: string): number => {
  if (!needle) return 0

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }

  return -1
}

describe('findNeedle', () => {
  it('should return the index of the first occurencce of a subustring', () => {
    expect(findNeedle('qiowdjqiowdj', 'djq')).toBe(4)
    expect(findNeedle('12kp3ok12ope', '12op')).toBe(7)
    expect(findNeedle('hello', 'll')).toBe(2)
    expect(findNeedle('', '')).toBe(0)
    expect(findNeedle('asdkpoqokw', '')).toBe(0)
  })
  it("should return -1 if the the substring can't be found", () => {
    expect(findNeedle('qiowdjqiowdj', '123')).toBe(-1)
    expect(findNeedle('', ' ')).toBe(-1)
  })
})
