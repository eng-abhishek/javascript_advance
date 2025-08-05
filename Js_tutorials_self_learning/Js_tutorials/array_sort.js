arr = [1, 3, 4, 2, 5, 6, 114, 225, 314];
arr.sort(); // modify original array it sort it in alphabitical order
console.log(arr);
// o/p is [1, 114, 2, 225, 3, 4, 5, 6]
// so the question is that who can we sort it

let compair = (a, b) => {
  return a - b;
};

arr1 = [1, 3, 4, 2, 5, 6, 114, 225, 314];
arr1.sort(compair);

console.log(arr1);
// Now you get sorted array
//   1,   2,   3,   4, 5, 6, 114, 225, 314;
