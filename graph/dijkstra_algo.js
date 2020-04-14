const WeightedGraph = require('./weighted_graph');
const MinBinaryHeap = require('../binary_heap/min_binary_heap');

class DijkstraAlgo extends WeightedGraph {
    constructor() {
        super();
    }

    path(start, finish) {
        const { _, paths: paths } = this._dijkstra(start);
        return this._path(finish, paths, []);
    }

    _path(vertex, paths, acc) {
        if (vertex === null) {
            return acc;
        }

        const prev_vertex = paths[vertex];
        acc = this._path(prev_vertex, paths, acc);
        acc.push(vertex);
        return acc;
    }

    _dijkstra(start) {
        // Initialise an object with the distance of getting to each vertex
        const distances = this.vertices.reduce((acc, elem) => {
            acc[elem] = Infinity;
            return acc;
        }, {});
        // Initialise an object with the path to get to each vertex
        const paths = this.vertices.reduce((acc, elem) => {
            acc[elem] = null;
            return acc;
        }, {});
        const pq = new MinBinaryHeap();

        // insert the start vertex into the Priority Queue with 0 path cost
        pq.insert([start, 0], 0);
        // Update the distance to get to the first vertex which is obviously 0
        distances[start] = 0;

        let element;
        while (element = pq.removeMin()) {
            const [current_vertex, distance] = element;

            if (distances[current_vertex] >= distance) {
                const conn = this.adjacencyList[current_vertex].connections;
                conn.forEach(({ key: vertex, weight: weight }) => {
                    if (distances[current_vertex] + weight < distances[vertex]) {
                        const distance_to_vertex = distances[current_vertex] + weight;
                        distances[vertex] = distance_to_vertex;
                        paths[vertex] = current_vertex;
                        pq.insert([vertex, distance_to_vertex], distance_to_vertex);
                    }
                });
            }
        }

        return { distances: distances, paths: paths }
    }
}

module.exports = DijkstraAlgo;