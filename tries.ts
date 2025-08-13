// TrieNode implementation in TypeScript
class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

// usage example
class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char)!;
    }
    currentNode.isEndOfWord = true;
  }

  search(word: string): boolean {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char)!;
    }
    return currentNode.isEndOfWord;
  }

  traverse(node?: TrieNode): void {
    let currentNode = node ?? this.root;
    if (node && node.isEndOfWord) {
      console.log('*');
      return;
    }

    // this.logNodeKeys(currentNode);
    // console.log(currentNode.children.keys())

    const iterator = currentNode.children[Symbol.iterator]();
    for (const [key, trieNode] of iterator) {
      console.log(key);

      this.traverse(trieNode);
    }
  }

  autocorrect(word: string): string {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        return this.followToTheEndOfString(word.slice(0, word.indexOf(char)));
      }
      currentNode = currentNode.children.get(char)!;
    }
    return word;
  }

  private followToTheEndOfString(begginginOfWord: string): string {
    console.log('begginginOfWord :>> ', begginginOfWord);
    let currentNode = this.root;
    for (const char of begginginOfWord) {
      currentNode = currentNode.children.get(char)!;
    }
    let correctedWord = begginginOfWord;
    while (!currentNode.isEndOfWord) {
      const iterator = currentNode.children.entries();
      const value = iterator.next().value;
      if (value) {
        correctedWord += value[0];
        currentNode = value[1];
      }
    }

    return correctedWord;
  }
}

const trie = new Trie();
trie.insert('hello');
trie.insert('get');
trie.insert('go');
trie.insert('got');
trie.insert('gotten');
trie.insert('hall');
trie.insert('hill');
trie.insert('ham');
trie.insert('hammer');
trie.insert('zebra');
trie.insert('cat');
trie.insert('catnap');
trie.insert('catnip');

// trie.traverse();

const autoCorrectedWord = trie.autocorrect('caxasfdij');

console.log('autoCorrectedWord', autoCorrectedWord);
