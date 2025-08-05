// for finding array length array.length
let arr = [1, 2, 3, 4, 5, 6, "ram", "shyam", "rahim", true, false];
console.log(arr);
console.log(arr.length);
arr[11] = 80;
console.log(arr);

arr[1] = 66; // update array mutable
console.log(arr);

console.log(typeof arr); // array is a object

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
