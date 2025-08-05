let a = 10;
if (a == 1) {
  console.log("this is 1");
} else if (a == 5) {
  console.log("5");
} else if (a == 10) {
  console.log("this is 10");
}

let b = "20";
b = Number.parseInt(b); // convert string into a number
console.log(b + typeof +" " + b);

// ternary operator
let age = 10;

console.log(age >= 18 ? "Drive" : "Not Drive");
