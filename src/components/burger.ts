import { btnBurger, nawWrapper, icon, modal, containerUL, burgerWrapper, svgBurger, spanRs, body } from './../components/dataPageMain'

export function burger() {
    const windowInnerWidth = window.innerWidth;
    // console.log(windowInnerWidth)
    if(windowInnerWidth > 1140){
    btnBurger.addEventListener('click', e => {
        if (btnBurger.className === 'plase-burger') {
            nawWrapper.classList.add('scroll')
            icon.innerHTML = ''
            icon.innerHTML = `<path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
      </path>`
            btnBurger.classList.add('a')
        } else {
            nawWrapper.classList.remove('scroll')
            icon.innerHTML = ''
            icon.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>'
            btnBurger.classList.remove('a')
        }
    })
}else{
    btnBurger.addEventListener('click', e => {
        if (btnBurger.className === 'plase-burger') {
            nawWrapper.classList.add('scroll-modal')
            icon.innerHTML = ''
            icon.innerHTML = `<path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
      </path>`
            btnBurger.classList.add('a');
            modal.classList.remove('hide');
            burgerWrapper.style.backgroundColor = "#474965";
            containerUL.style.display = 'block';
            containerUL.style.backgroundColor = "#474965";
            svgBurger.style.fill = "#C4C4C4";
            spanRs.style.display = "block"
            spanRs.style.color = "#C4C4C4"
            body.style.overflow = "hidden"
            nawWrapper.style.height = "100%"
            nawWrapper.style.backgroundColor = "#474965";
        } else {
            modal.classList.add('hide')
            nawWrapper.classList.remove('scroll-modal')
            // nawWrapper.classList.add('scroll-modal-end')
            icon.innerHTML = ''
            icon.innerHTML = '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>'
            btnBurger.classList.remove('a');
            burgerWrapper.style.backgroundColor = "white";
            containerUL.style.display = 'none';
            containerUL.style.backgroundColor = "white";
            svgBurger.style.fill = " black";
            spanRs.style.display = "none"
            body.style.overflow = "visible"
            // nawWrapper.style.height = "50px"
            nawWrapper.style.backgroundColor = "white";
        }
    })

}
}
