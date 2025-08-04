export class Node<T> {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

const fristNode = new Node('a');
const secondNode = new Node('b');
const thirdNode = new Node('c');
const fourthNode = new Node('d');
fristNode.next = secondNode;
secondNode.next = thirdNode;
secondNode.prev = fristNode;
thirdNode.next = fourthNode;
thirdNode.prev = secondNode;
fourthNode.prev = thirdNode;

export class DoublyLinkedList<T> {
  firstNode: Node<T>;
  lastNode: Node<T>;
  constructor(firstNode: Node<T>, lastNode: Node<T>) {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
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
    let current_index = 0;
    let current_node = this.firstNode;

    do {
      current_index += 1;
      console.log('current_node :>> ', current_node.value);

      if (current_node.next === null) break;

      current_node = current_node.next;
    } while (current_node);
  }

  printAllReverse() {
    let currentNode = this.lastNode;

    do {
      console.log(currentNode.value);
      if (!currentNode.prev) break;
      currentNode = currentNode.prev;
    } while (currentNode);
  }
}

const doublyLinkedList = new DoublyLinkedList(fristNode, fourthNode);
doublyLinkedList.printAllReverse();
