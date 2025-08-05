let p1 = new Promise((resolve, reject) => {
  console.log("This is first promise pending");
  setTimeout(() => {
    //resolve("p1");
    reject(new Error("Promise 2 gives an error"));
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p2");
    reject(new Error("Promise 2 gives an error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 3000);
});

// it will gives error at time of any promise is rejected
// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((value) => {
//   console.log(value);
// });

// it will gives status of promise also handle rejected promise
// let promise_all_settled = Promise.allSettled([p1, p2, p3]);
// promise_all_settled.then((value) => {
//   console.log(value);
// });

// it will return that promise which resolve first but if first resolved
//  promise gives an error then it will not handle it at that time need to use promise.any
// let promise_race = Promise.race([p1, p2, p3]);
// promise_race.then((value) => {
//   console.log(value);
// });

// it will return only resolve promise or you can say it wait for resolve promise
// let promise_any = Promise.any([p1, p2, p3]);
// promise_any.then((v) => {
//   console.log(v);
// });

//hold only resolve promise
// let promise_resolve = Promise.resolve(6);
// promise_resolve.then((v) => {
//   console.log(v);
// });

// hold only reject promise
// let promise_reject = Promise.reject(new Error("I am an error.."));
// promise_reject.then((v) => {
//   console.log(v);
// });
