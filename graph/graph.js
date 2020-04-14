const BaseGraph = require('./base_graph');

class Graph extends BaseGraph {
    constructor() {
        super();
    }

    // Need to specify on to present edges from the connection object
    _map_egdes({ key, ...arg }) {
        return key;
    }
}

module.exports = Graph;