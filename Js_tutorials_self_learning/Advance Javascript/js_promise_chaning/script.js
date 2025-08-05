let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Hello");
    resolve(56);
  }, 2000);
});

p1.then((value) => {
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise");
    }, 2000);
  });

  return p2;
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we are done...");
        resolve("4");
      }, 2000);
    });
  })
  .then((value) => {
    console.log("we are done with all..");
  });
