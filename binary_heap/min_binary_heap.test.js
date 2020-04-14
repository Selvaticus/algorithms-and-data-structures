const MinBinaryHeap = require('./min_binary_heap')

describe("Insert into MinBinaryHeap", () => {

  test("one element into empty MinBinaryHeap", () => {
    // Arrange
    const bh = new MinBinaryHeap();

    // Act
    bh.insert(1);

    // Assert
    expect(bh.values).toStrictEqual([1]);
  })

  test("two elements into empty MinBinaryHeap", () => {
    // Arrange
    const bh = new MinBinaryHeap();

    // Act
    bh.insert(1);
    bh.insert(2);

    // Assert
    expect(bh.values).toStrictEqual([1, 2]);
  })

  test("five elements into empty MinBinaryHeap", () => {
    // Arrange
    const bh = new MinBinaryHeap();

    // Act
    bh.insert(1);
    bh.insert(2);
    bh.insert(4);
    bh.insert(3);
    bh.insert(5);

    // Assert
    expect(bh.values).toStrictEqual([1, 2, 4, 3, 5]);
  })
})

describe("Remove Min from MinBinaryHeap", () => {
  test("when is empty", () => {
    // Arrange
    const bh = new MinBinaryHeap();

    // Act
    const result = bh.removeMin();

    // Assert
    expect(result).toStrictEqual(null);
    expect(bh.values).toStrictEqual([]);
  })

  test("when has one element", () => {
    // Arrange
    const bh = new MinBinaryHeap();
    bh.insert(1);

    // Act
    const result = bh.removeMin();

    // Assert
    expect(result).toStrictEqual(1);
    expect(bh.values).toStrictEqual([]);
  })

  test("when has two elements", () => {
    // Arrange
    const bh = new MinBinaryHeap();
    bh.insert(55);
    bh.insert(99);

    // Act
    const result = bh.removeMin();

    // Assert
    expect(result).toStrictEqual(55);
    expect(bh.values).toStrictEqual([99]);
  })

  test("when has 5 elements", () => {
    // Arrange
    const bh = new MinBinaryHeap();
    bh.insert(1);
    bh.insert(2);
    bh.insert(4);
    bh.insert(3);
    bh.insert(5);

    // Act
    const result = bh.removeMin();

    // Assert
    expect(result).toStrictEqual(1);
    expect(bh.values).toStrictEqual([2, 3, 4, 5]);
  })
})