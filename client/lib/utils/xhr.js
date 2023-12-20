/* 

[readyState]

0: uninitialized
1: loading
2: loaded : open()이 준비된 상태
3: interactive
4: complete

*/

/* -------------------------------------------------------------------------- */
/*                                XHR callback                                */
/* -------------------------------------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // 권한 요청,
  },
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });
  /* state가 바뀔때마다 호출이 되는 이벤트이다. */
  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      console.log('통신완료');

      if (status >= 200 && status < 400) {
        // console.log(response); // string으로 받아온다.
        onSuccess(JSON.parse(response)); // 배열데이터로 바꿔준다. 문자로 바꿔주는 것은 stringify를 사용한다.
      } else {
        onFail({ message: '에러가 발생했습니다' });
      }
    }
  });

  xhr.send(JSON.stringify(body)); // POST 통신 시 필요하다.
}
// xhr({
//   method: 'POST',
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(data) {
//     console.log(data);
//   },
//   onFail({ message }) {
//     console.log(message);
//   },
//   body: { name: 'tiger' },
// });

xhr.get = (url, onSuccess, onFail) => xhr({ url, onSuccess, onFail });

xhr.post = (url, body, onSuccess, onFail) =>
  xhr({ method: 'POST', url, body, onSuccess, onFail });
xhr.put = (url, body, onSuccess, onFail) =>
  xhr({ method: 'PUT', url, body, onSuccess, onFail });

xhr.delete = (url, onSuccess, onFail) =>
  xhr({ method: 'DELETE', url, onSuccess, onFail });

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users',
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* -------------------------------------------------------------------------- */
/*                               XHR Promise API                              */
/* -------------------------------------------------------------------------- */

const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  const { method, url, body, headers, errorMessage } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(({ key, value }) => {
    xhr.setRequestHeader(key, value);
  });
  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}
// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   console.log(res);
// });

xhrPromise.get = (url) => {
  return xhrPromise({ url });
};
xhrPromise.post = (url, body) => {
  return xhrPromise({ url, body, method: 'POST' });
};
xhrPromise.put = (url, body) => {
  return xhrPromise({ url, body, method: 'PUT' });
};
xhrPromise.delete = (url) => {
  return xhrPromise({ url, method: 'DELETE' });
};
