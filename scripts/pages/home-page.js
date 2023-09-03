import { FormAddTask } from "../components/form-add-task.js";
import { header } from "../components/header.js";
import { TaskActions } from "../components/task-actions.js";
import { Tasks } from "../components/tasks.js";
import DOMHandler from "../dom-handler.js";
import { logoutUser } from "../services/session-service.js";
import STORE from "../store.js";
import { LoginPage } from "./login-page.js";

const render = function () {
  return `
  <main>
  ${header("active") + TaskActions + Tasks + FormAddTask}
  </main>
  `;
};

const listenLogout = function () {
  const link = document.querySelector(".js-active");
  console.log(link);
  link.addEventListener("click", async (event) => {
    await logoutUser();
    DOMHandler.load(LoginPage);
  });
};

const HomePage = {
  toString() {
    // console.log(typeof STORE.listTasks[0].important);
    return render();
  },
  addListeners() {
    // listen();
    listenLogout();
    Tasks.addListeners();
    FormAddTask.addListeners();
    TaskActions.addListeners();
  },
};
export { HomePage };
