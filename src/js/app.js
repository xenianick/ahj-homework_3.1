import changePlace from './changePlace.js';
import showModal from './showModal.js';

const body = document.querySelector('body');
const fieldEl = document.createElement('div');
fieldEl.className = 'field';
body.insertBefore(fieldEl, body.firstChild);

const icon = document.createElement('img');
icon.className = 'icon';
icon.src = './goblin.png';

const cellsQuantity = 16;

for (let i = 0; i < cellsQuantity; i += 1) {
  fieldEl.innerHTML += '<div class="cell"></div>';
}

const pointsContainerEl = document.createElement('div');
pointsContainerEl.className = 'points-container';

const scoresEl = document.createElement('div');
scoresEl.className = 'scores';
let scores = 0;
scoresEl.innerHTML = `<p>Поймано: ${scores}</p>`;

const missesEl = document.createElement('div');
missesEl.className = 'misses';
let misses = 0;
missesEl.innerHTML = `<p>Пропущено: ${misses}</p>`;

pointsContainerEl.appendChild(scoresEl);
pointsContainerEl.appendChild(missesEl);
body.insertBefore(pointsContainerEl, body.lastChild);

let isClicked = false;

function countMisses() {
  if (isClicked) {
    isClicked = false;
    return;
  }
  misses += 1;
  missesEl.innerHTML = `<p>Пропущено: ${misses}</p>`;
  if (misses >= 5) {
    clearTimeout(timerId);
    showModal('Вы проиграли &#128531', 'Жалко', body);
  }
}

changePlace(icon, cellsQuantity, fieldEl);
setInterval(changePlace, 1000, icon, cellsQuantity, fieldEl);
const timerId = setInterval(countMisses, 1000);

const cells = Array.from(fieldEl.querySelectorAll('.cell'));
cells.forEach((item) => {
  item.addEventListener('click', () => {
    if (icon.closest('.cell') === item) {
      isClicked = true;
      scores += 1;
      scoresEl.innerHTML = `<p>Поймано: ${scores}</p>`;
      if (scores >= 5) {
        clearTimeout(timerId);
        showModal('Победа! &#127881;', 'Ну и отлично', body);
      }
    }
  });
});
