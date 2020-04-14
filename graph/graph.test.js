const Graph = require('./graph')

describe("Add vertices into Graph", () => {

    test("one vertex into empty Graph", () => {
        // Arrange
        const graph = new Graph();

        // Act
        graph.addVertex("foo");

        // Assert
        expect(graph.edges).toStrictEqual({ "foo": [] });
    })

    test("two vertices into empty Graph", () => {
        // Arrange
        const graph = new Graph();

        // Act
        graph.addVertex("foo");
        graph.addVertex("bar");

        // Assert
        expect(graph.edges).toStrictEqual({ "foo": [], "bar": [] });
    })
})

describe("Add edges to Graph", () => {
    test("when the vertices do not exist", () => {
        // Arrange
        const graph = new Graph();

        // Act
        const result = graph.addEdge("foo", "bar");

        // Assert
        expect(result).toStrictEqual(false);
        expect(graph.edges).toStrictEqual({});
    })

    test("when only one vertice exists", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("foo");

        // Act
        const result = graph.addEdge("foo", "bar");

        // Assert
        expect(result).toStrictEqual(false);
        expect(graph.edges).toStrictEqual({ "foo": [] });
    })

    test("when both vertices exist", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");

        // Act
        const result = graph.addEdge("foo", "bar");

        // Assert
        expect(result).toStrictEqual(true);
        expect(graph.edges).toStrictEqual({ "foo": ["bar"], "bar": ["foo"] });
    })

    test("when both vertices exist and already have connections", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");
        graph.addVertex("stuff");
        graph.addVertex("things");

        // Act
        graph.addEdge("foo", "bar");
        graph.addEdge("foo", "stuff");
        const result = graph.addEdge("foo", "things");

        // Assert
        expect(result).toStrictEqual(true);
        expect(graph.edges).toStrictEqual({ "foo": ["bar", "stuff", "things"], "bar": ["foo"], "stuff": ["foo"], "things": ["foo"] });
    })
})

describe("Remove edges from the Graph", () => {
    test("when the edges do not exist", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");

        // Act
        const result = graph.removeEdge("foo", "things");

        // Assert
        expect(result).toStrictEqual(false);
        expect(graph.edges).toStrictEqual({ "foo": [], "bar": [] });
    })

    test("when the edges exist", () => {
        /// Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");
        graph.addVertex("stuff");

        // Act
        graph.addEdge("foo", "bar");
        graph.addEdge("foo", "stuff");
        const result = graph.removeEdge("foo", "bar");

        // Assert
        expect(result).toStrictEqual(true);
        expect(graph.edges).toStrictEqual({ "foo": ["stuff"], "bar": [], "stuff": ["foo"] });
    })
})

describe("Remove vertices from the Graph", () => {
    test("when the vertex do not exist", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");

        // Act
        const result = graph.removeVertex("things");

        // Assert
        expect(result).toStrictEqual(false);
        expect(graph.edges).toStrictEqual({ "foo": [], "bar": [] });
    })

    test("when the vertex exist", () => {
        /// Arrange
        const graph = new Graph();
        graph.addVertex("foo");
        graph.addVertex("bar");
        graph.addVertex("stuff");

        // Act
        graph.addEdge("foo", "bar");
        graph.addEdge("foo", "stuff");
        const result = graph.removeVertex("foo");

        // Assert
        expect(result).toStrictEqual(true);
        expect(graph.edges).toStrictEqual({ "bar": [], "stuff": [] });
    })
})

describe("Traverse a graph DFS", () => {
    test("when is empty", () => {
        // Arrange
        const graph = new Graph();

        // Act
        const result = graph.traversal("A");

        // Assert
        expect(result).toStrictEqual([]);
    })

    test("when is not empty and starting point doesn't exist", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");

        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "C");

        // Act
        const result = graph.traversal("E");

        // Assert
        expect(result).toStrictEqual([]);
    })

    test("when is not empty and has multiple paths", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");

        // Act
        const result = graph.traversal("A");

        // Assert
        expect(result).toStrictEqual(["A", "B", "D", "E", "C", "F"]);
    })

    test("when is not empty and has only one path", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");
        graph.addEdge("D", "E");
        graph.addEdge("E", "F");

        // Act
        const result = graph.traversal("A");

        // Assert
        expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
    })
})

describe("Traverse a graph BFS", () => {
    test("when is empty", () => {
        // Arrange
        const graph = new Graph();

        // Act
        const result = graph.traversal("A", type = "bfs");

        // Assert
        expect(result).toStrictEqual([]);
    })

    test("when is not empty and starting point doesn't exist", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");

        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "C");

        // Act
        const result = graph.traversal("E", type = "bfs");

        // Assert
        expect(result).toStrictEqual([]);
    })

    test("when is not empty and has multiple paths", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        graph.addEdge("B", "D");
        graph.addEdge("C", "E");
        graph.addEdge("D", "E");
        graph.addEdge("D", "F");
        graph.addEdge("E", "F");

        // Act
        const result = graph.traversal("A", type = "bfs");

        // Assert
        expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
    })

    test("when is not empty and has only one path", () => {
        // Arrange
        const graph = new Graph();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B");
        graph.addEdge("B", "C");
        graph.addEdge("C", "D");
        graph.addEdge("D", "E");
        graph.addEdge("E", "F");

        // Act
        const result = graph.traversal("A", type = "bfs");

        // Assert
        expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
    })
})