export class Modal {
  protected modal: HTMLDivElement;
  protected body: HTMLElement;

  constructor () {
    this.modal = document.createElement('div')
    this.body = document.querySelector('.body')!
    this.modal.className = 'modal-overlay'
  }

  protected createModalElement() {
    this.modal.innerHTML = `
      <form class="modal" action="" novalidate>
          <h1 class="modal-header">Login</h1>

          <div class="input_form">
              <input type="email" name="email" placeholder="Email" class="input">
          </div>
          <div class="input_form">
              <input type="password" name="password" minlength="6" placeholder="Password" class="input input_password">
          </div>
          <div class="checkbox_form">
              <input name="checkbox" class="checkbox_input" id="checkbox" type="checkbox">
              <label class="checkbox_label" for="checkbox">Show password</label>
          </div>
          <button class="btn-login" type="submit">sign in</button>
          <div class="register">
              <a href="#">
                  Don't have an account? Sign Up
              </a>
          </div>
      </form>`
    return this.modal
  }

  addModalListener() {
    const login: HTMLElement | null = document.querySelector('.login')

    if (login) {
      login.addEventListener('click', () => {
        this.modal.classList.add('transition-open-modal')
        this.body.classList.add('no-scroll')
      })
      this.modal.addEventListener('animationend', (e) => {
        if (e.animationName === 'close-modal') {
          this.modal.classList.remove('open-modal')
          this.modal.classList.remove('transition-close-modal')
          this.body.classList.remove('no-scroll')
        } 
        if (e.animationName === 'open-modal') {
          this.modal.classList.add('open-modal')
          this.modal.classList.remove('transition-open-modal')
        }
      })
    }
    let forms = document.querySelectorAll('.input_form') as NodeListOf<Element>
    
    const checkbox = document.querySelector('#checkbox') as HTMLInputElement
    const password = document.querySelector('.input_password') as HTMLInputElement

    checkbox.addEventListener('click', () => {
      if (password.type === 'password') {
        password.type = 'text'
      } else {
        password.type = 'password'
      }
    })
    
    const form = document.querySelector('.modal') as HTMLFormElement
    form.onsubmit = (ev) => {
      const temp = ev.target as HTMLElement

      console.log(temp.children);
      return false
    }
    this.modal.addEventListener('click', (ev) => {
      const temp = ev.target as HTMLElement
      if(temp.classList[0] === 'modal-overlay') {
        this.modal.classList.add('transition-close-modal')
      }      
    })

    const modalContainer = document.querySelector('.modal') as HTMLElement
    const signUp = document.querySelector('.register') as HTMLElement
    const btnLogin = document.querySelector('.btn-login') as HTMLButtonElement


    signUp.addEventListener('click', () => {
      if (forms.length === 2) {
        modalContainer.firstElementChild?.remove()
        const nameElement = document.createElement('div')
        nameElement.classList.add('input_form')
        nameElement.innerHTML = `<input id="name" type="text" name="name" placeholder="Name" class="input">`
        const titleElement = document.createElement('h1')
        titleElement.classList.add('modal-header')
        titleElement.innerText = `Register`
        modalContainer.prepend(titleElement,nameElement)
        signUp.innerHTML = `<a href=#>Do you have an account? Sign In<a>`
        btnLogin.textContent = 'SIGN UP'
      } else if (forms.length === 3) {
        modalContainer.firstElementChild?.remove()
        modalContainer.firstElementChild?.remove()
        const titleElement = document.createElement('h1')
        titleElement.classList.add('modal-header')
        titleElement.innerText = `Login`
        modalContainer.prepend(titleElement)
        signUp.innerHTML = `<a href=#>Don't have an account? Sign Up<a>`
        btnLogin.textContent = 'SIGN IN'

      }

      forms = document.querySelectorAll('.input_form') as NodeListOf<Element>
    })

  }

  render():void {
    this.body.append(this.createModalElement())
    this.addModalListener()    
  }
}
