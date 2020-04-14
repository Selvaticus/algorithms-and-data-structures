const BaseGraph = require('./base_graph');

class WeightedGraph extends BaseGraph {
    constructor() {
        super();
    }

    addEdge(vertex_one, vertex_two, weight) {
        return super.addEdge(vertex_one, vertex_two, { weight: weight });
    }

    // Need to specify on how to present edges from the connection object
    _map_egdes(connection) {
        return connection;
    }
}

module.exports = WeightedGraph;