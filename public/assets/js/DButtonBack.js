function gotoBack(href) {
  window.location.href = href;
}

class DButtonBack extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <a onclick="gotoBack('${this.getAttribute("href")}')">
      <i class="fas fa-angle-double-left icon"></i>
      Voltar
    </a>
    `;
  }
}

window.customElements.define("d-button-back", DButtonBack);
