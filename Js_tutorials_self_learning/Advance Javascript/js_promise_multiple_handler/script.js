// Multiple Handler Means p1.then() ,p1.then(), p1.then() again

let p1 = new Promise((resolve, reject) => {
  console.log("Hey I am not resolved");
  setTimeout(function () {
    resolve(1);
  }, 3000);
});

// Promise Chaning
p1.then(() => {
  console.log("congurate resolved the promises 12");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(4);
    }, 6000);
  }).then((value) => {
    console.log(value);
  });
});

p1.then(() => {
  console.log("congurate resolved the promises 1");
});

p1.catch(() => {
  console.log("Error..");
});

// p1.then(() => {
//   console.log("Hurry...");
// });
