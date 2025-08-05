// let ctitle = document.getElementsByClassName("card-title")[1];
// ctitle.style.color = "red";

// let ctitle = document.getElementById("myId");
// ctitle.style.color = "red";

let ctitle = document.querySelectorAll(".card-title");
ctitle[0].style.color = "red";
ctitle[1].style.color = "green";
ctitle[2].style.color = "blue";

console.log(ctitle);

let tgName = document.getElementsByTagName("a");
let tgBName = document.body.getElementsByTagName("a"); // also same as tgName
console.log(tgName); // return all a tag
console.log(tgBName); // return all a tag

// Search a tage within a div or with In a specific class

let getSpecifictag_name = document
  .querySelector(".card")
  .getElementsByTagName("a");
console.log("specific = ", getSpecifictag_name);
// you get here card link which with in a card

// document.getElementsByName("NameOfTheInputBox")

console.log("querySelect", document.querySelector(".card-title"));
console.log("querySelectAll", document.querySelectorAll(".card-title"));
