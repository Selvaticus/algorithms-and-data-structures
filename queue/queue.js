const SinglyLinkedList = require('../singly_linked_list/singly_linked_list');

class Queue {
    constructor() {
        this.values = new SinglyLinkedList();
    }
    length() {
        return this.values.length;
    }
    enqueue(value) {
        this.values.push(value);
    }
    dequeue() {
        return this.values.shift();
    }
}

module.exports = Queue;