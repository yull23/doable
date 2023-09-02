import { listTasks } from "./services/task-service.js";

async function getTaskList() {
  const tasks = await listTasks();
  this.listTasks = tasks;
}

function currentTasks() {
  return this.listTasks;
}

const STORE = {
  listTasks: [],
  getTaskList,
  currentTasks,
};

export default STORE;
