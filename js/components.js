class MyNavbar extends HTMLElement {
  connectedCallback() {
    fetch('/components/navbar.html')
      .then(res => res.text())
      .then(data => { this.innerHTML = data; });
  }
}
customElements.define('my-navbar', MyNavbar);