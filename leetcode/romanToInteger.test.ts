const romanToInteger = (s: string): number => {
  const numeralMap: { [key: string]: any } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const prefixedValuesMap: { [key: string]: any } = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  for (const prefix in prefixedValuesMap) {
    s = s.replace(prefix, `${prefixedValuesMap[prefix]} `)
  }

  for (const numeral in numeralMap) {
    s = s.replace(new RegExp(numeral, 'g'), `${numeralMap[numeral]} `)
  }

  return s.split(' ').reduce((acc, number) => acc + Number(number), 0)
}

describe('Roman to integer sort', () => {
  it('should correctly translate from roman numerals to integers', () => {
    expect(romanToInteger('III')).toBe(3)
    expect(romanToInteger('IV')).toBe(4)
    expect(romanToInteger('IX')).toBe(9)
    expect(romanToInteger('LVIII')).toBe(58)
    expect(romanToInteger('MCMXCIV')).toBe(1994)
  })
})
