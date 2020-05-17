class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =`
          <nav class="navbar navbar-expand-sm">
            <a class="navbar-brand" href="">SUBMISSION</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fas fa-bars"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="mailto:asrulajipangestu@gmail.com">Contact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.instagram.com/asrul.png/">About</a>
                </li>
              </ul>
            </div>
          </nav>`;
    }
}

customElements.define("nav-bar", NavBar);