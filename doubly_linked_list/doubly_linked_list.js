const Node = require('./node')

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _get_at_index(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let node = null;

    if (index >= (this.length / 2)) {
      node = this.tail;
      while (this.length - index - 1 > 0) {
        node = node.prev;
        index++;
      }
    } else {
      node = this.head;
      while (index > 0) {
        node = node.next
        index--;
      }
    }

    return node;
  }

  push(value) {
    const new_node = new Node(value);

    if (this.length === 0) {
      this.head = new_node;
      this.tail = this.head;
      this.length++;
      return this;
    }

    new_node.prev = this.tail;
    this.tail.next = new_node;
    this.tail = new_node;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }

    const node_to_remove = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return node_to_remove.value;
    }

    const new_tail = node_to_remove.prev;
    node_to_remove.prev = null;
    new_tail.next = null;
    this.tail = new_tail

    this.length--;

    return node_to_remove.value;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    const node_to_remove = this.head;

    if (node_to_remove.next) {
      node_to_remove.next.prev = null;
      this.head = node_to_remove.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return node_to_remove.value;
  }

  unshift(value) {

    const new_node = new Node(value);

    if (this.length === 0) {
      this.head = new_node;
      this.tail = this.head;
      return this
    }

    new_node.next = this.head;
    this.head.prev_node = new_node;
    this.head = new_node;
    return this;
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
      this.length++;
      return true;
    }

    const node = this._get_at_index(index);

    if (node) {
      const new_node = new Node(value);

      new_node.prev = node.prev;
      new_node.next = node;
      node.prev.next = new_node;
      node.prev = new_node;

      this.length++;

      return true;
    }

    return false;
  }

  remove(index) {
    if (index === 0) {
      const value = this.shift();
      return !!value;
    }
    if (index === this.length - 1) {
      return !!this.pop();
    }

    const node = this._get_at_index(index);

    if (node) {
      const previous = node.prev;
      const next = node.next;
      previous.next = next;
      next.prev = previous;

      this.length--;
      return true;
    }

    return false;
  }

  reverse() {
    return;
  }

  _reverse_helper(prev_node, current_node) {
    return;
  }
}

module.exports = DoublyLinkedList