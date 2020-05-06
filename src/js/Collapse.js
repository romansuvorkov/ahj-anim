export default class Collapse {
  constructor() {
    this.container = document.querySelector('.collapse');
  }

  init() {
    const button = document.createElement('span');
    button.classList.add('collapse_btn');
    button.innerText = 'Collapse';
    const textWrapper = document.createElement('div');
    const text = document.createElement('p');
    text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    textWrapper.classList.add('collapse_text');
    textWrapper.appendChild(text);
    this.container.appendChild(button);
    this.container.appendChild(textWrapper);
    this.collapseText = document.querySelector('.collapse_text');
    this.collapseBtn = document.querySelector('.collapse_btn');
    this.collapseBtn.addEventListener('click', () => {
      this.collapseText.classList.toggle('appear');
    });
  }
}
