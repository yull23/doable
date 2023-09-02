import { LoginPage } from "./scripts/pages/login-page.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
import { HomePage } from "./scripts/pages/home-page.js";
import STORE from "./scripts/store.js";
import { createUser, deleteUser } from "./scripts/services/user-service.js";
import {
  createTask,
  deleteTask,
  editTask,
  listTasks,
  showTask,
} from "./scripts/services/task-service.js";

// DATA TEST
const credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
const newCredentials = {
  email: "yull_10.timoteo.z@uni.pe",
  password: "yull23",
};

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
    // ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫
    // START:  Comprobación de funcionamiento de session-service
    // const user = await loginUser(credentials);
    // console.log(user);
    // console.log(sessionStorage.getItem(tokenKey)); // current token
    // await logoutUser();
    // console.log(sessionStorage.getItem(tokenKey)); // current token
    // END:  Comprobación de funcionamiento de session-service
    // ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫
    // START:  Comprobación de funcionamiento de user-service
    // const newUser = await createUser(newCredentials);
    // console.log(newUser);
    // console.log(sessionStorage.getItem(tokenKey)); // current token
    // await deleteUser();
    // console.log(sessionStorage.getItem(tokenKey)); // Null
    // END:  Comprobación de funcionamiento de user-service
    // ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫
    // START:  Comprobación de funcionamiento de task-service
    // const idSearch = await showTask(idTask);
    // console.log(idSearch);
    // const taskCreated = await createTask(newTask);
    // console.log(taskCreated);
    // const taskEdit = await editTask(idTask, contentEdit);
    // console.log(taskEdit);
    // const tasksList = await listTasks();
    // console.log(tasksList);
    // lastId = tasksList.slice(-1)[0].id;
    // await deleteTask(lastId);
    // console.log(await listTasks());
    // END:  Comprobación de funcionamiento de task-service
    // ♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫♫
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(LoginPage);
    console.log("Is at Home");
    await STORE.getTaskList();
    DOMHandler.load(HomePage);
  } catch (error) {
    console.log(error);
    sessionStorage.removeItem(tokenKey);
    DOMHandler.load(LoginPage);
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
