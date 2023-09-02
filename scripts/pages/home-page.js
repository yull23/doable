import { header } from "../components/header.js";
import { Tasks } from "../components/tasks.js";
import STORE from "../store.js";

const render = function () {
  return header("active") + Tasks;
};

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    Tasks.addListeners();
  },
};
export { HomePage };
