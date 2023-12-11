//querySelector
let button = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');
//eventListener 이벤트 핸들러
/* => 본인들만의 객체를 가지고 있다.
  click : 객체, scroll : 객체
  그들 객체만의 메서드를 사용할 수 있다.
*/
// Node.addEventListener..

/* global gsap */
let isOpend = false;

function handleMenu(e) {
  //preventDefault
  e.preventDefault();

  // menu.classList.toggle('is--active');
  //classList
  /* if (menu.classList.contains('is--active')) {
    // 메뉴의 클래스를 삭제한다. is--active
    menu.classList.remove('is--active');
  } else {
    // 메뉴에게 클래스를 넣어준다. is--active
    menu.classList.add('is--active');
  } */

  /*   if (!isOpend) {
    menu.classList.add('is--active');
  } else {
    menu.classList.remove('is--active');
  }
  isOpend = !isOpend; */
  if (!isOpend) {
    menu.classList.add('is--active');
    gsap.from('li', {
      x: 30,
      opacity: 0,
      stagger: 0.2,
      onComplete() {
        console.log('end');
      },
    });
  } else {
    menu.classList.remove('is--active');
    gsap.set('li', { x: 0, opacity: 1 });
  }
  isOpend = !isOpend;
}

button.addEventListener('click', handleMenu);
