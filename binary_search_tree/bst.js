const Queue = require('../queue/queue');

class TreeNode {
    constructor(val) {
        this.right = null;
        this.left = null;
        this.value = val;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert(value) {
        if (this.root === null) {
            const new_node = new TreeNode(value);
            this.root = new_node;
            this.length++;
            return;
        }

        this._insert(this.root, value);
    }

    find(value) {
        return this._find(this.root, value);
    }


    *enumerate() {
        yield* this._dfs_in_order(this.root)
    }

    bfs() {
        let current_node;
        let result = [];
        let queue = new Queue();

        queue.enqueue(this.root);

        while (current_node = queue.dequeue()) {
            result.push(current_node.value);
            if (current_node.left) queue.enqueue(current_node.left);
            if (current_node.right) queue.enqueue(current_node.right);
        }

        return result;
    }

    dfs(order = "pre") {
        if (order === "pre") {
            return Array.from(this._dfs_pre_order(this.root));
        } else if (order === "post") {
            return Array.from(this._dfs_post_order(this.root));
        } else if (order === "in") {
            return Array.from(this._dfs_in_order(this.root));
        }
        throw new Exception("Arguments are wrong");
    }

    *_dfs_pre_order(node) {
        if (node !== null) {
            yield node.value;
            yield* this._dfs_pre_order(node.left);
            yield* this._dfs_pre_order(node.right);
        }
    }

    *_dfs_post_order(node) {
        if (node !== null) {
            yield* this._dfs_post_order(node.left);
            yield* this._dfs_post_order(node.right);
            yield node.value
        }
    }

    *_dfs_in_order(node) {
        if (node !== null) {
            yield* this._dfs_in_order(node.left);
            yield node.value;
            yield* this._dfs_in_order(node.right);
        }
    }

    _find(current_node, value) {
        if (current_node === null) {
            return false;
        }

        if (current_node.value === value) {
            return true;
        } else if (current_node.value > value) {
            return this._find(current_node.left, value);
        } else {
            return this._find(current_node.right, value);
        }
    }

    _insert(node, value) {
        if (value < node.value) {
            if (!node.left) {
                const new_node = new TreeNode(value);
                node.left = new_node;
                this.length++;
            } else {
                this._insert(node.left, value);
            }
        } else {
            if (!node.right) {
                const new_node = new TreeNode(value);
                node.right = new_node;
                this.length++;
            } else {
                this._insert(node.right, value);
            }
        }
    }
}


module.exports = BinarySearchTree;