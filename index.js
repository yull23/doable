import { tokenKey } from "./scripts/config.js";
import { loginUser, logoutUser } from "./scripts/services/session-service.js";
let credentials = { email: "yull.timoteo.z@uni.pe", password: "yull23" };
async function init() {
  try {
    const token = sessionStorage.getItem(tokenKey);
    console.log(token);
    // if (!token) return DOMHandler.load(LoginPage);
    const user = await loginUser(credentials);
    console.log(token);
    console.log(user);
    await logoutUser();
    console.log(token);

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