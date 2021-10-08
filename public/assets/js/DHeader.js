class DHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header>
      <div class="container">
        <a onclick="gotoHome()">
          <h1>Best practices</h1>
        </a>

        <section>
          <a class="btn btn-github" href="https://github.com/Big-Bang-Shop/best-practices" target="_blank">
            <i class="fab fa-github-alt"></i>
          </a>
        </section>
      </div>
    </header>
    `;
  }
}

window.customElements.define("d-header", DHeader);
