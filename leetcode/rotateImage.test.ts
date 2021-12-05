const rotateImage = (image: number[][]): number[][] => {
  const dimentions = {
    y: image.length,
    x: image[0].length
  }

  const inverted: number[][] = new Array(dimentions.x).fill([]).map((_, i) => {
    const response: number[] = []

    for (let j = dimentions.y - 1; j >= 0; j--) {
      response.push(image[j][i])
    }

    return response
  })

  return inverted
}

describe('removeDuplicates', () => {
  it('should rotate a matrix', () => {
    let image: number[][] = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]

    expect(rotateImage(image)).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ])
  })
  it('should rotate a rectangular matrix', () => {
    let image: number[][] = [
      [10, 11, 12, 13],
      [14, 15, 16, 17],
      [18, 19, 20, 21]
    ]

    expect(rotateImage(image)).toEqual([
      [18, 14, 10],
      [19, 15, 11],
      [20, 16, 12],
      [21, 17, 13]
    ])
  })
})
