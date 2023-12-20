/* 

[readyState]

0: uninitialized
1: loading
2: loaded : open()이 준비된 상태
3: interactive
4: complete

*/

function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
} = {}) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

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

  xhr.send(); // POST 통신 시 필요하다.
}
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess(data) {
    console.log(data);
  },
  onFail({ message }) {
    console.log(message);
  },
});
