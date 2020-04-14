const Node = require('./node')

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _get_at_index(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current_node = this.head;

    while (index > 0) {
      current_node = current_node.next;
      index--;
    }

    return current_node;
  }

  push(value) {
    const new_node = new Node(value);
    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }

    this.length += 1;
    return this;
  }

  pop() {
    let current_node = this.head;
    let prev_node = current_node;

    // look 2 ahead as we need the last node and the prev from last
    while (current_node && current_node.next) {
      prev_node = current_node;
      current_node = current_node.next;
    }

    if (prev_node === current_node) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prev_node;
    }
    this.length--;

    return (current_node ? current_node.value : null);
  }

  shift() {
    const current_node = this.head;

    if (!current_node) return null;

    if (current_node.next) {
      this.head = current_node.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return current_node.value;
  }

  unshift(value) {
    const new_node = new Node(value);

    if (this.length === 0) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node
    }

    this.length++;
  }

  get(index) {
    const node = this._get_at_index(index);

    return node ? node.value : null;
  }

  set(value, index) {
    const node = this._get_at_index(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const prev_node = this._get_at_index(index - 1);

    if (prev_node && prev_node.next) {
      const new_node = new Node(value);
      new_node.next = prev_node.next;
      prev_node.next = new_node;
      return true;
    }

    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      return this.pop() ? true : false;
    }

    const node = this._get_at_index(index - 1);

    node.next = node.next.next;
    this.length--;
    return true;
  }

  reverse() {
    const new_head = this.tail;
    const new_tail = this.head;

    if (this.head && this.head.next) {
      this._reverse_helper(this.head, this.head.next);
      this.head.next = null;
    }
    this.head = new_head;
    this.tail = new_tail;
  }

  _reverse_helper(prev_node, current_node) {
    if (current_node.next) {
      this._reverse_helper(current_node, current_node.next);
    }
    current_node.next = prev_node;
  }
}

module.exports = SinglyLinkedList