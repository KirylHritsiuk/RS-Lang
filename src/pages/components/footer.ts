import '../../style/footer.css';
import { team, ITeam } from './dataPageMain';

export class Footer {
  protected container: HTMLElement;

  static TextOject = {
    footerClassName: 'footer',
    nameLinkClassName: 'link-person',
    nameFooterContent: 'footer-wrapper',
    textFooterContent: 'footer-link text',
  };

  static createFooter(data: HTMLDivElement) {
    const container = document.createElement('div');
    container.className = Footer.TextOject.nameFooterContent;
    container.insertAdjacentHTML('afterbegin', '<a href="https://rs.school/js/"><img class="rss__logo"src="./assets/svg/rs_school_js.svg" alt="rs"></a>');
    container.append(data);
    container.insertAdjacentHTML('beforeend', '<div class="footer-text"><span class="text">© 2022</span></div>');
    return container;
  }

  static renderLink() {
    const container = document.createElement('div');
    container.className = Footer.TextOject.nameLinkClassName;
    team.forEach((el) => container.append(Footer.createLink(el)));
    return container;
  }

  static createLink(data: ITeam) {
    const link = document.createElement('a');
    link.className = Footer.TextOject.textFooterContent;
    link.href = data.github;
    link.textContent = data.nickName;
    return link;
  }

  constructor() {
    this.container = <HTMLDivElement>document.createElement('footer');
    this.container.className = Footer.TextOject.footerClassName;
  }

  render() {
    this.container.append(Footer.createFooter(Footer.renderLink()));
    return this.container;
  }
}
