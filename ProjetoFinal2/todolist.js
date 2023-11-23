class TodoList {
    constructor() {
      this.tasks = [];
      this.currentId = 1;
    }
  
    addTask(description) {
      const task = {
        id: this.currentId,
        description: description,
      };
      this.tasks.push(task);
      this.currentId++;
      return task;
    }
  
    editTask(id, newDescription) {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.description = newDescription;
        return task;
      } else {
        return null;
      }
    }
  
    removeTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        return true;
      } else {
        return false;
      }
    }
  
    listTasks() {
      return this.tasks;
    }
  
    getTaskById(id) {
      return this.tasks.find(task => task.id === id) || null;
    }

    searchTaskById(id) {
      return this.tasks.find(task => task.id === id) || null;
    }
  }
  