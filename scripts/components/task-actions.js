function render() {
  return `
      <main>
        <div class="home__header container">
          <form action="" class="form-actions__container">
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
          </form>
          <form action="" class="form-actions__container js-only-view">
            <span for="" class="form-actions__label">Show</span>
            <div class="form-actions__actions-show">
              <label class="form-actions__block-input">
                <input
                  type="radio"
                  name="election"
                  value="option1"
                  class="form-actions__checkbox checkbox__input js-input-pending"
                />
                Only pending
              </label>
              <label class="form-actions__block-input">
                <input
                  type="radio"
                  name="election"
                  value="option2"
                  class="form-actions__checkbox checkbox__input js-input-important"
                />
                Only important
              </label>
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
  },
};
export { TaskActions };
