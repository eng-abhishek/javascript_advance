//================ Simple Promise Example =======================//

// let p = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     // resolve(true);
//     // console.log("promise is fullfill with resolve");
//     reject(new Error("I am an error"));
//   }, 5000);
// });

// console.log(p);

//================ Two Promise Execute Parallel Example =======================//

// let p1 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     resolve(true);
//     console.log("promise is fullfill with resolve");
//   }, 5000);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("Promise is pending");
//   setTimeout(() => {
//     reject(new Error("I am an error"));
//   }, 5000);
// });

// console.log(p1);
// console.log(p2);

//======= When Promise Fullfill After This If You Need To Do Some Other Task ======//

let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    resolve(true);
    console.log("promise is fullfill with resolve");
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    reject(new Error("I am an error"));
  }, 5000);
});

// p1.then() is used to get the value of promise
p1.then((value) => {
  console.log(p1);
});

// p2.catch() is used to catch the error message
p2.catch((value) => {
  console.log(p2);
});

// console.log(p1);
// console.log(p2);

//======= In .then() you can get value and error both ======//

let p3 = new Promise((resolve, reject) => {
  console.log("p3 Promise is pending");
  setTimeout(() => {
    //resolve(true);
    //console.log("p3 promise is fullfill with resolve");
    reject(new Error("I am an p3 error"));
  }, 5000);
});

p3.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
