const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

b = document.body;
console.log("First child of b" + b.firstChild); // output is #text Isme aap ko kisi bhi type ka output
//  mil sakta hai vo element , text or comment ho sakta hai

console.log("First element child of b", b.firstElementChild); //output is <nav></nav> element means
// all time firstElementChild return an html element or tag.

console.log("previous element sibling", b.previousElementSibling);

console.log("next element sibling", b.nextElementSibling);
