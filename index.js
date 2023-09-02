import { FormLogin } from "./scripts/pages/form-login.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
import { HomePage } from "./scripts/pages/home.js";
import STORE from "./scripts/store.js";
import { Tasks } from "./scripts/components/tasks.js";
import { createUser, deleteUser } from "./scripts/services/user-service.js";
import {
  createTask,
  deleteTask,
  editTask,
  listTasks,
  showTask,
} from "./scripts/services/task-service.js";

// DATA USER
const credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
const newCredentials = { email: "yull_6.timoteo.z@uni.pe", password: "yull23" };
// DATA TASK
let idTask = 931;
const newTask = {
  title: "New task",
  due_date: "2021-09-30",
};

const contentEdit = {
  title: "Yull_Edit",
  due_date: "2021-10-01",
  important: true,
  completed: true,
};

let lastId;

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    console.log(token);
    const user = await loginUser(credentials);
    console.log(user);
    console.log(token);
    // const newUser = await createUser(newCredentials);
    // await deleteUser();

    // START:  Comprobación de funcionamiento de task-service
    const idSearch = await showTask(idTask);
    console.log(idSearch);
    const taskCreated = await createTask(newTask);
    console.log(taskCreated);
    const taskEdit = await editTask(idTask, contentEdit);
    console.log(taskEdit);
    const tasksList = await listTasks();
    console.log(tasksList);
    lastId = tasksList.slice(-1)[0].id;
    await deleteTask(lastId);
    console.log(await listTasks());
    // END:  Comprobación de funcionamiento de task-service

    // if (!token) return DOMHandler.load(FormLogin);
    // console.log("Is at Home");
    // await STORE.getTaskList();
    // DOMHandler.load(Tasks);
  } catch (error) {
    // console.log(error);
    // sessionStorage.removeItem(tokenKey);
    // DOMHandler.load(LoginPage);
  }
}
init();

// const Module = {
//   toString() {
//     return render();
//   },
//   addListeners() {
//     // listen();
//   },
// };
// export { Module };

// data
