/* global gsap */
const list = document.querySelectorAll('li');
const depth = document.querySelectorAll('.depth');
const nav = document.querySelector('nav');

const height = [100, 200, 300];

/* 반복을 돌려서 이벤트를 한 번에 바인딩시키기 */

list.forEach((li, i) => {
  li.addEventListener('mouseenter', (e) => {
    let currentDepth = e.target.lastElementChild;

    // depth.forEach((item) => item.style.height = 0);
    gsap.set(depth, { height: 0 });

    // currentDepth.style.height = '100px';
    gsap.to(currentDepth, {
      height: height[i],
      ease: 'power3.inOut',
    });
  });
});

nav.addEventListener('mouseleave', () => {
  // depth.forEach((item) => item.style.height = 0);
  gsap.set(depth, { height: 0 });
});
