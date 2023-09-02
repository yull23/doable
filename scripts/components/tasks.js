import STORE from "../store.js";

const renderTask = function (task) {
  let statusTask = "";
  let statusTaskContent;
  if (task.completed == true) statusTaskContent = "completed";
  if (task.important == true && task.completed == false) {
    statusTask += "-active";
  }
  if (task.important == true && task.completed == true) {
    statusTask += "-completed";
  }

  return `
  <li class="task" data-id="${task.id}">
    <div class="task__checkbox">
      <input type="checkbox" data-id="${task.id}" class="checkbox__input" />
    </div>
    <div class="task__content">
      <div class="task__header">
        <label for="1" class="task__body ${statusTaskContent}">${task.title}</label>
        <img
          src="/assets/icon-important${statusTask}.svg"
          alt="icon-important${statusTask}"
          class="task__important"
        />
      </div>
      <p class="task__date ${statusTaskContent}">${task.due_date}</p>
    </div>
  </li>
  `;
};

let data = {
  id: 931,
  title: "New task",
  due_date: "2021-09-30",
  important: false,
  completed: false,
  user_id: 216,
  created_at: "2023-08-31T01:45:11.760Z",
  updated_at: "2023-08-31T01:45:11.760Z",
};

const render = function () {
  return renderTask(data);
};

const Tasks = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
  },
};

export { Tasks };
