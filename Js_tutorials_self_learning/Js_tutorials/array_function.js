//Map function
// It will return new array
// let arr1 = num.map((value, index, array) => {
//   return value + 1;
//   //console.log(index + " => " + value);
//   //console.log(array);
// });
// console.log(arr1);

// Array filter function

arr_filter = [44, 10, 30, 1, 5, 9, 12, 13];
let new_filter_array = arr_filter.filter((value) => {
  return value > 10;
});
console.log(new_filter_array);

// Array Reduse method
arr_reduce = [1, 2, 3, 4, 5];
let new_arr_reduce = arr_reduce.reduce((a1, a2) => {
  return a1 + a2;
});
console.log(new_arr_reduce);

/* NOTE: Map Filter & Reduse Is a Mordon consecpt */
