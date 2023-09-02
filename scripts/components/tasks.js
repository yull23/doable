import DOMHandler from "../dom-handler.js";
import { editTask } from "../services/task-service.js";
import STORE from "../store.js";

function renderTask(task) {
  let colors = {
    default: "#d1d5db",
    completedImportant: "#F9A8D4",
    important: "#EC4899",
  };
  let completedStatus = task.completed ? "completed" : "";
  let checkedStatus = task.completed ? "checked" : "";
  let color = colors.default;

  if (task.completed && task.important) color = colors.completedImportant;
  if (!task.completed && task.important) color = colors.important;

  return `
  <li class="task" data-id="${task.id}">
    <div class="task__checkbox">
      <input type="checkbox" data-id="${task.id}"  data-completed="${task.completed}" class="checkbox__input" ${checkedStatus}/>
    </div>
    <div class="task__content">
      <div class="task__header">
        <label for="${task.id}" class="task__body ${completedStatus}" data-completed="${task.completed}" data-id="${task.id}" >${task.title}</label>
        <div class="task__icon">
          <i class='bx bxs-error-circle bx-sm' style='color:${color}'  data-id="${task.id}" data-completed="${task.completed}" data-important="${task.important}"></i>
          </div>
        </div>
      <p class="task__date ${completedStatus}">${task.due_date}</p>
    </div>
  </li>
  `;
}

function listenChangesImportance() {
  const tasksContainer = document.querySelector(".js-list-tasks");
  tasksContainer.addEventListener("click", async (event) => {
    if (event.target.classList[0] == "bx") {
      const important = event.target.dataset.important;
      const idImportant = event.target.dataset.id;

      await editTask(idImportant, { important: !JSON.parse(important) });
      await STORE.getTaskList();
      DOMHandler.reload();
    }
    if (event.target.type == "checkbox") {
      const completed = event.target.dataset.completed;
      const idCompleted = event.target.dataset.id;

      await editTask(idCompleted, { completed: !JSON.parse(completed) });
      await STORE.getTaskList();
      DOMHandler.reload();
    }

    // if (event.target.type == "checkbox") {
    //   const statusCompleted = event.target.dataset.completed;
    // }
  });
}

function render() {
  const tasks = STORE.currentTasks();
  return `
  <div class="home__list-tasks container">
    <ul class="home__tasks js-list-tasks">
    ${tasks.map((element) => renderTask(element)).join("")}
    </ul>
  </div>`;
}

const Tasks = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    listenChangesImportance();
  },
};
export { Tasks };

// <img
//   src="/assets/icon-important${statusTask}.svg"
//   alt="icon-important${statusTask}"
//   class="task__important"
// />;
