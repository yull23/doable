import DOMHandler from "../dom-handler.js";
import { createTask } from "../services/task-service.js";
import STORE from "../store.js";

function render() {
  return `
  <div class="home__form container">
    <form action="" class="form-task">
      <input
        type="text"
        class="form-task__input input"
        name=""
        id=""
        placeholder="do the dishes"
        required
      />
      <input type="date" class="form-task__input input" name="" id="" />
      <button class="form-task__submit button">add task</button>
    </form>
  </div>
  `;
}

function listSubmitForm() {
  const form = document.querySelector(".form-task");
  console.log(form);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = event.target.elements[0].value;
    const due_date = event.target.elements[1].value;
    await createTask({ title, due_date });
    await STORE.getTaskList();
    DOMHandler.reload();
  });
}

const FormAddTask = {
  toString() {
    return render();
  },
  addListeners() {
    listSubmitForm();
  },
};
export { FormAddTask };
