const DoublyLinkedList = require('./doubly_linked_list')

describe("Push into Doubly Linked Lists", () => {

  test("push one element into empty list", () => {
    // Arrange
    const list = new DoublyLinkedList();

    // Act
    list.push("stuff");

    // Assert
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("stuff");
  })

  test("push two elements into empty list", () => {
    // Arrange
    const list = new DoublyLinkedList();

    // Act
    list.push("stuff");
    list.push("things");

    // Assert
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("things");
    expect(list.tail.prev.value).toStrictEqual("stuff");
  })
})

describe("Pop from a Doubly Linked List", () => {
  test("which is empty list", () => {
    // Arrange
    const list = new DoublyLinkedList();

    // Act
    const result = list.pop();

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");

    // Act
    const result = list.pop();

    // Assert
    expect(result).toStrictEqual("stuff");
    expect(list.head).toStrictEqual(null);
    expect(list.tail).toStrictEqual(null);
  })

  test("which has two items", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.pop();

    // Assert
    expect(result).toStrictEqual("things");
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("stuff");
  })

  test("which has three items", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.pop();

    // Assert
    expect(result).toStrictEqual("bananas");
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("things");
  })
})

describe("Shift a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();

    // Act
    const result = list.shift();

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");

    // Act
    const result = list.shift();

    // Assert
    expect(result).toStrictEqual("stuff");
    expect(list.head).toStrictEqual(null);
    expect(list.tail).toStrictEqual(null);
  })

  test("which has two items", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.shift();

    // Assert
    expect(result).toStrictEqual("stuff");
    expect(list.head.value).toStrictEqual("things");
    expect(list.tail.value).toStrictEqual("things");
  })

  test("which has three items", () => {
    // Arrange
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.shift();

    // Assert
    expect(result).toStrictEqual("stuff");
    expect(list.head.value).toStrictEqual("things");
    expect(list.tail.value).toStrictEqual("bananas");
  })
})

describe("Unshift a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const value = "foo"

    // Act
    list.unshift(value);

    // Assert
    expect(list.head.value).toEqual("foo");
    expect(list.tail.value).toEqual("foo");
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const value = "foo";
    list.push("stuff");

    // Act
    list.unshift(value);

    // Assert
    expect(list.head.value).toStrictEqual("foo");
    expect(list.tail.value).toStrictEqual("stuff");
  })

  test("which has two items", () => {
    // Arrange
    const value = "foo"
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    list.unshift(value);

    // Assert
    expect(list.head.value).toStrictEqual("foo");
    expect(list.tail.value).toStrictEqual("things");
  })

  test("which has three items", () => {
    // Arrange
    const value = "foo"
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    list.unshift(value);

    // Assert
    expect(list.head.value).toStrictEqual("foo");
    expect(list.tail.value).toStrictEqual("bananas");
  })
})

describe("Get element from a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 1;

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 0;
    list.push("stuff");

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual("stuff");
  })

  test("which has two items", () => {
    // Arrange
    const index = 1;
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual("things");
  })

  test("which has three items", () => {
    // Arrange
    const index = 1;
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual("things");
  })

  test("which has four items", () => {
    // Arrange
    const index = 2;
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");
    list.push("apples");

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual("bananas");
  })
})

describe("Set value of element at index from a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 1;
    const value = "foo";

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 0;
    const value = "foo";
    list.push("stuff");

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(true);
  })

  test("which has two items", () => {
    // Arrange
    const index = 1;
    const value = "foo";
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(true);
  })

  test("which has three items", () => {
    // Arrange
    const index = 1;
    const value = "foo";
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(true);
  })
})

describe("Insert values into a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 1;
    const value = "foo";

    // Act
    const result = list.insert(value, index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 0;
    const value = "foo";
    list.push("stuff");

    // Act
    const result = list.insert(value, index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual(value);
  })

  test("which has two items", () => {
    // Arrange
    const index = 1;
    const value = "foo";
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.insert(value, index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual(value);
  })

  test("which has three items", () => {
    // Arrange
    const index = 1;
    const value = "foo";
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.insert(value, index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual(value);
  })
})

describe("Remove values into a Doubly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 1;

    // Act
    const result = list.remove(index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new DoublyLinkedList();
    const index = 0;
    list.push("stuff");

    // Act
    const result = list.remove(index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual(null);
  })

  test("which has two items", () => {
    // Arrange
    const index = 1;
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    const result = list.remove(index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual(null);
  })

  test("which has three items", () => {
    // Arrange
    const index = 1;
    const list = new DoublyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.remove(index);
    const result_value = list.get(index);

    // Assert
    expect(result).toEqual(true);
    expect(result_value).toStrictEqual("bananas");
  })
})
