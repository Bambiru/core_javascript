// 피보나치 메모이제이션
// 나 이거 저장해놓고 필요할때 가져다 쓸래 ~~~

/* 전역상태관리같은 개념 */

export const memo = (() => {
  const cache = {
    // key : value
  };

  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key} 안에는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();
