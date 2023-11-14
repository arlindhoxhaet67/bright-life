/*
Filename: sophisticated_code.js
Content: This code demonstrates a complex web application that allows users to create and manage personalized to-do lists.
*/

// Utility function to generate a unique identifier for each to-do item
function generateUniqueID() {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    id += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return id;
}

// Class representing a single to-do item
class TodoItem {
  constructor(description) {
    this.id = generateUniqueID();
    this.description = description;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

// Class representing the to-do list with various operations
class TodoList {
  constructor() {
    this.items = [];
  }

  addItem(description) {
    const newItem = new TodoItem(description);
    this.items.push(newItem);
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  toggleItemCompletion(id) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.toggleCompleted();
    }
  }

  getCompletedItems() {
    return this.items.filter(item => item.completed);
  }

  getPendingItems() {
    return this.items.filter(item => !item.completed);
  }

  clearCompletedItems() {
    this.items = this.getPendingItems();
  }
}

// Application logic
const todoList = new TodoList();

todoList.addItem('Buy groceries');
todoList.addItem('Finish report');
todoList.toggleItemCompletion(todoList.items[0].id);

console.log('Completed Items:');
console.log(todoList.getCompletedItems());

console.log('Pending Items:');
console.log(todoList.getPendingItems());

console.log('Removing item:');
todoList.removeItem(todoList.items[1].id);

console.log('Pending Items after removal:');
console.log(todoList.getPendingItems());  

console.log('Clearing completed items:');
todoList.clearCompletedItems();

console.log('Final Pending Items:');
console.log(todoList.getPendingItems());
