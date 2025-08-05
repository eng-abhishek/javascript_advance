let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("I am promise p1");
      resolve("p1");
    }, 1000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("I am promise p2");
      resolve("p2");
    }, 2000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("I am promise p3");
      resolve("p3");
    }, 3000);
  });
};

// let pro = Promise.all([p1, p2, p3]);
// console.log(pro);
const run = async () => {
  // This approch take time
  // let a1 = await p1();
  // let a2 = await p2();
  // let a3 = await p3();
  // console.time("run");
  // console.log(a1, a2, a3);
  // console.timeEnd("run");

  // Using promise.all it will take less time
  console.time("run");
  let a1 = await p1();
  let a2 = await p2();
  let a3 = await p3();

  let promise_all = await Promise.all([a1, a2, a3]);
  console.log(promise_all);
  console.timeEnd("run");
};

run();
