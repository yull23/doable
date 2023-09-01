import { tokenKey } from "../config.js";
import { loginUser } from "../services/session-service.js";
import { form } from "./form.js";
import { header } from "./header.js";

const submitCredential = function () {
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
      console.log(user);
    } catch (error) {}
  });
};

const FormLogin = {
  toString() {
    return header() + form();
  },
  addListeners() {
    // listen();
    submitCredential();
  },
};
export { FormLogin };
