import { insertLast, xhrPromise } from './lib/index.js';

xhrPromise.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  res.forEach((item) => {
    // insertLast(document.body, `<div>${item.name}</div>`);
  });
});
