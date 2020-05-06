export default class Chat {
  constructor() {
    this.container = document.querySelector('.chat');
  }

  init() {
    this.container.innerHTML = `
        <div class="form invisable">
        <div class="form_header_wrapper">
            <span class="form_header">Напишите нам</span>
            <span class="form_close">&#10006;</span>
        </div>
            <textarea name="text" cols="30" rows="10"></textarea>
            <span class="form_btn">Отправить</span>
        </div>
        <div class="open_btn_wrapper">
            <span class="open_form_btn visable"></span>
        </div>`;

    this.form = document.querySelector('.form');
    this.openFormBtn = document.querySelector('.open_form_btn');
    this.closeFormBtn = document.querySelector('.form_close');

    this.openFormBtn.addEventListener('click', () => {
      this.openFormBtn.classList.remove('visable');
      this.openFormBtn.classList.add('invisable');
      this.form.classList.remove('invisable');
      this.form.classList.add('visable');
    });

    this.closeFormBtn.addEventListener('click', () => {
      this.openFormBtn.classList.remove('invisable');
      this.openFormBtn.classList.add('visable');
      this.form.classList.remove('visable');
      this.form.classList.add('invisable');
    });
  }
}
