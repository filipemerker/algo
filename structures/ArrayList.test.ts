class ArrayList {
  length: number
  data: any
  constructor(...elements: any[]) {
    this.length = 0
    this.data = {}

    elements.forEach((element) => {
      this.data[this.length] = element
      this.length++
    })
  }

  push = (element: any) => {}
  pop = () => {}
  get = (element: any) => {}
  remove = (element: any) => {}
}

describe('Array List', () => {
  it('should have a working length', () => {
    const empty = new ArrayList()
    const full = new ArrayList(1, 2, 3, 4)

    expect(empty.length).toBe(0)
    expect(full.length).toBe(4)
  })

  it('should have a push method that pushed to the end of the list', () => {
    const list = new ArrayList()

    expect(list.length).toBe(0)

    list.push('a')
    list.push('b')

    expect(list.length).toBe(2)
    expect(list.get(0)).toBe('a')
    expect(list.get(1)).toBe('b')
  })

  it('should have a push method that pushes to the end of the list', () => {
    const list = new ArrayList()

    expect(list.length).toBe(0)

    list.push('a')
    list.push('b')

    expect(list.length).toBe(2)
    expect(list.get(0)).toBe('a')
    expect(list.get(1)).toBe('b')
  })

  it('should have a pop method that removes from the end of the list', () => {
    const list = new ArrayList('a', 'b', 'c')

    expect(list.length).toBe(3)

    const item = list.pop()

    expect(list.length).toBe(2)
    expect(item).toBe('c')
  })

  it('should have a remove method that removes any index', () => {
    const list = new ArrayList('a', 'b', 'c', 'd', 'e')

    expect(list.length).toBe(5)
    expect(list.get(3)).toBe('c')

    list.remove(3)

    expect(list.length).toBe(4)
    expect(list.get(3)).toBe('d')
  })
})
