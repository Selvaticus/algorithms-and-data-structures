const Stack = require('./stack')

describe("Push into a Stack", () => {

  test("push one element into empty stack", () => {
    // Arrange
    const stack = new Stack();

    // Act
    stack.push("stuff");

    // Assert
    expect(stack.length()).toStrictEqual(1);
  })

  test("push two elements into empty stack", () => {
    // Arrange
    const stack = new Stack();

    // Act
    stack.push("stuff");
    stack.push("things");

    // Assert
    expect(stack.length()).toStrictEqual(2);
  })
})

describe("Pop from a Stack", () => {
  test("when the stack is empty", () => {
    // Arrange
    const stack = new Stack();

    // Act
    const result = stack.pop();

    // Assert
    expect(result).toStrictEqual(null);
    expect(stack.length()).toStrictEqual(0);
  })

  test("when the stack has one item", () => {
    // Arrange
    const stack = new Stack();
    stack.push("foo");

    // Act
    const result = stack.pop();

    // Assert
    expect(result).toStrictEqual("foo");
    expect(stack.length()).toStrictEqual(0);
  })

  test("when the stack has multiple items", () => {
    // Arrange
    const stack = new Stack();
    stack.push("foo");
    stack.push("bar");

    // Act
    const result = stack.pop();

    // Assert
    expect(result).toStrictEqual("bar");
    expect(stack.length()).toStrictEqual(1);
  })
})
