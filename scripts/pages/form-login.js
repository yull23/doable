import { tokenKey } from "../config.js";
import { loginUser } from "../services/session-service.js";
import { formRender } from "../components/form.js";
import { header } from "../components/header.js";
import { listTasks } from "../services/task-service.js";
import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import { HomePage } from "./home.js";

const render = function () {
  return header() + formRender();
};

const listenSubmitForm = function () {
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const elements = event.target.elements;
      const credentialsForm = {
        email: elements[0].value,
        password: elements[1].value,
      };
      const user = await loginUser(credentialsForm);
      STORE.user = user;
      await STORE.getTaskList();
      DOMHandler.load(HomePage);
    } catch (error) {}
  });
};

const FormLogin = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    listenSubmitForm();
  },
};
export { FormLogin };
