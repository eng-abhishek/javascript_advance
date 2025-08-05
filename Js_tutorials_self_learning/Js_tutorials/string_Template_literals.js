// Template literal

let boy1 = "Abhi";
let boy2 = "Soni";

let output = `${boy1} and ${boy2} are friends`;

console.log(output);

// Output is Abhi and Soni are friends

let name = `abhi soni "kya nua hai" aap ko`;
console.log(name);

let local = "Ayodhya";
let full_word = `aap ka address ${local}`;
console.log(full_word);

let new_sentanc = `yes it "is" a good boy`;

// Escape sequaance charactor:
let frute = "bana'na"; // its length is 8 But \' major as a one string
console.log(frute.length);

let vehicle = "moter\ncycle"; //  \n take new line
console.log(vehicle);
// o/p    moter
//        cycle

let vehicle1 = "moter\rcycle"; //  \r take new line
console.log(vehicle1);

let vehicle2 = "moter\tcycle"; //  \t take a one tab space between charactor
console.log(vehicle2);

let username = "abhi@gmail.com";
console.log(username.toUpperCase());
console.log(username.toLowerCase());

//  String Slice
let vegitable = "papaya";
console.log(vegitable.slice(2, 4)); // start with index 2 skip 4th one means take 2,3 index only

console.log(vegitable.slice(2)); // start with 2 take all till end of index

// String Replace
let phone = "iPhone";
console.log(phone.replace("i", "Normal"));

// concat string
let name11 = "Abhi";
let name12 = "is friend of all one";
console.log(name11.concat(name12));

let address = " Lucknow BBK ";
console.log(address.trim());

// string object
strPrim = "Abhishek";
const strObj = new String(strPrim);
console.log(strObj); // convert an string in an object

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
