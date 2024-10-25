<img src = 'https://storage.googleapis.com/algodailyrandomassets/curriculum/queues/understanding-queues-image2.png' />

# Queue Data Structure in JavaScript

This repository provides a simple implementation of the **Queue** data structure in JavaScript. A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle, where the first element added to the queue will be the first one removed.


## Introduction

A Queue is a linear data structure where elements are added at one end, called the **rear**, and removed from the other end, called the **front**. It is commonly used in scenarios where elements need to be processed in the order they arrive, such as task scheduling, data buffering, or graph traversal.

## Types of Queues

1. **Simple Queue**: Standard queue following FIFO.
2. **Circular Queue**: The rear connects to the front to make efficient use of space.
3. **Priority Queue**: Elements are removed based on priority rather than arrival order.
4. **Double-ended Queue (Deque)**: Supports adding/removing elements from both ends.

## Operations

The basic operations in a queue are:

| Operation      | Description                                |
|----------------|--------------------------------------------|
| `enqueue()`    | Adds an element at the rear of the queue.  |
| `dequeue()`    | Removes an element from the front of the queue. |
| `peekFront()`  | Retrieves the front element without removing it. |
| `isEmpty()`    | Checks if the queue is empty.             |
| `size()`       | Returns the number of elements in the queue. |

## Usage

### Array-based Implementation

This implementation uses an array where:
- **`push()`** adds elements to the rear.
- **`shift()`** removes elements from the front.

### Linked List-based Implementation
1. **Task Scheduling**: Queues are used in operating systems for scheduling tasks and managing processes.
2. **Data Streaming**: In streaming platforms, queues buffer incoming data.
3. **Breadth-First Search (BFS)**: Used in graph traversal algorithms


## Conclusion

The Queue data structure is a fundamental tool in computer science with applications in scheduling, data buffering, and algorithmic processes like graph traversal. This README demonstrated two approaches to implementing a Queue in JavaScript: an **Array-based** method, which is straightforward but may be less memory efficient, and a **Linked List-based** method, which is more efficient for larger datasets by dynamically managing memory. Both implementations adhere to the **FIFO** principle, providing a solid foundation for understanding how queues work and when they are best utilized.
