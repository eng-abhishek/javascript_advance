let arr = [20, 30, 40, 60, 70, 80, 90, 10];
let even_arr = [];
let odd_arr = [];

for (i = 0; i < arr.length; i++) {
  if (arr % 2 == 0) {
    even_arr.push(arr[i]);
  } else {
    odd_arr.push(arr[i]);
  }
}

console.log(even_arr);

console.log(odd_arr);
