import {
  main, btnBurger, nawWrapper, icon, modal, containerUL, svgBurger, spanRs, allLi, exit,

} from '../components/dataPageMain';

class Burger {
  closeSmallBurger() {
    modal.classList.add('hide');
    icon.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>';
    btnBurger.classList.remove('a');

    setTimeout(() => {
      containerUL.style.display = 'none';
    }, 500);
    svgBurger.style.fill = ' black';
    nawWrapper.style.backgroundColor = 'white';
    nawWrapper.classList.remove('scroll');
    exit.style.display = 'none';
    document.body.style.overflow = 'scroll';
  }

  controlBurger() {
    exit.onclick = () => location.reload();

    allLi.forEach((e) => {
      e.addEventListener('click', (e) => {
        const target = <HTMLElement>(e.currentTarget);
        const dark = <HTMLElement>document.querySelector('.dark-burger');
        dark.classList.remove('dark-burger');
        if (target.className === 'li-wrapper') {
          target.classList.add('dark-burger');
        }
      });
    });

    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 800) {
      btnBurger.addEventListener('click', () => {
        if (btnBurger.className === 'plase-burger') {
          nawWrapper.classList.add('scroll');
          icon.innerHTML = `<path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                        </path>`;
          btnBurger.classList.add('a');
        } else {
          nawWrapper.classList.remove('scroll');
          icon.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>';
          btnBurger.classList.remove('a');
        }
      });
    } else {
      btnBurger.addEventListener('click', () => {
        if (btnBurger.className === 'plase-burger') {
          icon.innerHTML = '';
          icon.innerHTML = `<path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                        </path>`;
          btnBurger.classList.add('a');
          modal.classList.remove('hide');
          containerUL.style.display = 'block';
          svgBurger.style.fill = '#C4C4C4';
          spanRs.style.display = 'block';
          nawWrapper.style.height = '100vh';
          nawWrapper.style.backgroundColor = '#474965';
          nawWrapper.classList.add('scroll');
          exit.style.display = 'flex';
          document.body.style.overflow = 'hidden';
        } else {
          this.closeSmallBurger();
        }
      });
    }

    modal.onclick = () => {
      this.closeSmallBurger();
    };
  }
}

export default new Burger();
