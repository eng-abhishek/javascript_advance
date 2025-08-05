let p1 = new Promise((reject, resolve) => {
  setTimeout(function () {
    console.log("Hello");
    resolve(56);
  }, 3000);
});

p1.then((value) => {
  console.log(value);
});
