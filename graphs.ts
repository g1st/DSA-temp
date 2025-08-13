class Person {
  name: string;
  friends: Person[];
  visited: boolean;

  constructor(name: string) {
    this.name = name;
    this.friends = [];
    this.visited = false;
  }

  addFriend(friend: Person): void {
    this.friends.push(friend);
  }

  displayNetwork(): void {
    // We keep track of every node we ever visit, so we can reset
    // their 'visited' attribute back to false after our algorithm
    // is complete:
    const toReset: Person[] = [this];

    // Create the queue. It starts out containing the root vertex:
    const queue: Person[] = [this];
    this.visited = true;

    while (queue.length > 0) {
      // The current vertex is whatever is removed from the queue
      const currentVertex = queue.shift()!;
      console.log(currentVertex.name);

      // We add all adjacent vertices of the current vertex to the queue:
      currentVertex.friends.forEach((friend) => {
        if (!friend.visited) {
          toReset.push(friend);
          queue.push(friend);
          friend.visited = true;
        }
      });
    }

    // After the algorithm is complete, we reset each node's 'visited'
    // attribute to false:
    toReset.forEach((node) => {
      node.visited = false;
    });
  }

  search(searchFor: string): string | null {
    // We keep track of every node we ever visit, so we can reset
    // their 'visited' attribute back to false after our algorithm
    // is complete:
    const toReset: Person[] = [this];

    // Create the queue. It starts out containing the root vertex:
    const queue: Person[] = [this];
    this.visited = true;

    while (queue.length > 0) {
      // The current vertex is whatever is removed from the queue
      const currentVertex = queue.shift()!;
      if (currentVertex.name === searchFor) {
        console.log('Found vertex: ', currentVertex);
        return currentVertex.name;
      }

      // We add all adjacent vertices of the current vertex to the queue:
      currentVertex.friends.forEach((friend) => {
        if (!friend.visited) {
          toReset.push(friend);
          queue.push(friend);
          friend.visited = true;
        }
      });
    }

    // After the algorithm is complete, we reset each node's 'visited'
    // attribute to false:
    toReset.forEach((node) => {
      node.visited = false;
    });

    console.log('No vertex found');
    return null;
  }
}

// Example usage
const alice = new Person('Alice');
const bob = new Person('Bob');
const candy = new Person('Candy');
const derek = new Person('Derek');
const elaine = new Person('Elaine');
const fred = new Person('Fred');
const gina = new Person('Gina');
const helen = new Person('Helen');
const irena = new Person('Irena');

// Set up the friendship network
alice.addFriend(bob);
alice.addFriend(candy);
alice.addFriend(derek);
alice.addFriend(elaine);
bob.addFriend(fred);
fred.addFriend(helen);
derek.addFriend(gina);
gina.addFriend(irena);

bob.addFriend(alice);
candy.addFriend(alice);
derek.addFriend(alice);
elaine.addFriend(alice);

fred.addFriend(bob);
helen.addFriend(fred);
gina.addFriend(derek);
irena.addFriend(gina);

// Display the network starting from Alice
// alice.displayNetwork();
alice.search('Bob');
