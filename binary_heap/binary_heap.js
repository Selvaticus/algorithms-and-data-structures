const BaseBinaryHeap = require('./base_binary_heap')

class BinaryHeap extends BaseBinaryHeap {
    constructor() {
        super()
    }

    order(priority_one, priority_two) {
        if (priority_one > priority_two) return -1;
        if (priority_one === priority_two) return 0;
        return 1;
    }

    insert(value, priority = value) {
        super.insert(value, priority);
    }

    removeMax() {
        const first = super.shift();
        return first ? first.val : null;
    }
}

module.exports = BinaryHeap;