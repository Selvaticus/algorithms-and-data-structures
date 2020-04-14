const BinaryHeap = require('./binary_heap')

describe("Insert into BinaryHeap", () => {

  test("one element into empty BinaryHeap", () => {
    // Arrange
    const bh = new BinaryHeap();

    // Act
    bh.insert(1);

    // Assert
    expect(bh.values).toStrictEqual([1]);
  })

  test("two elements into empty BinaryHeap", () => {
    // Arrange
    const bh = new BinaryHeap();

    // Act
    bh.insert(1);
    bh.insert(2);

    // Assert
    expect(bh.values).toStrictEqual([2, 1]);
  })

  test("five elements into empty BinaryHeap", () => {
    // Arrange
    const bh = new BinaryHeap();

    // Act
    bh.insert(1);
    bh.insert(2);
    bh.insert(4);
    bh.insert(3);
    bh.insert(5);

    // Assert
    expect(bh.values).toStrictEqual([5, 4, 2, 1, 3]);
  })
})

describe("Remove Max from BinaryHeap", () => {
  test("when is empty", () => {
    // Arrange
    const bh = new BinaryHeap();

    // Act
    const result = bh.removeMax();

    // Assert
    expect(result).toStrictEqual(null);
    expect(bh.values).toStrictEqual([]);
  })

  test("when has one element", () => {
    // Arrange
    const bh = new BinaryHeap();
    bh.insert(1);

    // Act
    const result = bh.removeMax();

    // Assert
    expect(result).toStrictEqual(1);
    expect(bh.values).toStrictEqual([]);
  })

  test("when has two elements", () => {
    // Arrange
    const bh = new BinaryHeap();
    bh.insert(55);
    bh.insert(99);

    // Act
    const result = bh.removeMax();

    // Assert
    expect(result).toStrictEqual(99);
    expect(bh.values).toStrictEqual([55]);
  })

  test("when has 5 elements", () => {
    // Arrange
    const bh = new BinaryHeap();
    bh.insert(1);
    bh.insert(2);
    bh.insert(4);
    bh.insert(3);
    bh.insert(5);

    // Act
    const result = bh.removeMax();

    // Assert
    expect(result).toStrictEqual(5);
    expect(bh.values).toStrictEqual([4, 3, 2, 1]);
  })
})