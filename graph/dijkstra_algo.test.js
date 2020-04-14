// const WeightedGraph = require('./weighted_graph');
const DijkstraAlgo = require('./dijkstra_algo');

describe.only("Find shortest path in a WeightedGraph", () => {

    // test("one vertex into empty WeightedGraph", () => {
    //   // Arrange
    //   const graph = new WeightedGraph();

    //   // Act
    //   graph.addVertex("foo");

    //   // Assert
    //   expect(graph.vertices).toStrictEqual(["foo"]);
    // })

    test("two vertices into empty WeightedGraph", () => {
        // Arrange
        const graph = new DijkstraAlgo();
        graph.addVertex("A");
        graph.addVertex("B");
        graph.addVertex("C");
        graph.addVertex("D");
        graph.addVertex("E");
        graph.addVertex("F");

        graph.addEdge("A", "B", 4);
        graph.addEdge("A", "C", 2);
        graph.addEdge("B", "E", 3);
        graph.addEdge("C", "D", 2);
        graph.addEdge("C", "F", 4);
        graph.addEdge("D", "E", 3);
        graph.addEdge("D", "F", 1);
        graph.addEdge("E", "F", 1);

        // Act
        result = graph.path("A", "E")

        // Assert
        expect(result).toStrictEqual(["A", "C", "D", "F", "E"]);
    })
})

// describe("Add edges to WeightedGraph", () => {
//   test("when the vertices do not exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();

//     // Act
//     const result = graph.addEdge("foo", "bar", 1);

//     // Assert
//     expect(result).toStrictEqual(false);
//     expect(graph.edges).toStrictEqual({});
//   })

//   test("when only one vertice exists", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");

//     // Act
//     const result = graph.addEdge("foo", "bar", 1);

//     // Assert
//     expect(result).toStrictEqual(false);
//     expect(graph.edges).toStrictEqual({ "foo": [] });
//   })

//   test("when both vertices exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");

//     // Act
//     const result = graph.addEdge("foo", "bar", 1);

//     // Assert
//     expect(result).toStrictEqual(true);
//     expect(graph.edges).toStrictEqual({ "foo": [{ key: "bar", weight: 1 }], "bar": [{ key: "foo", weight: 1 }] });
//   })

//   test("when both vertices exist and already have connections", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");
//     graph.addVertex("stuff");
//     graph.addVertex("things");

//     // Act
//     graph.addEdge("foo", "bar", 1);
//     graph.addEdge("foo", "stuff", 1);
//     const result = graph.addEdge("foo", "things", 2);

//     // Assert
//     expect(result).toStrictEqual(true);
//     expect(graph.edges).toStrictEqual({ "foo": [{ key: "bar", weight: 1 }, { key: "stuff", weight: 1 }, { key: "things", weight: 2 }], "bar": [{ key: "foo", weight: 1 }], "stuff": [{ key: "foo", weight: 1 }], "things": [{ key: "foo", weight: 2 }] });
//   })
// })

// describe("Remove edges from the WeightedGraph", () => {
//   test("when the edges do not exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");

//     // Act
//     const result = graph.removeEdge("foo", "things");

//     // Assert
//     expect(result).toStrictEqual(false);
//     expect(graph.edges).toStrictEqual({ "foo": [], "bar": [] });
//   })

//   test("when the edges exist", () => {
//     /// Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");
//     graph.addVertex("stuff");

//     // Act
//     graph.addEdge("foo", "bar", 1);
//     graph.addEdge("foo", "stuff", 1);
//     const result = graph.removeEdge("foo", "bar");

//     // Assert
//     expect(result).toStrictEqual(true);
//     expect(graph.edges).toStrictEqual({ "foo": [{ key: "stuff", weight: 1 }], "bar": [], "stuff": [{ key: "foo", weight: 1 }] });
//   })
// })

// describe("Remove vertices from the WeightedGraph", () => {
//   test("when the vertex do not exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");

//     // Act
//     const result = graph.removeVertex("things");

//     // Assert
//     expect(result).toStrictEqual(false);
//     expect(graph.edges).toStrictEqual({ "foo": [], "bar": [] });
//   })

//   test("when the vertex exist", () => {
//     /// Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("foo");
//     graph.addVertex("bar");
//     graph.addVertex("stuff");

//     // Act
//     graph.addEdge("foo", "bar", 1);
//     graph.addEdge("foo", "stuff", 1);
//     const result = graph.removeVertex("foo");

//     // Assert
//     expect(result).toStrictEqual(true);
//     expect(graph.edges).toStrictEqual({ "bar": [], "stuff": [] });
//   })
// })

// describe("Traverse a graph DFS", () => {
//   test("when is empty", () => {
//     // Arrange
//     const graph = new WeightedGraph();

//     // Act
//     const result = graph.traversal("A");

//     // Assert
//     expect(result).toStrictEqual([]);
//   })

//   test("when is not empty and starting point doesn't exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");

//     graph.addEdge("A", "B", 1);
//     graph.addEdge("A", "C", 1);
//     graph.addEdge("B", "C", 1);

//     // Act
//     const result = graph.traversal("E");

//     // Assert
//     expect(result).toStrictEqual([]);
//   })

//   test("when is not empty and has multiple paths", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");
//     graph.addVertex("D");
//     graph.addVertex("E");
//     graph.addVertex("F");

//     graph.addEdge("A", "B", 1);
//     graph.addEdge("A", "C", 1);
//     graph.addEdge("B", "D", 1);
//     graph.addEdge("C", "E", 1);
//     graph.addEdge("D", "E", 1);
//     graph.addEdge("D", "F", 1);
//     graph.addEdge("E", "F", 1);

//     // Act
//     const result = graph.traversal("A");

//     // Assert
//     expect(result).toStrictEqual(["A", "B", "D", "E", "C", "F"]);
//   })

//   test("when is not empty and has only one path", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");
//     graph.addVertex("D");
//     graph.addVertex("E");
//     graph.addVertex("F");

//     graph.addEdge("A", "B", 1);
//     graph.addEdge("B", "C", 1);
//     graph.addEdge("C", "D", 1);
//     graph.addEdge("D", "E", 1);
//     graph.addEdge("E", "F", 1);

//     // Act
//     const result = graph.traversal("A");

//     // Assert
//     expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
//   })
// })

// describe("Traverse a graph BFS", () => {
//   test("when is empty", () => {
//     // Arrange
//     const graph = new WeightedGraph();

//     // Act
//     const result = graph.traversal("A", type = "bfs");

//     // Assert
//     expect(result).toStrictEqual([]);
//   })

//   test("when is not empty and starting point doesn't exist", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");

//     graph.addEdge("A", "B");
//     graph.addEdge("A", "C");
//     graph.addEdge("B", "C");

//     // Act
//     const result = graph.traversal("E", type = "bfs");

//     // Assert
//     expect(result).toStrictEqual([]);
//   })

//   test("when is not empty and has multiple paths", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");
//     graph.addVertex("D");
//     graph.addVertex("E");
//     graph.addVertex("F");

//     graph.addEdge("A", "B");
//     graph.addEdge("A", "C");
//     graph.addEdge("B", "D");
//     graph.addEdge("C", "E");
//     graph.addEdge("D", "E");
//     graph.addEdge("D", "F");
//     graph.addEdge("E", "F");

//     // Act
//     const result = graph.traversal("A", type = "bfs");

//     // Assert
//     expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
//   })

//   test("when is not empty and has only one path", () => {
//     // Arrange
//     const graph = new WeightedGraph();
//     graph.addVertex("A");
//     graph.addVertex("B");
//     graph.addVertex("C");
//     graph.addVertex("D");
//     graph.addVertex("E");
//     graph.addVertex("F");

//     graph.addEdge("A", "B");
//     graph.addEdge("B", "C");
//     graph.addEdge("C", "D");
//     graph.addEdge("D", "E");
//     graph.addEdge("E", "F");

//     // Act
//     const result = graph.traversal("A", type = "bfs");

//     // Assert
//     expect(result).toStrictEqual(["A", "B", "C", "D", "E", "F"]);
//   })
// })