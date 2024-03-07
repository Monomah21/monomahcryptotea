class TaskScheduler {
    constructor() {
      this.tasks = [];
      this.timer = null;
    }
  
    scheduleTask(task, delay) {
      const taskId = setTimeout(() => {
        task();
        this.removeTask(taskId);
      }, delay);
      this.tasks.push({ id: taskId, delay });
      this.start();
      return taskId;
    }
  
    cancelTask(taskId) {
      clearTimeout(taskId);
      this.removeTask(taskId);
    }
  
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      if (this.tasks.length === 0) {
        this.stop();
      }
    }
  
    start() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          const currentTime = Date.now();
          this.tasks.forEach(task => {
            if (currentTime - task.delay >= this.getTaskStartTime(task.id)) {
              clearTimeout(task.id);
              this.removeTask(task.id);
            }
          });
        }, 1000);
      }
    }
  
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }
  
    getTaskStartTime(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      return Date.now() - task.delay;
    }
  
    getTasks() {
      return this.tasks.map(task => ({ id: task.id, startTime: this.getTaskStartTime(task.id) }));
    }
  }
  
  module.exports = TaskScheduler;
  