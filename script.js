let width = document.getElementById('width');
let height = document.getElementById('height');
let borderRadius = document.getElementById('borderRadius');
let color = document.getElementById('color');
let reset = document.getElementById('reset');
let tringle = document.querySelector('.tringle');

width.addEventListener('keypress', () => {
  tringle.style.width = width.value + 'px';
});
height.addEventListener('keypress', () => {
  tringle.style.height = height.value + 'px';
});
borderRadius.addEventListener('keypress', () => {
  tringle.style.borderRadius = borderRadius.value + 'px';
});
color.addEventListener('input', () => {
  tringle.style.backgroundColor = `${color.value}`;
});

reset.addEventListener('click', () => {
  tringle.style.backgroundColor = 'blue';
  tringle.style.width = '30vw';
  tringle.style.height = '40vw';
  tringle.style.borderRadius = '0px';
});
