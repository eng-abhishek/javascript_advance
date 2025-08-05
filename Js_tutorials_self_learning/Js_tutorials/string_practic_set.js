// Q1
console.log("abhi\n".length); // 5 length

// Q2 convert a string to lower case
let str = "Abhi Soni";
let arr = "";
for (i = 0; i < str.length; i++) {
  arr.concat(str[i].toLowerCase());
}
console.log(arr);

// Find out amout part from a string
let strA = "i am 10 rupees";
//let num = strA.slice("i am".length, 7);
let num = Number.parseInt(strA.slice("i am".length, 7));
console.log(typeof num);

// console.log(strA.search("10"));
// console.log(strA[strA.search("10")]);

// use include keyword
sentance = "I am jay and you are vijay";
search_key = "jay";
if (sentance.includes(search_key)) {
  console.log("I have");
} else {
  console.log("Dont have");
}

sentance = "I am jay and you are vijay";
search_key = "jayu";
let keyword = `I have  ${
  sentance.includes(search_key) ? "" : "not"
} ${search_key}`;
console.log(keyword);

// startWith and endWith

let string = "I am ravi";
// console.log(string.startsWith('I'));  // return true and false
console.log(string.endsWith("i")); // return true and false
