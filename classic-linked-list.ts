export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const fristNode = new Node('a');
const secondNode = new Node('b');
const thirdNode = new Node('c');
const fourthNode = new Node('d');
fristNode.next = secondNode;
secondNode.next = thirdNode;
thirdNode.next = fourthNode;

export class LinkedList<T> {
  firstNode: Node<T>;
  constructor(firstNode: Node<T>) {
    this.firstNode = firstNode;
  }

  read(index: number) {
    let current_index = 0;
    let current_node = this.firstNode;
    while (current_index < index && current_node) {
      current_index += 1;

      if (current_node.next === null) return null;

      current_node = current_node.next;
    }

    return current_node;
  }

  printAll() {
    let current_node = this.firstNode;

    do {
      console.log('current_node :>> ', current_node.value);

      if (current_node.next === null) break;

      current_node = current_node.next;
    } while (current_node);
  }

  getLast() {
    let current_node = this.firstNode;

    do {
      if (!current_node.next) break;
      current_node = current_node.next;
    } while (current_node);

    return current_node.value;
  }

  reverse() {
    if (!this.firstNode || !this.firstNode.next) {
      return;
    }

    let prevNode: Node<T> | null = null;
    let currentNode: Node<T> = this.firstNode;
    let nextNode: Node<T> | null = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      if (nextNode === null) break;
      currentNode = nextNode;
    }
    // Update head to the new first node (previously the last node)
    this.firstNode = prevNode!;
  }
}

const linkedList = new LinkedList(fristNode);
// console.log('linkedList :>> ', linkedList.read(4));
// console.log('linkedList.getLast() :>> ', linkedList.getLast());
console.log('reverse :>> ', linkedList.reverse());
console.log('linkedList :>> ', linkedList.printAll());
