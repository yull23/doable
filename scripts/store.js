import { listTasks } from "./services/task-service.js";

async function getTaskList() {
  const tasks = await listTasks();
  tasks.sort((a, b) => a.title.localeCompare(b.title));

  this.listTasks = tasks;
  const pendingTask = tasks.filter((element) => element.completed);
  this.pendingTask = pendingTask;
  const importantTask = tasks.filter((element) => element.important);
  this.importantTask = importantTask;
}

const STORE = {
  listTasks: [],
  importantTask: [],
  pendingTask: [],
  getTaskList,
};

export default STORE;
