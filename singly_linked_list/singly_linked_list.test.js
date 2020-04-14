const SinglyLinkedList = require('./singly_linked_list')

describe("Push into Singly Linked Lists", () => {

  test("push one element into empty list", () => {
    // Arrange
    const list = new SinglyLinkedList();

    // Act
    list.push("stuff");

    // Assert
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("stuff");
  })

  test("push two elements into empty list", () => {
    // Arrange
    const list = new SinglyLinkedList();

    // Act
    list.push("stuff");
    list.push("things");

    // Assert
    expect(list.head.value).toStrictEqual("stuff");
    expect(list.tail.value).toStrictEqual("things");
  })
})

describe("Pop from a Singly Linked List", () => {
  test("which is empty list", () => {
    // Arrange
    const list = new SinglyLinkedList();

    // Act
    const result = list.pop();

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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

describe("Shift a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();

    // Act
    const result = list.shift();

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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

describe("unshift a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();
    const value = "foo"

    // Act
    list.unshift(value);

    // Assert
    expect(list.head.value).toEqual("foo");
    expect(list.tail.value).toEqual("foo");
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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

describe("Get element from a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();
    const index = 1;

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.get(index);

    // Assert
    expect(result).toEqual("things");
  })
})

describe("Set value of element at index from a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();
    const index = 1;
    const value = "foo";

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    const result = list.set(value, index);

    // Assert
    expect(result).toEqual(true);
  })
})

describe("Insert values into a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();
    const index = 1;
    const value = "foo";

    // Act
    const result = list.insert(value, index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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

describe("Remove values into a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();
    const index = 1;

    // Act
    const result = list.remove(index);

    // Assert
    expect(result).toEqual(false);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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
    const list = new SinglyLinkedList();
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

describe("Reverse a Singly Linked List", () => {
  test("which is empty", () => {
    // Arrange
    const list = new SinglyLinkedList();

    // Act
    list.reverse();

    // Assert
    expect(list.head).toStrictEqual(null);
    expect(list.tail).toStrictEqual(null);
  })

  test("which has one item", () => {
    // Arrange
    const list = new SinglyLinkedList();
    list.push("stuff");

    // Act
    list.reverse();

    // Assert
    expect(list.head.value).toEqual("stuff");
    expect(list.tail.value).toEqual("stuff");
  })

  test("which has two items", () => {
    // Arrange
    const list = new SinglyLinkedList();
    list.push("stuff");
    list.push("things");

    // Act
    list.reverse();

    // Assert
    expect(list.head.value).toStrictEqual("things");
    expect(list.tail.value).toStrictEqual("stuff");
  })

  test("which has three items", () => {
    // Arrange
    const list = new SinglyLinkedList();
    list.push("stuff");
    list.push("things");
    list.push("bananas");

    // Act
    list.reverse();

    // Assert
    expect(list.head.value).toStrictEqual("bananas");
    expect(list.get(1)).toEqual("things");
    expect(list.tail.value).toStrictEqual("stuff");
  })
})