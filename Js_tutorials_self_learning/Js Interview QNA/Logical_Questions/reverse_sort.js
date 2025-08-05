// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let arr = [10, 12, 11, 9, 8, 5];
let temp = "";
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);
