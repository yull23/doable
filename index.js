import { FormLogin } from "./scripts/pages/form-login.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
import { HomePage } from "./scripts/pages/home.js";
import STORE from "./scripts/store.js";
import { Tasks } from "./scripts/components/tasks.js";
import { createUser, deleteUser } from "./scripts/services/user-service.js";
const credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
const newCredentials = { email: "yull_6.timoteo.z@uni.pe", password: "yull23" };

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    const newUser = await createUser(newCredentials);
    await deleteUser();

    // if (!token) return DOMHandler.load(FormLogin);
    // console.log("Is at Home");
    // await STORE.getTaskList();
    // DOMHandler.load(Tasks);
  } catch (error) {
    // console.log(error);
    // sessionStorage.removeItem(tokenKey);
    // DOMHandler.load(LoginPage);
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

// data
