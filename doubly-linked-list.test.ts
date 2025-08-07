import { DoublyLinkedList, Node } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<string>;
  let firstNode: Node<string>;
  let lastNode: Node<string>;

  beforeEach(() => {
    // Create a doubly linked list with nodes a <-> b <-> c <-> d
    firstNode = new Node('a');
    const secondNode = new Node('b');
    const thirdNode = new Node('c');
    lastNode = new Node('d');

    firstNode.next = secondNode;
    secondNode.next = thirdNode;
    secondNode.prev = firstNode;
    thirdNode.next = lastNode;
    thirdNode.prev = secondNode;
    lastNode.prev = thirdNode;

    list = new DoublyLinkedList(firstNode, lastNode);
  });

  describe('Node', () => {
    test('should be initialized with value and null references', () => {
      const node = new Node('test');
      expect(node.value).toBe('test');
      expect(node.next).toBeNull();
      expect(node.prev).toBeNull();
    });
  });

  describe('read', () => {
    test('should return the node at the specified index', () => {
      expect(list.read(0)?.value).toBe('a');
      expect(list.read(1)?.value).toBe('b');
      expect(list.read(2)?.value).toBe('c');
      expect(list.read(3)?.value).toBe('d');
    });

    test('should return null for an index that is out of bounds', () => {
      expect(list.read(4)).toBeNull();
    });
  });

  describe('printAll', () => {
    test('should log all node values in forward order', () => {
      // Mock console.log to track calls
      const originalLog = console.log;
      const mockLog = jest.fn();
      console.log = mockLog;

      list.printAll();

      expect(mockLog).toHaveBeenCalledTimes(4);
      expect(mockLog).toHaveBeenNthCalledWith(1, 'current_node :>> ', 'a');
      expect(mockLog).toHaveBeenNthCalledWith(2, 'current_node :>> ', 'b');
      expect(mockLog).toHaveBeenNthCalledWith(3, 'current_node :>> ', 'c');
      expect(mockLog).toHaveBeenNthCalledWith(4, 'current_node :>> ', 'd');

      // Restore console.log
      console.log = originalLog;
    });

    test('should handle a list with only one node', () => {
      const singleNode = new Node('single');
      const singleList = new DoublyLinkedList(singleNode, singleNode);

      // Mock console.log
      const originalLog = console.log;
      const mockLog = jest.fn();
      console.log = mockLog;

      singleList.printAll();

      expect(mockLog).toHaveBeenCalledTimes(1);
      expect(mockLog).toHaveBeenCalledWith('current_node :>> ', 'single');

      // Restore console.log
      console.log = originalLog;
    });
  });

  describe('printAllReverse', () => {
    test('should log all node values in reverse order', () => {
      // Mock console.log to track calls
      const originalLog = console.log;
      const mockLog = jest.fn();
      console.log = mockLog;

      list.printAllReverse();

      expect(mockLog).toHaveBeenCalledTimes(4);
      expect(mockLog).toHaveBeenNthCalledWith(1, 'd');
      expect(mockLog).toHaveBeenNthCalledWith(2, 'c');
      expect(mockLog).toHaveBeenNthCalledWith(3, 'b');
      expect(mockLog).toHaveBeenNthCalledWith(4, 'a');

      // Restore console.log
      console.log = originalLog;
    });

    test('should handle a list with only one node', () => {
      const singleNode = new Node('single');
      const singleList = new DoublyLinkedList(singleNode, singleNode);

      // Mock console.log
      const originalLog = console.log;
      const mockLog = jest.fn();
      console.log = mockLog;

      singleList.printAllReverse();

      expect(mockLog).toHaveBeenCalledTimes(1);
      expect(mockLog).toHaveBeenCalledWith('single');

      // Restore console.log
      console.log = originalLog;
    });
  });

  // Testing the correctness of the doubly linked list structure
  describe('doubly linked structure', () => {
    test('should be able to traverse forward and backward', () => {
      // Forward traversal
      let current = firstNode;
      const forwardValues = [];
      while (current) {
        forwardValues.push(current.value);
        current = current.next as Node<string>;
        if (!current) break;
      }
      expect(forwardValues).toEqual(['a', 'b', 'c', 'd']);

      // Backward traversal
      current = lastNode;
      const backwardValues = [];
      while (current) {
        backwardValues.push(current.value);
        current = current.prev as Node<string>;
        if (!current) break;
      }
      expect(backwardValues).toEqual(['d', 'c', 'b', 'a']);
    });
  });
});
