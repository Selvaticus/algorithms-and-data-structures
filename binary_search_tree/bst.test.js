const BinarySearchTree = require("./bst")

describe("Insert into a BST", () => {
  test("when he tree is empty", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    bst.insert(1);

    // Assert
    expect(bst.length).toStrictEqual(1);
  })

  test("when the tree has one item", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    bst.insert(2);
    bst.insert(1);

    // Assert
    expect(bst.length).toStrictEqual(2);
  })

  test("when the tree has three item", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    // Assert
    expect(bst.length).toStrictEqual(3);
  })

  test("when the tree has three item all bigger", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    bst.insert(3);
    bst.insert(4);
    bst.insert(5);
    bst.insert(1);

    // Assert
    expect(bst.length).toStrictEqual(4);
  })

  test("when the input is gonna be a parent", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(4);

    // Assert
    expect(bst.length).toStrictEqual(4);
  })
})

describe("Enumerate a BST", () => {
  test("in ascending order", () => {
    // Arrange
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);

    // Act
    const result = Array.from(bst.enumerate());

    // Assert
    expect(result).toStrictEqual([3, 4, 5, 6]);
  })
})

describe("Finding elements on bst", () => {
  test("when bst is empty", () => {
    // Arragen
    const bst = new BinarySearchTree();

    // Act
    const result = bst.find(1);

    // Assert
    expect(result).toStrictEqual(false);
  })

  test("when element doesn't exist", () => {
    // Arragen
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);

    // Act
    const result = bst.find(7);

    // Assert
    expect(result).toStrictEqual(false);
  })

  test("when element does exist", () => {
    // Arrage
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);

    // Act
    const result = bst.find(5);

    // Assert
    expect(result).toStrictEqual(true);
  })
})

describe("Perform a BFS search on a BST", () => {
  test("when the BST is empty", () => {
    // Arragen
    const bst = new BinarySearchTree();

    // Act
    const result = bst.bfs();

    // Assert
    expect(result).toStrictEqual([]);
  })

  test("when the BST is not empty", () => {
    // Arrage
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(7);

    // Act
    const result = bst.bfs();

    // Assert
    expect(result).toStrictEqual([4, 3, 5, 1, 6, 2, 7]);
  })
})

describe("Perform DFS pre order search on a BST", () => {
  test("when the BST is empty", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    const result = bst.dfs("pre");

    // Assert
    expect(result).toStrictEqual([]);
  })

  test("when the BST is not empty", () => {
    // Arrange
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(7);

    // Act
    const result = bst.dfs("pre");

    // Assert
    expect(result).toStrictEqual([4, 3, 1, 2, 5, 6, 7]);
  })
})

describe("Perform DFS in order search on a BST", () => {
  test("when the BST is empty", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    const result = bst.dfs("in");

    // Assert
    expect(result).toStrictEqual([]);
  })

  test("when the BST is not empty", () => {
    // Arrange
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(7);

    // Act
    const result = bst.dfs("in");

    // Assert
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  })
})

describe("Perform DFS post order search on a BST", () => {
  test("when the BST is empty", () => {
    // Arrange
    const bst = new BinarySearchTree();

    // Act
    const result = bst.dfs("post");

    // Assert
    expect(result).toStrictEqual([]);
  })

  test("when the BST is not empty", () => {
    // Arrange
    const bst = new BinarySearchTree();
    bst.insert(4);
    bst.insert(3);
    bst.insert(5);
    bst.insert(6);
    bst.insert(1);
    bst.insert(2);
    bst.insert(7);

    // Act
    const result = bst.dfs("post");

    // Assert
    expect(result).toStrictEqual([2, 1, 3, 7, 6, 5, 4]);
  })
})