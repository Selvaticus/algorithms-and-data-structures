class BaseGraph {
    constructor() {
        this.adjacencyList = {};
    }

    get vertices() {
        const keys = [];
        for (const key in this.adjacencyList) {
            if (this.adjacencyList.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }

    get edges() {
        const edges = {};
        for (const key in this.adjacencyList) {
            if (this.adjacencyList.hasOwnProperty(key)) {
                edges[key] = this.adjacencyList[key].connections.map(this._map_egdes);
            }
        }
        return edges;
    }

    addVertex(key, args = {}) {
        this.adjacencyList[key] = { ...args, connections: [] };
    }

    addEdge(vertex_one, vertex_two, args = {}) {
        const v_one_conn = this.adjacencyList[vertex_one];
        const v_two_conn = this.adjacencyList[vertex_two];

        if (!v_one_conn || !v_two_conn) {
            return false;
        }

        v_one_conn.connections.push({ ...args, key: vertex_two });
        v_two_conn.connections.push({ ...args, key: vertex_one });

        return true;
    }

    removeEdge(vertex_one, vertex_two) {
        const v_one_conn = this.adjacencyList[vertex_one];
        const v_two_conn = this.adjacencyList[vertex_two];

        if (!v_one_conn || !v_two_conn) {
            return false;
        }

        this.adjacencyList[vertex_one].connections = v_one_conn.connections.filter(value => value.key !== vertex_two);
        this.adjacencyList[vertex_two].connections = v_two_conn.connections.filter(value => value.key !== vertex_one);
        return true;
    }

    removeVertex(vertex) {
        let vertex_conn = this.adjacencyList[vertex];
        if (!vertex_conn) {
            return false;
        }

        let first_conn;

        while (first_conn = vertex_conn.connections.shift()) {
            this.removeEdge(vertex, first_conn.key)
        }

        delete (this.adjacencyList[vertex])

        return true;
    }

    traversal(start_vertex, type = "dfs") {
        if (!this.adjacencyList[start_vertex]) {
            return [];
        }

        if (type === "dfs") {
            return this._traversal_dfs(start_vertex, {}, []);
        } else if (type === "bfs") {
            return this._traversal_bfs({}, [start_vertex], []);
        }
        throw new Exception("Type of traversal not recognised");
    }

    _traversal_dfs(start_vertex, visited, acc) {
        // If the vertex was already visited do nothing
        if (visited[start_vertex]) {
            return acc;
        }

        // Mark vertex has visited and add it to the final list
        visited[start_vertex] = true;
        acc.push(start_vertex);

        const vertex_conn = this.adjacencyList[start_vertex].connections;

        let first_conn = null;

        // Do the same for all the connections
        while (first_conn = vertex_conn.shift()) {
            acc = this._traversal_dfs(first_conn.key, visited, acc);
        }

        return acc;
    }

    _traversal_bfs(visited, queue, acc) {
        const vertex = queue.shift();
        // if there is nothing else on the queue we have reached the end
        if (!vertex) {
            return acc;
        }
        // if we already visited just go to the next one
        if (visited[vertex]) {
            return this._traversal_bfs(visited, queue, acc)
        }

        visited[vertex] = true;
        acc.push(vertex);

        const vertex_conn = this.adjacencyList[vertex].connections.map(val => val.key);
        // Add all connections to the queue
        queue.push(...vertex_conn);
        // do the same for the next vertex in the queue
        return this._traversal_bfs(visited, queue, acc);
    }

    _map_egdes(edge) {
        throw new Exception("You need to implement '_map_egdes' on you class");
    }

}

module.exports = BaseGraph;