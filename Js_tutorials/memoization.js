/*
<!---  Memoization   -->

<!-- It achive in normol js using ES6 and in react we can achive it using use memo hooks -->
<!-- It is generally use to reduce the time complixity for time consuming task by using cache -->

Follow : https://www.youtube.com/watch?v=oa0FJyHMuqg

*/

let sum = 0;
let cal = (n) => {
  for (i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.time();
console.log(cal(5));
console.timeEnd();
