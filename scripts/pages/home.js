import { header } from "../components/header.js";
import { Tasks } from "../components/tasks.js";

const render = function () {
  return header() + Tasks;
};

const HomePage = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
  },
};
export { HomePage };
