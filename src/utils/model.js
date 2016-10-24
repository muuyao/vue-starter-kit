import 'isomorphic-fetch';

// 实现 fetch timeout
function fetchTimeout(fetchPromise, timeout) {
  let abortFunc = null;

  // 这是一个可以被reject的promise
  const timeoutPromise = new Promise((resolve, reject) => {
    abortFunc = () => reject('abort promise');
  });

  // 这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  const abortablePromise = Promise.race([
    fetchPromise,
    timeoutPromise
  ]);

  setTimeout(() => {
    abortFunc();
  }, timeout);

  return abortablePromise;
}

const model = {
  fetch(url, options, timeout = 10000) {
    return fetchTimeout(fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      ...options
    }), timeout)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }

        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then(response => response.json())
      .then((data) => {
        console.log('response', data);
      })
      .catch((error) => {
        console.log('resuest failed', error);
      });
  }
};

export default model;
