let arr = [1, 2, 3, 4];
arr.toString();
console.log(arr + "....."); // o/p  1,2,3,4.....
// join method
let join_arr = arr.join("_"); // you can put any thing on place of _ or And
console.log(join_arr); // 1_2_3_4
arr.pop(); // remove last element from last
console.log(arr);
arr.push(5);
console.log(arr); // insert element from last in array

arr_shift = arr.shift();
console.log(arr, arr_shift); // remove first element from start

arr_unshift = arr.unshift(77); // add one elemnt in start
console.log(arr);

// delete using this you remove desiger element from array

delete arr[3];
console.log(arr);

// concat array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];
console.log(array1.concat(array2, array3));
