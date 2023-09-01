import { FormLogin } from "./scripts/components/form-login.js";
import { Header } from "./scripts/components/header.js";
import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
let credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
async function init() {
  try {
    console.log(DOMHandler);
    const token = sessionStorage.getItem(tokenKey);
    console.log(token);
    // if (!token) return DOMHandler.load(LoginPage);
    const user = await loginUser(credentials);
    console.log(user);
    // await logoutUser();

    // STORE.user = user;
    // STORE.fetchCategories();
    //HomePage
    // DOMHandler.load(HomePage);
  } catch (error) {
    // console.log(error);
    // sessionStorage.removeItem(tokenKey);
    // DOMHandler.load(LoginPage);
  }
}
init();
