import { FormAddTask } from "../components/form-add-task.js";
import { header } from "../components/header.js";
import { Tasks } from "../components/tasks.js";
import STORE from "../store.js";

const render = function () {
  return `
  <main>
  ${header("active") + Tasks + FormAddTask}
  </main>
  `;
};

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    Tasks.addListeners();
    FormAddTask.addListeners();
  },
};
export { HomePage };
