import { loginUser } from "../services/session-service.js";
import { formRender } from "../components/form.js";
import { header } from "../components/header.js";
import STORE from "../store.js";
import DOMHandler from "../dom-handler.js";
import { HomePage } from "./home-page.js";
import { Signup } from "./signup-page.js";

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
      await loginUser(credentialsForm);
      await STORE.getTaskList();
      DOMHandler.load(HomePage);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      console.log(LoginPage.state.loginError);
      DOMHandler.reload();
    }
  });
};

const listenDirectSignup = function () {
  const link = document.querySelector(".js-link-create");
  link.addEventListener("click", (event) => {
    DOMHandler.load(Signup);
  });
};

// const listen

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    listenSubmitForm();
    listenDirectSignup();
  },
  state: {
    loginError: null,
  },
};
export { LoginPage };
