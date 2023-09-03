import { formRender } from "../components/form.js";
import { header } from "../components/header.js";
import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import { HomePage } from "./home-page.js";
import { createUser } from "../services/user-service.js";
import { LoginPage } from "./login-page.js";

const render = function () {
  return header() + formRender("signup");
};

const listenSubmitForm = function () {
  const form = document.querySelector("#signup-form");
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      const elements = event.target.elements;
      const credentialsForm = {
        email: elements[0].value,
        password: elements[1].value,
      };
      await createUser(credentialsForm);
      await STORE.getTaskList();
      DOMHandler.load(HomePage);
    } catch (error) {}
  });
};

const listenDirectLogin = function () {
  const link = document.querySelector(".js-link-login");
  link.addEventListener("click", (event) => {
    DOMHandler.load(LoginPage);
  });
};

const Signup = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    listenSubmitForm();
    listenDirectLogin();
  },
  state: {
    signupError: null,
  },
};
export { Signup };
