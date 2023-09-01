export function form(page = "login") {
  let data = {
    login: ["submit-login", "login", "link-create", "create count"],
    signup: ["submit-create", "create count", "link-login", "signup"],
  };

  return `
      <main>
        <div class="content-form">
          <form action="" class="form">
            <div class="form__container">
              <label for="" class="form__label">email</label>
              <input
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                class="form__input input"
                required
              />
            </div>
            <div class="form__container">
              <label for="" class="form__label">password</label>
              <input
                type="password"
                autocomplete="password"
                placeholder="******"
                class="form__input input"
                required
              />
            </div>
            <div>
              <button class="form__submit button" id="${data[page][0]}">
                ${data[page][1]}
              </button>
            </div>
            <a href="#" class="link-create" id="${data[page][2]}">${data[page][3]}</a>
          </form>
        </div>
      </main>
  `;
}

// const Form = {
//   toString() {
//     return render();
//   },
//   addListeners() {
//     // listen();
//   },
// };
// export { Form };
