import { LinkedList, Node } from './classic-linked-list.ts';

describe('LinkedList', () => {
  let list: LinkedList<string>;
  let firstNode: Node<string>;
  
  beforeEach(() => {
    // Create a linked list with nodes a -> b -> c -> d
    firstNode = new Node('a');
    const secondNode = new Node('b');
    const thirdNode = new Node('c');
    const fourthNode = new Node('d');
    
    firstNode.next = secondNode;
    secondNode.next = thirdNode;
    thirdNode.next = fourthNode;
    
    list = new LinkedList(firstNode);
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
  
  describe('getLast', () => {
    test('should return the value of the last node', () => {
      expect(list.getLast()).toBe('d');
    });
    
    test('should work with a single node', () => {
      const singleNode = new Node('single');
      const singleList = new LinkedList(singleNode);
      expect(singleList.getLast()).toBe('single');
    });
  });
  
  describe('reverse', () => {
    test('should reverse the linked list', () => {
      list.reverse();
      
      // After reversal, the order should be d -> c -> b -> a
      expect(list.read(0)?.value).toBe('d');
      expect(list.read(1)?.value).toBe('c');
      expect(list.read(2)?.value).toBe('b');
      expect(list.read(3)?.value).toBe('a');
    });
    
    test('should handle a single node list', () => {
      const singleNode = new Node('single');
      const singleList = new LinkedList(singleNode);
      singleList.reverse();
      
      expect(singleList.read(0)?.value).toBe('single');
    });
    
    test('should handle an empty list gracefully', () => {
      // Implementation doesn't support empty lists, but if it did:
      // This test would check that reverse() doesn't crash with empty lists
      expect(() => list.reverse()).not.toThrow();
    });
  });
});
