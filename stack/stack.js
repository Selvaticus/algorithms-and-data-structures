const SinglyLinkedList = require('../SinglyLinkedList/singly_linked_list');

class Stack {
    constructor() {
        this.values = new SinglyLinkedList();
    }
    length() {
        return this.values.length;
    }
    push(value) {
        this.values.unshift(value);
    }
    pop() {
        const val = this.values.shift();
        return val;
    }
}

module.exports = Stack;