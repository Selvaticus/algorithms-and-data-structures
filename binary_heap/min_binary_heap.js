const BaseBinaryHeap = require('./base_binary_heap');

class MinBinaryHeap extends BaseBinaryHeap {
    constructor() {
        super();
    }

    order(priority_one, priority_two) {
        if (priority_one > priority_two) return 1;
        if (priority_one === priority_two) return 0;
        return -1;
    }

    insert(value, priority = value) {
        super.insert(value, priority);
    }

    removeMin() {
        const first = super.shift();
        return first ? first.val : null;
    }
}

module.exports = MinBinaryHeap;