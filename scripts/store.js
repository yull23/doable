import { listTasks } from "./services/task-service.js";

async function getTaskList() {
  const tasks = await listTasks();
  this.listTasks = tasks;
}

const STORE = {
  listTasks: [],
  getTaskList,
};

export default STORE;
