class DHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header>
      <div class="container">
        <a onclick="gotoHome()">
          <h1>Best practices</h1>
        </a>
      </div>
    </header>
    `;
  }
}

window.customElements.define("d-header", DHeader);
