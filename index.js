import { FormLogin } from "./scripts/components/form-login.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
let credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    if (!token) return DOMHandler.load(FormLogin);
    console.log("You are ready to login.");
    // DOMHandler.load(FormLogin);
    // const user = await loginUser(credentials);
    // console.log(user);
  } catch (error) {
    // console.log(error);
    // sessionStorage.removeItem(tokenKey);
    // DOMHandler.load(LoginPage);
  }
}
init();
