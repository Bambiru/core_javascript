/* global gsap */

import {
  tiger,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  delayP,
  renderEmptyCard,
  clearContents,
} from './lib/index.js';

// xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//   res.forEach((item) => {
//     // insertLast(document.body, `<div>${item.name}</div>`);
//   });
// });

// [phase-1]
// 1. user 데이터를 fetch 해주세요
// 2.
const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP(500);
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    const response = await tiger.get(END_POINT);
    const userData = response.data;

    userData.forEach((user) => renderUserCard(userCardInner, user));
    changeColor('.user-card');

    gsap.from('.user-card', {
      x: 100,
      opacity: 0,
      stagger: 0.1 /* {
      from: 'end',
      // each: 0.1,
      amount: 2,
      ease: 'power2.inOut',
    }, */,
    });
  } catch (err) {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();
/* 이벤트핸들러 앞에는 비동기를 하지않는다 */
function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  const id = article.dataset.index.slice(5);

  tiger.delete(`${END_POINT}/${id}`).then(() => {
    clearContents(userCardInner);
    renderUserList();
  });
}
userCardInner.addEventListener('click', handleDelete);

const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');

function handleCreate() {
  gsap.to('.pop', { autoAlpha: 1 });
}
function handleCancel(e) {
  e.stopPropagation();
  gsap.to('.pop', { autoAlpha: 0 });
}
function handleDone(e) {
  e.preventDefault();

  const name = $('#nameField').value;
  const email = $('#emailField').value;
  const website = $('#siteField').value;

  const obj = { name, email, website };

  tiger.post(END_POINT, obj).then(() => {
    clearContents(userCardInner);
    renderUserList();
    gsap.to('.pop', { autoAlpha: 0 });
  });
}
createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('click', handleDone);
