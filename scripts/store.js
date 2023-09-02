import { listTasks } from "./services/task-service.js";

async function getTaskList() {
  const tasks = await listTasks();
  this.listTasks = tasks;
}

function currentTasks() {
  return this[this.listTasks];
}

const STORE = {
  user: null,
  listTasks: [],
  getTaskList,
  currentTasks,
};

export default STORE;
