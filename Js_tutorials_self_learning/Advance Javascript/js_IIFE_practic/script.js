// IIFE:-    Immediately Invoked Async Function Expression

//##  =========== Syntax ================ ##

// (async () => {
//    put your code Here...
// })();

//##  =========================== ##

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(446);
  }, 4000);
});

// const fun = async () => {
//   let a = await p;
//   console.log(a);
//   let b = await p;
//   console.log(b);
//   let c = await p;
//   console.log(c);
// };

// fun();

// Here you require to call the function ok
// But we are going to convert it into IIFE we do not need to call that function

(fun = async () => {
  let a = await p;
  console.log(a);
  let b = await p;
  console.log(b);
  let c = await p;
  console.log(c);
})();

// release the var a, var b, var c
// it release the memory for out side the block of code means
// after execution of code is end the code it release the memory
