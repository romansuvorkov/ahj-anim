export default class Liker {
  constructor() {
    this.container = document.querySelector('.liker');
  }

  init() {
    this.container.innerHTML = `
        <div class="heart_container"></div>
        <span class="liker_btn" onmousedown="return false">Like</span>
        `;
    this.heartContainer = document.querySelector('.heart_container');
    this.button = document.querySelector('.liker_btn');
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      const randomIndex = Math.floor(Math.random() * 4) + 1;
      const heart = document.createElement('img');
      heart.src = './img/heart.png';
      heart.classList.add('heart');
      heart.style.animationName = `heart${randomIndex}`;
      this.heartContainer.appendChild(heart);
      heart.addEventListener('animationend', () => {
        this.heartContainer.removeChild(heart);
      });
    });
  }
}
