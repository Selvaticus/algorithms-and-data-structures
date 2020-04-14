const Queue = require('./queue')

describe("enqueue into a Queue", () => {

  test("enqueue one element into empty Queue", () => {
    // Arrange
    const queue = new Queue();

    // Act
    queue.enqueue("stuff");

    // Assert
    expect(queue.length()).toStrictEqual(1);
  })

  test("enqueue two elements into empty Queue", () => {
    // Arrange
    const queue = new Queue();

    // Act
    queue.enqueue("stuff");
    queue.enqueue("things");

    // Assert
    expect(queue.length()).toStrictEqual(2);
  })
})

describe("dequeue from a Queue", () => {
  test("when the Queue is empty", () => {
    // Arrange
    const queue = new Queue();

    // Act
    const result = queue.dequeue();

    // Assert
    expect(result).toStrictEqual(null);
    expect(queue.length()).toStrictEqual(0);
  })

  test("when the Queue has one item", () => {
    // Arrange
    const queue = new Queue();
    queue.enqueue("foo");

    // Act
    const result = queue.dequeue();

    // Assert
    expect(result).toStrictEqual("foo");
    expect(queue.length()).toStrictEqual(0);
  })

  test("when the Queue has multiple items", () => {
    // Arrange
    const queue = new Queue();
    queue.enqueue("foo");
    queue.enqueue("bar");

    // Act
    const result = queue.dequeue();

    // Assert
    expect(result).toStrictEqual("foo");
    expect(queue.length()).toStrictEqual(1);
  })
})
