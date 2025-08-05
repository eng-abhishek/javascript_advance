// nn bb ss u

let a = null;
let b = 124;
let c = true;
let d = BigInt(123) + BigInt(5);
let e = Symbol("I am hello");
let f = "Hello";
let g = undefined;

console.log(a, b, c, d, e, f, g);

console.log("Type of a is == " + typeof a);

const obj1 = {
  name: "Abhi",
  Age: 29,
  Email: "abhi@gmail.com",
  Address: "KIPM",
};

console.log(obj1.name);
console.log(obj1.Age);
// OR
console.log(obj1["Email"]);
console.log(obj1["Address"]);
