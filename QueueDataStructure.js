//Queue Data Structure :- A Queue is a linear data structure that follows the FIFO (First In, First Out) principle. This means that the first element added
// to the queue will be the first one to be removed, similar to a real-life queue, like people standing in line. 


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null; // Points to the first node in the queue
    this.last = null; // Points to the last node in the queue
    this.length = 0; // Tracks the number of elements in the queue
  }

  // Return the first element in the queue (peek operatio  n)
  peek() {
    return this.first;
  }

  // Add a new node to the queue (enqueue operation)
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      // If the queue is empty
      this.first = newNode; // Set both first and last to the new node
      this.last = newNode;
    } else {
      this.last.next = newNode; // Link the new node to the end of the queue
      this.last = newNode; // Update the last pointer to the new node
    }
    this.length++; // Increase the queue length
  }

  // Remove the first node from the queue (dequeue operation)
  dequeue() {
    if (!this.first) {
      // If the queue is empty, return false
      return false;
    }
    if (this.first === this.last) {
      // If there's only one element, reset last
      this.last = null;
    }

    this.first = this.first.next; // Move the first pointer to the next node
    this.length--; // Decrease the queue length
    return this.printList(); // Return the queue elements
  }

  // Print the queue as an array
  printList() {
    let array = [];
    let currentNode = this.first;
    while (currentNode !== null) {
      // Traverse the queue and collect values
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // Clear the queue (remove all elements)
  clear() {
    this.first = null;
    this.last = null;
    this.length = 0;
    return "Done!!";
  }

  // Return the size of the queue
  size() {
    return this.length;
  }
}

// ********************** Queue with Arrays **********************

class QueueDataStructure {
  constructor() {
    this.first = []; // Main array storing elements for dequeuing
    this.last = []; // Temporary stack used to reverse elements when enqueueing
  }

  // Add elements to the queue using the 'last' stack
  enqueue(value) {
    const length = this.first.length;

    // Move all elements from 'first' to 'last' to reverse order
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value); // Add new element to the 'last' stack
    return this;
  }

  // Remove elements from the queue using the 'first' stack
  dequeue() {
    const length = this.last.length;

    // Move all elements back from 'last' to 'first' to restore correct order
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop(); // Remove the first element from the queue (FIFO)
    return this;
  }

  // Return the last element in the queue (peek operation)
  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }

    return this.last[0];
  }
}
