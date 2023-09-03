import STORE from "../store.js";

function listenInit() {}

function render() {
  return `
          <div class="home__header container">
          <form action="" class="form-actions">
            <div class="form-actions__container">
              <label for="" class="form-actions__label">Sort</label>
              <select
                id="options"
                name="options"
                class="form-actions__actions-sort select"
              >
                <option value="option1">Alphabetical (a-z)</option>
                <option value="option2">Dua date</option>
                <option value="option3">Importance</option>
              </select>
            </div>
            <div class="form-actions__container">
              <label for="" class="form-actions__label">Show</label>
              <div class="form-actions__actions-show">
                <div class="form-actions__block-input">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    class="form-actions__checkbox checkbox__input"
                  />
                  <label for="">Only pending</label>
                </div>
                <div class="form-actions__block-input">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    class="form-actions__checkbox checkbox__input"
                  />
                  <label for="">Only important</label>
                </div>
              </div>
            </div>
          </form>
        </div>
  `;
}

const TaskActions = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
    listenInit();
  },
};
export { TaskActions };
