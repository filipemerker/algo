const factorial = (threshold: number): number => {
  if (threshold <= 1) {
    return threshold
  }

  return threshold * factorial(threshold - 1)
}

describe('Factorial', () => {
  it('should sequentelly multiply all numbers up to the threshold', () => {
    expect(factorial(5)).toEqual(120)
    expect(factorial(10)).toEqual(3628800)
  })
})
