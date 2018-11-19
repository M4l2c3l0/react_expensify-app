const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Any message?');
    // reject('Oopsy!');
  }, 3000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 3000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');