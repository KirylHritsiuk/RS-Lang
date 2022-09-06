import { User } from '../../modules/user/user';
import localStorageTextbook from '../../modules/textbook/anonymous/localStorageTextbook';

export class Modal {
  protected modal: HTMLDivElement;

  protected body: HTMLElement;

  protected name: string;

  protected password: string;

  protected email: string;

  protected avatar: string;

  protected avatarUrl: string;

  user: User;

  constructor() {
    this.modal = document.createElement('div');
    this.avatar = ' ';
    this.avatarUrl = '';
    this.body = document.querySelector('.body')!;
    this.modal.className = 'modal-overlay';
    this.name = '';
    this.password = '';
    this.email = '';
    this.user = new User();
  }

  protected createModalElement() {
    this.modal.innerHTML = `
      <form class="modal-user" action="" novalidate>
          <h1 class="modal-header">Login</h1>

          <div class="input_form">
              <input type="email" value="" name="email" placeholder="Email" class="input input_email">
          </div>
          <div class="input_form">
              <input type="password" value="" name="password" minlength="6" placeholder="Password" class="input input_password">
          </div>
          <div class="checkbox_form">
              <input name="checkbox" class="checkbox_input" id="checkbox" type="checkbox">
              <label class="checkbox_label" for="checkbox">Show password</label>
          </div>
          <button class="btn-login btn-sign" type="submit">sign in</button>
          <div class="register">
              <a href="#">
                  Don't have an account? Sign Up
              </a>
          </div>
      </form>`;
    return this.modal;
  }

  validateEmail(email: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  errorMesssageInModal(message: string, mess: string) {
    if (message === 'open') {
      const err: HTMLElement | null = document.querySelector('.error-message-modal');
      if (!err) {
        const btnModal = document.querySelector('.btn-sign') as HTMLButtonElement;
        btnModal.insertAdjacentHTML('afterend', `
          <div class="error-message-modal" style="color:red;">${mess}</div>`);
      } else {
        const btnModalMessage: HTMLDivElement | null = document.querySelector('.error-message-modal');
        if (btnModalMessage) {
          btnModalMessage.innerText = mess;
        }
      }
    } else {
      const errorMessage: HTMLElement | null = document.querySelector('.error-message-modal');
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  }

  addModalListener() {
    const login: HTMLElement | null = document.querySelector('#login');
    const loginBottom: HTMLElement | null = document.querySelector('#login-bottom');
    const loginSingUp: HTMLElement | null = document.querySelector('#sing-up-bottom');
    if (login) {
      login.addEventListener('click', () => {
        this.modal.classList.add('transition-open-modal');
        this.body.classList.add('no-scroll');
      });
      this.modal.addEventListener('animationend', (e) => {
        if (e.animationName === 'close-modal') {
          this.modal.classList.remove('open-modal');
          this.modal.classList.remove('transition-close-modal');
          this.body.classList.remove('no-scroll');
        }
        if (e.animationName === 'open-modal') {
          this.modal.classList.add('open-modal');
          this.modal.classList.remove('transition-open-modal');
        }
      });
    }
    if (loginBottom) {
      loginBottom.addEventListener('click', () => {
        this.modal.classList.add('transition-open-modal');
        this.body.classList.add('no-scroll');
      });
      this.modal.addEventListener('animationend', (e) => {
        if (e.animationName === 'close-modal') {
          this.modal.classList.remove('open-modal');
          this.modal.classList.remove('transition-close-modal');
          this.body.classList.remove('no-scroll');
        }
        if (e.animationName === 'open-modal') {
          this.modal.classList.add('open-modal');
          this.modal.classList.remove('transition-open-modal');
        }
      });
    }

    if (loginSingUp) {
      loginSingUp.addEventListener('click', () => {
        this.modal.classList.add('transition-open-modal');
        this.body.classList.add('no-scroll');
      });
      this.modal.addEventListener('animationend', (e) => {
        if (e.animationName === 'close-modal') {
          this.modal.classList.remove('open-modal');
          this.modal.classList.remove('transition-close-modal');
          this.body.classList.remove('no-scroll');
        }
        if (e.animationName === 'open-modal') {
          this.modal.classList.add('open-modal');
          this.modal.classList.remove('transition-open-modal');
        }
      });
    }
    const checkbox = document.querySelector('#checkbox') as HTMLInputElement;
    const password = document.querySelector('.input_password') as HTMLInputElement;
    checkbox.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text';
      } else {
        password.type = 'password';
      }
    });

    const form = document.querySelector('.modal-user') as HTMLFormElement;
    let forms = document.querySelectorAll('.input_form') as NodeListOf<Element>;
    let inputName: HTMLInputElement | null = document.querySelector('.input_name');
    const inputEmail = document.querySelector('.input_email') as HTMLInputElement;
    const inputPassword = document.querySelector('.input_password') as HTMLInputElement;
    const modalContainer = document.querySelector('.modal-user') as HTMLElement;
    const signUp = document.querySelector('.register') as HTMLElement;
    const btnLogin = document.querySelector('.btn-login') as HTMLButtonElement;

    form.onsubmit = (ev) => {
      ev.preventDefault();
      let flagPass = false;
      let flagName = true;
      let flagEmail = false;
      const emailVal = inputEmail.value;
      const passwordVal = inputPassword.value;
      let nameVal = null;
      if (inputName) {
        nameVal = inputName.value;
        if (nameVal === '') {
          inputName.classList.add('error');
          this.name = nameVal;
          flagName = false;
        }
        if (nameVal.length < 2) {
          inputName.classList.add('error');
          this.name = nameVal;
          this.errorMesssageInModal('open', 'name must be 2 or more');
          flagName = false;
        } else {
          inputName.classList.remove('error');
          this.name = nameVal;
          flagName = true;
        }
      }
      if (emailVal === '') {
        inputEmail.classList.add('error');
        flagEmail = false;
      }
      if (!this.validateEmail(emailVal)) {
        inputEmail.classList.add('error');
        this.errorMesssageInModal('open', 'email incorrect');
        flagEmail = false;
      } else {
        inputEmail.classList.remove('error');
        flagEmail = true;
      }
      if (passwordVal === '') {
        inputPassword.classList.add('error');
        flagPass = false;
      }
      if (passwordVal.length < 6) {
        inputPassword.classList.add('error');
        this.errorMesssageInModal('open', 'password must be 6 or more');
        flagPass = false;
      } else {
        inputPassword.classList.remove('error');
        flagPass = true;
      }
      this.email = emailVal;
      this.password = passwordVal;
      if (flagPass && flagName && flagEmail) {
        if (btnLogin.textContent === 'sign up') {
          const newUser = this.user.registerUser({
            email: this.email,
            name: this.name,
            password: this.password,
            avatar: this.avatarUrl,
          });
          newUser.then((data) => {
            if (data) {
              this.errorMesssageInModal('del', '');
              this.modal.classList.add('transition-close-modal');
              localStorageTextbook.clearItemLocalStorage();
              inputPassword.value = '';
              inputEmail.value = '';
            } else {
              this.errorMesssageInModal('open', 'user email already exists');
            }
          });
        }
        if (btnLogin.textContent === 'sign in') {
          const loginUser = this.user.loginUser({ email: this.email, password: this.password });
          loginUser.then((data) => {
            if (data.message === 'Authenticated') {
              localStorageTextbook.clearItemLocalStorage();
              this.errorMesssageInModal('del', '');
              this.modal.classList.add('transition-close-modal');
              inputPassword.value = '';
              inputEmail.value = '';
            } else this.errorMesssageInModal('open', data.message);
          });
        }
      }
    };
    this.modal.addEventListener('click', (ev) => {
      const temp = ev.target as HTMLElement;
      if (temp.classList[0] === 'modal-overlay') {
        this.modal.classList.add('transition-close-modal');
      }
    });

    loginBottom!.addEventListener('click', (ev) => {
      const temp = ev.target as HTMLElement;
      if (temp.classList[0] === 'modal-overlay') {
        this.modal.classList.add('transition-close-modal');
      }
    });

    signUp.addEventListener('click', () => {
      if (forms.length === 2) {
        modalContainer.firstElementChild?.remove();
        const nameElement = document.createElement('div');
        nameElement.classList.add('input_form');
        nameElement.innerHTML = '<input id="name" type="text" value="" name="name" placeholder="Name" class="input input_name">';
        const titleElement = document.createElement('h1');
        titleElement.classList.add('modal-header');
        titleElement.innerText = 'Register';
        modalContainer.prepend(titleElement, nameElement);
        signUp.innerHTML = '<a href=#>Do you have an account? Sign In<a>';
        btnLogin.textContent = 'sign up';
        inputName = document.querySelector('.input_name');
        this.createAvatar();
      } else if (forms.length === 3) {
        modalContainer.firstElementChild?.remove();
        modalContainer.firstElementChild?.remove();
        const titleElement = document.createElement('h1');
        titleElement.classList.add('modal-header');
        titleElement.innerText = 'Login';
        modalContainer.prepend(titleElement);
        signUp.innerHTML = '<a href=#>Don\'t have an account? Sign Up<a>';
        btnLogin.textContent = 'sign in';
        inputName = null;
        this.removeAvatar();
      }
      forms = document.querySelectorAll('.input_form') as NodeListOf<Element>;
    });

    loginSingUp!.addEventListener('click', () => {
      if (forms.length === 2) {
        modalContainer.firstElementChild?.remove();
        const nameElement = document.createElement('div');
        nameElement.classList.add('input_form');
        nameElement.innerHTML = '<input id="name" type="text" value="" name="name" placeholder="Name" class="input input_name">';
        const titleElement = document.createElement('h1');
        titleElement.classList.add('modal-header');
        titleElement.innerText = 'Register';
        modalContainer.prepend(titleElement, nameElement);
        signUp.innerHTML = '<a href=#>Do you have an account? Sign In<a>';
        btnLogin.textContent = 'sign up';
        inputName = document.querySelector('.input_name');
        this.createAvatar();
      } else if (forms.length === 3) {
        modalContainer.firstElementChild?.remove();
        modalContainer.firstElementChild?.remove();
        const titleElement = document.createElement('h1');
        titleElement.classList.add('modal-header');
        titleElement.innerText = 'Login';
        modalContainer.prepend(titleElement);
        signUp.innerHTML = '<a href=#>Don\'t have an account? Sign Up<a>';
        btnLogin.textContent = 'sign in';
        inputName = null;
        this.removeAvatar();
      }
      forms = document.querySelectorAll('.input_form') as NodeListOf<Element>;
    });
  }

  createAvatar() {
    const check = document.querySelector('.checkbox_form') as HTMLDivElement;
    const avatar = document.createElement('div') as HTMLDivElement;
    avatar.classList.add('add-avatar');
    const ava = document.createElement('button') as HTMLButtonElement;
    ava.classList.add('btn-login');
    ava.classList.add('avatar-min');
    ava.textContent = 'choise file';

    const img = document.createElement('img') as HTMLImageElement;
    img.classList.add('img-avatar');
    img.src = 'https://st3.depositphotos.com/1767687/16607/v/600/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg';
    const inputIMG = document.createElement('input') as HTMLInputElement;
    inputIMG.classList.add('avatar');
    inputIMG.hidden = true;
    inputIMG.type = 'file';
    inputIMG.accept = 'image';

    avatar.append(img, inputIMG, ava);
    check.insertAdjacentElement('afterend', avatar);

    ava.addEventListener('click', (ev) => {
      ev.preventDefault();
      inputIMG.click();
      inputIMG.addEventListener('change', async () => {
        const file = inputIMG.files as FileList;
        const filereader = new FileReader();
        filereader.readAsDataURL(file[0]);
        const formdata = new FormData();
        filereader.onload = async (ev) => {
          const url = ev.target?.result;
          if (url) {
            this.avatar = url.toString();
            formdata.append('file', this.avatar);
            formdata.append('upload_preset', 'lmaiqtqc');
            const avatarUrl = await (await fetch('https://api.cloudinary.com/v1_1/dv4y8etpf/upload', {
              method: 'POST',
              headers: { 'Sec-Fetch-Mode': 'no-cors' },
              body: formdata,
            })).json();
            this.avatarUrl = avatarUrl.secure_url;
            img.src = this.avatarUrl;
          }
        };
      });
    });
  }

  removeAvatar() {
    const check = document.querySelector('.checkbox_form') as HTMLDivElement;
    const nexCheck = check.nextElementSibling as HTMLElement;
    nexCheck.remove();
  }

  render(): void {
    this.body.append(this.createModalElement());
    this.addModalListener();
    if (localStorage.getItem('rslang-user')) {
      this.user.logout();
    }
   }
}
