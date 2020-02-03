class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode
  }

  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      var count = 0;
      var current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
//         removedNode.prev.next = removedNode.next;
//         removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

}

var list = new DoublyLinkedList();
list.push("Masha");
list.push(5);


// PUSH
// Create a new node with the value passed to the function
// If the head property is null, set the head and tail to be the newly created node
// If not, set the next property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the DLL

// POP
// If there is no head, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node
// Set the newTail's next to be null
// Decrement the length
// Return the value removed

// SHIFT
// If length is 0, return undefined
// Store the current head property in a variable (we'll call it old head)
// If the length is one:
//      - set the head to be null
//      - set the tail to be null
// Update the head to be the next of the old head
// Set the head's prev property to be null
// Set the old head's next to null
// Decrement the length
// Return old head

// UNSHIFT
// Create a new node with the value passed to the function
// If the length is 0:
//      - Set the head to be the new node
//      - Set the tail to be the new node
// Otherwise:
//      - Set the prev property on the head of the list to be the new node
//      - Set the next property on the new node to be the head property
//      - Update the head to be the new node

// GET
// If the index is less than 0 or greater or equal to the length, return null
// If the index is less than or equal to half the length of the list,
//  - Loop through the list starting from the the head and loop towards the middle
//  - Return the node once it is found
// If the index is greater than half the length of the list
//  - Loop through the lit starting from the tail and loop towards the middle
//  - Return the node once it is found

// SET
// Create a variable which is the result of the get method at the index passed to the function
//  - If the get method returns a valid node, set the value of that node to be the value passed to function
// Return true
// Otherwise false

// INSERT
// If the index is less than zero or greater that or equal to the length return false
// If the index is 0, unshift
// If the index is the same as the length, push
// Use get method to access the index -1
// Set the next and prev properties on the correct nodes to link everything together
// Increment the length
// Return true

// REMOVE
// If index is less than zero or greater than or equal to the length return undefined
// If the index is 0, shift
// If the index is the same as the length -1, pop
// Use the get method to retrieve the item to be removed
// Update the next and the prev properties to be remove the found node from the list
// Set the next and prev to null on the found node
// Decrement the length
// Return the removed node
