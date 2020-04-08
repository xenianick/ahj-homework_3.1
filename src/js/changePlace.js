import getRandom from './getRandom.js';

export default function changePlace(pic, numberOfCells, gamefield) {
  const cells = Array.from(gamefield.querySelectorAll('.cell'));
  const index = getRandom(0, numberOfCells);
  const iconShown = gamefield.querySelector('.icon');
  if (iconShown) {
    iconShown.outerHTML = '';
  }
  cells[index].appendChild(pic);
}
