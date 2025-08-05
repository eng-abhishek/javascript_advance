// let a = 20;
// {
//   console.log(a);
// }
// it is working

// {
//   console.log(a);
// }
// let a = 20;
// it is working

//######  let have a block label scope   #######
// {
//   let a = 20;
// }
// console.log(a);
// Throw error a is not define

//###### var have a global scope   #######
// {
//   var a = 20;
// }
// console.log(a);

//####### function scope #########
let p = 9;
function ax() {
  let a = 8;
  console.log(p);
}
ax();
console.log(p);
// show the value of p

console.log(a);
// get an error undefile a variable

// ================================

// console.log(a);
// let a;

// throw an errors
// ===============================

// ============ In Case Of Let ====================

// let a;
// console.log(a);
// return a is undefine

// ===============================

//============ In case of Const =============

// const a;
// console.log(a);
// Throw error const a need to initialize value

// const a = 10;
// console.log(a);
// Run successfully....

// ===============================
