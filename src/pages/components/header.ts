export class Header {
  protected container: HTMLHeadElement;

  static TextObject = {
    ClassName: 'header-wrapper',
  };

  constructor() {
    this.container = document.createElement('header');
    this.container.className = Header.TextObject.ClassName;
  }

  render() {
    this.container.innerHTML = `<div class="login-wrapper">
        <h1 id="headerTitle" class="style-h1"></h1>
        <div class="log-pole">
          <button class="login" id="login">
              <div class="plase-login">
                  <svg class="svg-login" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                          d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z">
                      </path>
                  </svg>
              </div>
              <div class="svg-login-plase">
                  <span class="login-text">Авторизоваться</span>
              </div>
          </button>
        </div>
    </div>`;
    return this.container;
  }
}
