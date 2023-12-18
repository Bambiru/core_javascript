/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode('nav');
function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');
  if (!li) return;
  let dataname = attr(li, 'data-name');

  /* 클래스를 사용한 위임 ---------------- */
  // if (li.className === 'home') li.style.background = 'orange';

  /* 속성을 사용한 위임 ------------------ */
  // if (li.dataset.name === 'contact') li.style.background = 'dodgerblue';
  if (dataname === 'about') li.style.background = 'hotpink';
  if (dataname === 'home') li.style.background = 'greenyellow';
  if (dataname === 'contact') li.style.background = 'dodgerblue';

  /* 노드를 사용한 위임 ------------------ */
}
nav.addEventListener('click', handleClick);
