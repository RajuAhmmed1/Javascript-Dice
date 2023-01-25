const Player_1 = document.querySelector('#player_1');
const Player_2 = document.querySelector('#player_2');
const player_1_total = document.querySelector('#player_1_total_score');
const player_2_total = document.querySelector('#player_2_total_score');
const player_1_current = document.querySelector('#player_1_current');
const player_2_current = document.querySelector('#player_2_current');
// const active = document.querySelector('.active');
const dice = document.querySelector('.rolling');
const diceValue = document.querySelector('.dice_value');
const holdGame = document.querySelector('.hold');
const inactive = document.querySelector('.inactive');

player_1_total.textContent = 0;
player_2_total.textContent = 0;
player_2_current.textContent = 0;
player_1_current.textContent = 0;
let sum = 0;
let active = 1;
let current = 0;
let ia = 0,
  ib = 0;
let pa = 0,
  pb = 0;
const back = document.querySelector(`#player_${active}`);
const win_score = 100;

dice.addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceValue.value = randomNumber;
  console.log(active);

  // player_`${active}`.classList.remove('inactive');

  if (randomNumber !== 1) {
    sum += randomNumber;
    // back.classList.remove('inactive');
    current = document.getElementById(`player_${active}_current`).textContent =
      Number(sum);
  } else {
    // back.classList.add('inactive');
    sum = 0;
    // diceValue.value = 0;
    document.getElementById(`player_${active}_current`).textContent = 0;
    active = active === 1 ? 2 : 1;
  }
});

holdGame.addEventListener('click', function () {
  const temp = (document.getElementById(
    `player_${active}_current`
  ).textContent = Number(sum));
  if (active == 1) {
    pa = document.getElementById(`player_${active}_total_score`).textContent =
      temp;
    pb += pa;
    console.log(`this is p1 ${pb}`);
    document.getElementById(`player_${active}_total_score`).textContent = pb;
    if (pb >= 100) {
      alert('Player One is win');
      player_1_total.textContent = 0;
      player_2_total.textContent = 0;
      player_2_current.textContent = 0;
      player_1_current.textContent = 0;
    }
  } else {
    ia = document.getElementById(`player_${active}_total_score`).textContent =
      temp;
    ib += ia;
    console.log(`this is p2 ${ib}`);
    document.getElementById(`player_${active}_total_score`).textContent = ib;
    if (ib >= 100) {
      alert('Player Two is win');
      player_1_total.textContent = 0;
      player_2_total.textContent = 0;
      player_2_current.textContent = 0;
      player_1_current.textContent = 0;
    }
  }

  diceValue.value = 0;
  sum = 0;
  document.getElementById(`player_${active}_current`).textContent = 0;

  active = active == 1 ? 2 : 1;
});
