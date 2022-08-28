import { User } from '../../modules/user'
export class Modal {
  protected modal: HTMLDivElement;
  protected body: HTMLElement;
  user: User
  protected name: string
  protected password: string
  protected email: string

  constructor () {
    this.modal = document.createElement('div')
    this.body = document.querySelector('.body')!
    this.modal.className = 'modal-overlay'
    this.name = ''
    this.password = ''
    this.email = ''
    this.user = new User()
  }

  protected createModalElement() {
    this.modal.innerHTML = `
      <form class="modal" action="" novalidate>
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
          <button class="btn-login" type="submit">sign in</button>
          <div class="register">
              <a href="#">
                  Don't have an account? Sign Up
              </a>
          </div>
      </form>`
    return this.modal
  }

  errorMesssageInModal(message: string, mess: string) {
    if (message === 'open') {
      const err: HTMLElement | null = document.querySelector('.error-message-modal')
      if (!err) {
        const btnModal = document.querySelector('.btn-login') as HTMLButtonElement
        btnModal.insertAdjacentHTML('afterend', `
        <div class="error-message-modal" style="color:red;">${mess}</div>`
        )
      }
    } else {
      const errorMessage: HTMLElement | null = document.querySelector('.error-message-modal')
      if (errorMessage) {
        errorMessage.remove()
      }
    }
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
    let forms = document.querySelectorAll('.input_form') as NodeListOf<Element>
    let inputName: HTMLInputElement | null = document.querySelector('.input_name')
    let inputEmail = document.querySelector('.input_email') as HTMLInputElement
    let inputPassword = document.querySelector('.input_password') as HTMLInputElement

    const modalContainer = document.querySelector('.modal') as HTMLElement
    const signUp = document.querySelector('.register') as HTMLElement
    const btnLogin = document.querySelector('.btn-login') as HTMLButtonElement

    form.onsubmit = async (ev) => {
      ev.preventDefault()
      const temp = ev.target as HTMLElement
      let emailVal = inputEmail.value
      let passwordVal = inputPassword.value
      let nameVal = null
      if (inputName) {
        nameVal = inputName.value
        if (nameVal === '') {
          inputName.classList.add('error')
          this.name = nameVal
        } else {
          inputName.classList.remove('error')
          this.name = nameVal
        }
      }
      
      if (emailVal === '') {
        inputEmail.classList.add('error')
      } else {
        inputEmail.classList.remove('error')
        this.email = emailVal
      }
      if (passwordVal === '') {
        inputPassword.classList.add('error')
      } else {
        inputPassword.classList.remove('error')
        this.password = passwordVal
      }
      if (btnLogin.textContent === 'sign up') {
        const newUser = this.user.registerUser({
          email: this.email,
          name: this.name,
          password: this.password,
        })
        newUser.then(data => {
          if (data) {
            this.errorMesssageInModal('del', '')
            this.modal.classList.add('transition-close-modal')
          } else {
            this.errorMesssageInModal('open', 'user email already exists')
          }
        })
      }
      if (btnLogin.textContent === 'sign in') {
        const loginUser = this.user.loginUser({
          email: this.email,
          password: this.password,
        })
        loginUser.then(data => {          
          if (data.message === 'Authenticated') {
            this.errorMesssageInModal('del', '')
            this.modal.classList.add('transition-close-modal')
          } else {
            this.errorMesssageInModal('open', data.message)
          }
        })
      }
    }
    this.modal.addEventListener('click', (ev) => {
      const temp = ev.target as HTMLElement
      if(temp.classList[0] === 'modal-overlay') {
        this.modal.classList.add('transition-close-modal')
      }      
    })

    signUp.addEventListener('click', () => {      
      if (forms.length === 2) {
        modalContainer.firstElementChild?.remove()
        const nameElement = document.createElement('div')
        nameElement.classList.add('input_form')
        nameElement.innerHTML = `<input id="name" type="text" value="" name="name" placeholder="Name" class="input input_name">`
        const titleElement = document.createElement('h1')
        titleElement.classList.add('modal-header')
        titleElement.innerText = `Register`
        modalContainer.prepend(titleElement,nameElement)
        signUp.innerHTML = `<a href=#>Do you have an account? Sign In<a>`
        btnLogin.textContent = 'sign up'
        inputName = document.querySelector('.input_name')
        
      } else if (forms.length === 3) {
        modalContainer.firstElementChild?.remove()
        modalContainer.firstElementChild?.remove()
        const titleElement = document.createElement('h1')
        titleElement.classList.add('modal-header')
        titleElement.innerText = `Login`
        modalContainer.prepend(titleElement)
        signUp.innerHTML = `<a href=#>Don't have an account? Sign Up<a>`
        btnLogin.textContent = 'sign in'
        inputName = null        
      }
      forms = document.querySelectorAll('.input_form') as NodeListOf<Element>
    })
  }

  render():void {
    this.body.append(this.createModalElement())
    this.addModalListener()    
  }
}
