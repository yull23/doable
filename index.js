import { FormLogin } from "./scripts/pages/form-login.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
import { HomePage } from "./scripts/pages/home.js";
import STORE from "./scripts/store.js";
let credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };

async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(FormLogin);
    console.log("Is at Home");
    await STORE.getTaskList();
    DOMHandler.load(HomePage);

    // const user = await loginUser(credentials);
    // console.log(user);
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
