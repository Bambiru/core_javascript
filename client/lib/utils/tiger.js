const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};
/* -------------------------------------------------------------------------- */
/*                                    fetch                                   */
/* -------------------------------------------------------------------------- */
/* fetch는 url을 따로 받는다. body에 전달할때에는 stringify가 필요하다. */
export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  /* response 객체가 나와서 담기게 된다. 우리가 원하는 데이터를 가지고 있다. */
  const response = await fetch(url, restOptions);

  // console.log(response);

  if (response.ok) {
    /* json()을 하면 또 프라미스 객체가 나온다. */
    response.data = await response.json();
  }
  return response;
};
// const user = await tiger({ url: END_POINT });
// console.log(user.data);

//tiger.get()
//tiger.post()
//tiger.put()
//tiger.delete()

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// tiger.get('www.naver.com',{})
