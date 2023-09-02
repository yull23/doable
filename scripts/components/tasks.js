import STORE from "../store.js";

const render = function () {
  // STORE.currentTasks();

  return `6 ${STORE.listTasks[0].id} 5`;
};

const Tasks = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
  },
};
export { Tasks };
