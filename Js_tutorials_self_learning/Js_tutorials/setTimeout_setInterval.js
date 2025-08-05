// setTimeout clearTimeout setInterval clearInterval

// const sum = (a, b, c) => {
//   console.log("I am sum of", a + b + c);
// };
// let time = setTimeout(sum, 1000, 1, 2, 3);
// clearTimeout(time);

let interval = setInterval(function () {
  console.log("Hello how are you");
}, 10);

let i = 5;
while (i > 0) {
  if (i == 2) {
    console.log("Hello");
    clearInterval(interval);
  }
  i--;
}
