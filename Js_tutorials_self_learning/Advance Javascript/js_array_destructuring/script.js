//  Destructring

// let arr = [3, 5, 8];
// let [a, b, c] = arr;
// console.log(c, b, a);

// ====================
// let [a, b, c, d] = arr;
// console.log(a, b, c, d);

//=====================
// let [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a, b, c, d);

//=====================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [a, b, c, d, ...rest] = arr;
// console.log(a, b, c, d, rest);

//=====================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [a, , , , ...rest] = arr;
// console.log(a, rest);
// first array output is = 1
// second array output is = [5, 6, 7, 8, 9, 10]

//====================
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [a, , , , ...rest] = arr;
// console.log(a, rest);

//====================
// let { a, b } = { a: 1, b: 2 };
// console.log(a, b);

//====================
// const arr = [1, 7, 11];
// const obj = { ...arr };
// console.log(obj);

//=====================

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3;
// }

// let arr1 = [1, 2, 3];

// console.log(sum(...arr1));

//======================
//=========== vary vary use full in react Js ===========

// let obj = {
//   name: "abhi",
//   company_name: "cmp1",
//   address: "XYZ",
// };

// console.log({ ...obj, name: "soni abhishek", company_name: "PDPL Pvt Ltd" });
// In this case overwrite the object value

//======================
//======================

let obj = {
  name: "abhi",
  company_name: "cmp1",
  address: "XYZ",
};

console.log({ name: "soni abhishek", company_name: "PDPL Pvt Ltd", ...obj });
// In this case not overwrite the object value
