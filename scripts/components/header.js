export function render(active = "active") {
  return `
  <header class="header">
    <div class="header__container">
      <div class="header__space"></div>
      <div class="header__logo">
        <span class="logo">{ do<span class="logo__edit">able</span> }</span>
      </div>
      <div class="header__space">
        <img
          src="assets/icon-block.svg"
          alt=""
          class="header__logout ${active}"
        />
      </div>
    </div>
  </header>
  `;
}

const Header = {
  toString() {
    return render();
  },
  addListeners() {
    // listen();
  },
};
export { Header };
