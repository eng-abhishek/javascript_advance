// try {
//   console.log(a);
//   console.log("I am a try block");
// } catch (err) {
//   console.log(c);
//   console.log("I am a catch block");
// } finally {
//   console.log("I am a finally done."); // this case only run finally clause bcz in try
//   //  and catch block gives error
// }

// console.log("I am a simple block..");

const f = () => {
  try {
    // console.log(a);
    console.log("I am a try block");
    return;
  } catch (err) {
    console.log(c);
    console.log("I am a catch block");
  } finally {
    console.log("I am a finally done."); // this case only run finally clause bcz in try
    //  and catch block gives error
  }
};

f();

console.log("I am a simple block..");
