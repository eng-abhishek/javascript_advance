const { split } = require("lodash");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chunk = 3;

// let a1 = arr.slice(0, chunk);
// let a2 = arr.slice(chunk, chunk + a1.length);

let a1 = arr.splice(0, chunk);
let a2 = arr.splice(0, chunk);
let a3 = arr.splice(0, chunk);

console.log(a1);
console.log(a2);
console.log(a3);

let str = "Abhi Nhi";
console.log(str.length);
console.log(str.split(" "));

// let obj = '["name","Abhi","email","abhi@g.c"]';

let obj = '{"name":"John", "age":30, "city":"New York"}';
let json_obj = JSON.parse(obj);
console.log(json_obj);

console.log("json stringify=" + JSON.stringify(json_obj));
