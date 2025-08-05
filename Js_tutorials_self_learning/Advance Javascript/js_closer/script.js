// Function + Its Lexical Environment
// In closer you get function with his lexical environment

// First Level

// message = "Good Morning";
// function hello() {
//   console.log("message is:" + message);
// }
// hello();

// Second Level
// message = "Good Global";
// function hello() {
//   let message = "Good Morning";
//   {
//     let message = "Good Afternoon";
//     console.log("second level message 1:" + message);
//   }
//   console.log("second level message 2:" + message);
// }

// hello();

// Third Level
// message = "Good Global";
// function hello() {
//   let message = "Good Morning";
//   {
//     let message = "Good Afternoon";
//     console.log("second level message 1:" + message);
//   }
//   let c = function hello2() {
//     console.log("I am inner function :" + message);
//   };
//   return c; // return hello2 function with his lexical environment
//   // console.log("second level message 2:" + message);
// }

// let v = hello();
// v();

// Fourth Level make it simple

// message = "Good Global";
// function hello() {
//   let message = "Good Morning";
//   let c = function hello2() {
//     console.log("I am inner function :" + message);
//   };
//   return c; // return hello2 function with his lexical environment
//   // console.log("second level message 2:" + message);
// }

// let v = hello();
// v();

// Fivth Level Example
// function init() {
//   var name = "Mozilla";
//   function display() {
//     console.log(name);
//   }
//   display();
// }
// init();

// Six Level
// function init() {
//   var name = "Mozilla";
//   function display() {
//     console.log(name);
//   }
//   return display;
// }
// c = init();
// c();

// Seven Level

// const x = () => {
//   let a = 1;
//   console.log(a);

//   const y = () => {
//     let a = 2;
//     console.log(a);

//     const z = () => {
//       let a = 3;
//       console.log(a);
//     };
//   };
//   y();
// };

// x();

// Eight Level

// const x = () => {
//   let a = 1;
//   console.log(a);

//   const y = () => {
//     let a = 2;
//     console.log(a);

//     const z = () => {
//       let a = 3;
//       console.log(a);
//     };
//     z();
//   };
//   y();
// };
// x();
// o/p 1,2,3 hoga

// Now comming the interesting Things

function fun1() {
  const x = () => {
    let a = 1;
    console.log(a);

    const y = () => {
      // let a = 2;
      console.log(a);

      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  return x;
}

let innerfunction = fun1();
innerfunction();
