const main = document.querySelector('.main');
main.addEventListener('click', toggleOpen);

function toggleOpen() {
  const magLine = document.querySelector('.magnifier line');
  const input = document.querySelector('input');
  if (main.classList.contains('open')) {
    main.classList.remove('open');
    //magLine.style.display = 'initial';
    input.blur() //removes focus
    input.value = '';
  } else {
    main.classList.add('open');
    //magLine.style.display = 'none';
    input.focus() //adds focus
  }
}
